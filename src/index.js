import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './modules'
import Home from './routes/Home'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
