import { combineReducers } from 'redux'
import { createStore } from 'redux'

import Github from './Example'

const rootReducer = combineReducers({
  Github
})

export default createStore(rootReducer)
