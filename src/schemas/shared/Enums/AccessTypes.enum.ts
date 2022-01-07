import { enumType } from 'nexus';
import { ACCESS_TYPES } from '../../../shared/enums/ACCESS_TYPES';

export const AccessTypesEnum = enumType({
  name: 'AccessTypes',

  members: [ACCESS_TYPES.PRIVATE, ACCESS_TYPES.PUBLIC],
});
