import { interfaceType } from 'nexus';

export const BaseRepoEntityInterface = interfaceType({
  resolveType: () => null,
  name: 'BaseRepoEntity',
  definition(t) {
    t.nonNull.id('id', {
      description: 'The main identifier of the item'
    });
  
    t.nonNull.string('name', {
      description: 'Name of the repository'
    });
  
    t.nonNull.string('owner', {
      description: 'Owner of the repository (his login)'
    });

    t.nonNull.int('size', {
      description: 'Size of the repository (in kilobytes)'
    });
  }
});
