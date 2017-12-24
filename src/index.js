import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from './modules'
import apolloClient from './services/apolloClient'
import Home from './routes/Home'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
