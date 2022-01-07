import { inputObjectType } from 'nexus';

export const StringFilterInput = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.string('contains');

    t.string('equals');
  }
});
