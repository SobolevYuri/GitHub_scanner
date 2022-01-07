import { extendType, arg, nonNull } from 'nexus';
import { repositoriesResolvers } from '../../../../resolvers';

export const GetRepositoryDetailsQuery = extendType({
  type: 'Query',

  definition(t) {
    t.field('repositoryDetails', {
      type: 'RepositoryDetails',

      args: {
        where: nonNull(
          arg({
            type: 'RepositoryWhereUniqueInput'
          })
        ),
        input: arg({
          type: 'GetRepositoriesInput'
        })
      },

      resolve: repositoriesResolvers.getRepoDetails
    });
  }
});
