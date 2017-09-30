import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from '../src/modules'
import routes from '../src/routes'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    div
  )
})
