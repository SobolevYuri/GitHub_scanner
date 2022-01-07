import { IBaseRepoEntity } from './IBaseRepoEntity';
import { ACCESS_TYPES } from '../enums/ACCESS_TYPES';

export interface IRepoDetails extends IBaseRepoEntity {
    accessType: ACCESS_TYPES;
    filesCount: number;
    ymlFileContent: string | null;
    activeWebhooks: Array<Object> | null;
}
