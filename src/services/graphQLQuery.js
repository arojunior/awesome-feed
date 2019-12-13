import gql from 'graphql-tag';
import store from '../modules/index';

const state = store.getState();

export const getGithubActivity = gql`
query {
  getFeed(username: "${state.Login.username}") {
    cursor
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
}`;

export const getProfileInfo = gql`
query {
  getProfile(username: "${state.Login.username}") {
    avatarUrl
    login
    followers
    following
    starredRepositories
  }
}`;
