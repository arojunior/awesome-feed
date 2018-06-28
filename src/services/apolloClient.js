import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import store from 'modules/index';
import { GITHUB_GRAPHQL } from '../constants';

const httpLink = createHttpLink({
  uri: GITHUB_GRAPHQL,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Basic ${store.getState().Login.token}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
