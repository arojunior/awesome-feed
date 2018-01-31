import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory } from 'react-router'
import store from './modules'
import apolloClient from './services/apolloClient'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'

import 'assets/App.css'

render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Router history={hashHistory} routes={routes} />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
