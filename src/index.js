import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import store from './modules'
import apolloClient from './services/apolloClient'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
