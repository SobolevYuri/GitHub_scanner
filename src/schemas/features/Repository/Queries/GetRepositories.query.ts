import { queryField, list, arg } from 'nexus';
import { repositoriesResolvers } from '../../../../resolvers';

export const GetRepositoriesQuery = queryField('repositories', {
  type: list('Repository'),

  args: {
    where: arg({
      type: 'RepositoryWhereInput'
    }),
    input: arg({
      type: 'GetRepositoriesInput'
    })
  },

  resolve: repositoriesResolvers.getRepos,
});
