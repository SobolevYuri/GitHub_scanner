import { inputObjectType } from 'nexus';

export const RepositoryWhereInput = inputObjectType({
  name: 'RepositoryWhereInput',
  definition(t) {
    t.field('name', {
      type: 'StringFilter'
    });
  }
});
