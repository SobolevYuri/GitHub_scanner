import { ResolverMethod } from '../../shared/types/ResolverMethod';
import { DataObject } from '../../shared/types/DataObject';
import { Url } from '../../shared/types/Url';
import { IRepo } from '../../shared/interfaces/IRepo';

import { getGitHubReqHeaders } from '../../shared/helpers/getGitHubReqHeaders';
import { axiosGetResponseData } from '../../shared/helpers/axiosGetResponseData';

const MAX_PARALLEL_GH_REQS_COUNT = 2;

const getReposRequestsQueueOptimizer = async (
    {
        urlTemplate,
        repoNamesList,
        maxRequestsCount,
        options
    }:
    {
        urlTemplate: Url,
        repoNamesList: Array<string>,
        maxRequestsCount: number,
        options: DataObject
    }
): Promise<Array<DataObject>> => {
    const REPO_NAME_PLACEHOLDER = '<repo_name>';
    let repos: Array<DataObject> = [], reqQueue: Array<Promise<DataObject>> = [];

    if (repoNamesList.length === 0) return [];

    let maxCurrentReposListIndex = maxRequestsCount - 1;

    const processRequestsQuee = async (): Promise<void> => {
        repos = repos.concat(await Promise.all(reqQueue));
        reqQueue = [];
        maxCurrentReposListIndex += maxRequestsCount;
    };

    for (let i = 0; i <= repoNamesList.length; i++) {
        if (i <= maxCurrentReposListIndex) {
            if (i !== repoNamesList.length) {
                reqQueue.push(axiosGetResponseData(urlTemplate.replace(REPO_NAME_PLACEHOLDER, repoNamesList[i]), options));
            } else {
                await processRequestsQuee();

                return repos;
            }
        } else {
            await processRequestsQuee();

            reqQueue.push(axiosGetResponseData(urlTemplate.replace(REPO_NAME_PLACEHOLDER, repoNamesList[i]), options));
        }
    }

    return repos;
};

export const getRepos: ResolverMethod<IRepo[] | null | any> = async (root, args) => {
    const predefinedRepoNamesList = process.env.GITHUB_REPOS_LIST?.split(', ');

    if (!predefinedRepoNamesList) {
        console.error('[getRepos] Repository names weren\'t provided (via corresponding env variable)');
        return null;
    }

    const reqOptions: DataObject = {
        ...getGitHubReqHeaders(args.input?.accessToken)
    };

    const repos: Array<DataObject> = await getReposRequestsQueueOptimizer(
        {
            urlTemplate: `${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_LOGIN}/<repo_name>`,
            repoNamesList: predefinedRepoNamesList,
            maxRequestsCount: MAX_PARALLEL_GH_REQS_COUNT,
            options: reqOptions,
        }
    );

    if (repos.length === 0) return repos;

    const repoDataFormatter = (repoData: DataObject): IRepo => ({
        id: repoData.id,
        name: repoData.name,
        owner: repoData.owner.login,
        size: repoData.size
    });

    if(!args.where || !args.where.name) return repos.map(repoDataFormatter);

    const getReposFilter = (filterBy: DataObject) => {
        switch(true) {
            case !!filterBy?.equals:
                return (item: DataObject): boolean => item.name === filterBy.equals;
            case !!filterBy?.contains:
                return (item: DataObject): boolean => item.name.includes(filterBy.contains);
            default:
                return (item: DataObject): boolean => true
        }
    };

    return repos.filter(getReposFilter(args.where?.name)).map(repoDataFormatter) as IRepo[];
};
