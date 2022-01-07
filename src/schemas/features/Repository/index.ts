import { RepositoryWhereInput } from './Inputs/RepositoryWhere.input';
import { RepositoryWhereUniqueInput } from './Inputs/RepositoryWhereUnique.input';
import { GetRepositoriesInput } from './Inputs/GetRepositories.input';

import { GetRepositoriesQuery } from './Queries/GetRepositories.query';
import { GetRepositoryDetailsQuery } from './Queries/GetRepositoryDetails.query';

import { RepositoryType } from './Types/Repository.type';
import { RepositoryDetailsType } from './Types/RepositoryDetails.type';
import { BaseRepoEntityInterface } from '../../shared/Interfaces/BaseRepoEntity.interface';

export const RepositoryTypes = [
    RepositoryWhereInput,
    RepositoryWhereUniqueInput,
    GetRepositoriesInput,

    GetRepositoriesQuery,
    GetRepositoryDetailsQuery,

    BaseRepoEntityInterface,
    RepositoryType,
    RepositoryDetailsType,
];
