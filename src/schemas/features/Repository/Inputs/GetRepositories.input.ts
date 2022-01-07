import { inputObjectType } from 'nexus';

export const GetRepositoriesInput = inputObjectType({
    name: 'GetRepositoriesInput',
    definition(t) {
        t.nonNull.string('accessToken', {
            description: 'GitHub dev token is using here for accessing a private repos'
        });
    }
});
