import gql from 'graphql-tag'

export const getGithubActivity = gql`
  query {
    user(login: "arojunior") {
      following(last: 5) {
        totalCount
        nodes {
          login
          name
          avatarUrl
          issueComments(last: 3) {
            nodes {
              repository {
                name
              }
              issue {
                number
              }
              bodyHTML
              url
              createdAt
            }
          }
          pullRequests(last: 3) {
            nodes {
              repository {
                name
              }
              bodyHTML
              url
              createdAt
            }
          }
          commitComments(last: 3) {
            nodes {
              repository {
                name
              }
              bodyHTML
              url
              createdAt
            }
          }
          starredRepositories(last: 3) {
            nodes {
              nameWithOwner
              createdAt
            }
          }
        }
      }
    }
  }
`
