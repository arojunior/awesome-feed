import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'

import './assets/index.css'

import store from './modules'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
