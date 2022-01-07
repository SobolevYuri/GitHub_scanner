# GitHub_scanner
*GitHub scanner* tech task's repo

- install deps: *npm install*

- run the app: *npm run start*

- local API: POST *http://localhost:5555/graphql*

Notes:
- to auth a request add *Authorization* header with a *token <your_gh_acces_token>* value provided
- set up a GitHub user login and repos list (according to the task's requirements if I'm correct) in the *.env* file
- request for getting all the repos (with a possibility to filter them, yeah!):
    *Example*:
        query {
            repositories(
                /*optional*/
                input: {
                    accessToken: "<your_gh_token>"
                },
                where: {
                    equals: "scanner_repoB",
                    contains: "scanner"
                }
                /*optional*/
            ) {
                id,
                name,
                size,
                owner,
            }
        }

- request for getting the exact repo's details (by specifying the name):
    *Example*:
        query {
            repositoryDetails(
                /*optional*/
                input: {
                    accessToken: "<your_gh_token>"
                },
                /*optional*/
                /*required*/
                where: {
                    name: "scanner_repoB"
                }
                /*required*/
            ) {
                id,
                name,
                size,
                owner,
                accessType,
                filesCount,
                activeWebhooks,
                ymlFileContent
            }
        }
