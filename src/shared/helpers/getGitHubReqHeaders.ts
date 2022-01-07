export const getGitHubReqHeaders = (ghAccessToken: string | undefined): Object =>
    ghAccessToken
    ? {
        headers: {
            'Authorization': `token ${ghAccessToken}`
        }
    }
    : {};
