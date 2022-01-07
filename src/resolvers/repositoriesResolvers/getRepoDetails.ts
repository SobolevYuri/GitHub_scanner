import { ACCESS_TYPES } from '../../shared/enums/ACCESS_TYPES';
import { Url } from '../../shared/types/Url';
import { DataObject } from '../../shared/types/DataObject';
import { ResolverMethod } from '../../shared/types/ResolverMethod';
import { IRepoDetails } from '../../shared/interfaces/IRepoDetails';

import { getGitHubReqHeaders } from '../../shared/helpers/getGitHubReqHeaders';
import { axiosGetResponseData } from '../../shared/helpers/axiosGetResponseData';

export const getRepoDetails: ResolverMethod<IRepoDetails | null> = async (root, args) => {
    if(!args.where || !args.where.name) return null;

    const repoName = args.where?.name;
    const ghAccessToken = args.input?.accessToken;
    const reqOptions = {
        ...getGitHubReqHeaders(ghAccessToken)
    };

    const repo = await axiosGetResponseData(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_LOGIN}/${repoName}`, reqOptions);
    let formattedRepoData: IRepoDetails;

    if (repo) {
        const getRepoActiveWebhooks = async (accessToken?: string): Promise<Array<DataObject> | null> => {
            if (!accessToken) return null;

            try {
                return (await axiosGetResponseData(repo.hooks_url, reqOptions))
                                .filter((item: DataObject) => item.active);
            } catch(err) {
                console.error('[getRepoDetails getRepoDetails]: ', err);
                return null;
            }
        };

        formattedRepoData = {
            id: repo.id,
            name: repo.name,
            owner: repo.owner.login,
            size: repo.size,
            accessType: repo.private
                        ? ACCESS_TYPES.PRIVATE
                        : ACCESS_TYPES.PUBLIC,
            activeWebhooks: await getRepoActiveWebhooks(ghAccessToken),
            filesCount: 0,
            ymlFileContent: null
        };
    } else return null;

    const repoFiles = (await axiosGetResponseData(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_LOGIN}/${repoName}/git/trees/master?recursive=1`, reqOptions)).tree;

    const getRandomYamlFileContent = async (url: Url | null): Promise<string | null> => {
        if (!url) return null;

        try {
            return Buffer.from(
                    (await axiosGetResponseData(url, reqOptions)).content,
                    'base64'
            ).toString();
        } catch(err) {
            console.error('[getRepoDetails getRandomYamlFileContent]: ', err);
            return null;
        }
    };

    let ymlFileUrl: Url | null = null;

    formattedRepoData.filesCount = repoFiles.reduce(
        (counter: number, item: DataObject) => {
            if (item.type !== 'tree') {
                if (!ymlFileUrl && item.path.includes('.yml')) {
                    ymlFileUrl = item.url;
                }

                return ++counter;
            } else return counter;
        },
        0
    );

    formattedRepoData.ymlFileContent = await getRandomYamlFileContent(ymlFileUrl);

    return formattedRepoData;
};
