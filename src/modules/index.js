import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import fetchMiddleware from 'fetch-middleware'

const combineReducer = combineReducers({
  form: formReducer
})

export default createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
