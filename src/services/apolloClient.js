import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AWESOME_FEED_SERVER } from '../constants';

const httpLink = createHttpLink({
  uri: `${AWESOME_FEED_SERVER}/graphql`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
