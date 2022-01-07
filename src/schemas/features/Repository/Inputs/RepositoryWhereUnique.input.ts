import { inputObjectType } from 'nexus';

export const RepositoryWhereUniqueInput = inputObjectType({
  name: 'RepositoryWhereUniqueInput',
  definition(t) {
    t.string('name');
  }
});
