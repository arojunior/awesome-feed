import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import moment from 'moment-timezone'
import store from './modules'
import apolloClient from './services/apolloClient'
import App from './containers/HomeContainer'
import registerServiceWorker from './registerServiceWorker'

import 'assets/App.css'

render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

moment.tz.setDefault(moment.tz.guess());
registerServiceWorker()
