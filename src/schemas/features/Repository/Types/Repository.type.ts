import { objectType } from 'nexus';

export const RepositoryType = objectType({
  name: 'Repository',
  definition(t) {
    t.implements('BaseRepoEntity');
  }
});
