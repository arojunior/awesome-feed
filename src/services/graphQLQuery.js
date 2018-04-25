import gql from 'graphql-tag';
import store from 'modules/index';

const state = store.getState();

export const getGithubActivity = gql`
  query {
    user(login: "${state.Login.username}") {
      following(last: 100) {
        totalCount
        nodes {
          login
          name
          avatarUrl
          watching(last: 2) {
            nodes {              
              description
              url
              nameWithOwner
              createdAt
            }
          }          
          issueComments(last: 3) {
            nodes {
              repository {
                name
                nameWithOwner
                url
              }
              issue {
                number
                title
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
                nameWithOwner
                url
              }
              bodyHTML
              url
              number
              createdAt
            }
          }
          commitComments(last: 5) {
            nodes {
              repository {
                name
                nameWithOwner
                url
              }
              bodyHTML
              url
              createdAt
            }
          }
          starredRepositories(last: 5) {
            nodes {
              nameWithOwner
              createdAt
              url
              description
              stargazers {
                totalCount
              }            
              languages(first: 5) {
                nodes {
                  name
                }
              }                
            }
          }
        }
      }
    }
  }
`;

export const getProfileInfo = gql`
query {
  user(login: "${state.Login.username}") {
      avatarUrl
      login
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
  }
}
`;
