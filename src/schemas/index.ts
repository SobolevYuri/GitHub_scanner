import path from 'path';
import { makeSchema, queryComplexityPlugin, fieldAuthorizePlugin } from 'nexus';

import { RepositoryTypes } from './features/Repository';
import { AccessTypesEnum } from './shared/Enums/AccessTypes.enum';
import { StringFilterInput } from './shared/Inputs/StringFilter.input';
import { JsonScalar } from './shared/Scalars/Json.scalar';

const types = [
    // Features
    RepositoryTypes,

    // Shared Enums
    AccessTypesEnum,

    // Shared Inputs
    StringFilterInput,

    // Shared Scalars
    JsonScalar,
];

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(__dirname, './generated/', 'nexus-typegen.ts'),
    schema: path.join(__dirname, './generated/', 'schema.graphql')
  },
  plugins: [
    queryComplexityPlugin(),
    fieldAuthorizePlugin()
  ]
});
