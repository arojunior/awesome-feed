import { combineReducers } from 'redux'
import { createStore } from 'redux'

import Github from './Github'
import Login from './Login'

const rootReducer = combineReducers({
  Github,
  Login
})

export default createStore(rootReducer)
