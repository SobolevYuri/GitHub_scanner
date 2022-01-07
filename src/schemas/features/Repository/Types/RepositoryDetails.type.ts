import { objectType } from 'nexus';

export const RepositoryDetailsType = objectType({
  name: 'RepositoryDetails',
  definition(t) {
    t.implements('BaseRepoEntity');

    t.nonNull.field('accessType', {
        type: 'AccessTypes',
        description: 'Is the repo private or public'
    });

    t.nonNull.int('filesCount', {
      description: 'How many files are in the repo'
    });

    t.nullable.string('ymlFileContent', {
        description: 'Content of 1 yml file (any one that appear in the repo)'
    });

    t.nullable.json('activeWebhooks', {
        description: 'List of all the related active webhooks'
    });
  }
});
