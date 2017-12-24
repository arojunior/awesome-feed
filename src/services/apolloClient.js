import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GITHUB_GRAPHQL, TOKEN } from '../constants'

const httpLink = createHttpLink({
  uri: GITHUB_GRAPHQL
})

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Basic ${TOKEN}`
  }
}))

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
