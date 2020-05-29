import gql from 'graphql-tag';

export const getGithubActivity = gql`
  query getFeed($username: String!, $cursor: String) {
    getFeed(username: $username, cursor: $cursor) {
      cursor
      hasNextPage
      activity {
        login
        name
        avatarUrl
        description
        nameWithOwner
        url
        bodyHTML
        stargazers
        number
        title
        createdAt
        type
        repository {
          name
          nameWithOwner
          url 
        }
        issue {
          number
          title        
        }
        languages {
          name
        } 
      }
    }
  }
`;

export const getProfileInfo = gql`
  query getProfile($username: String!) {
    getProfile(username: $username) {
      avatarUrl
      login
      followers
      following
      starredRepositories
    }
  }
`;
