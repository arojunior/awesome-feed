import { handleAction, createAction } from 'redux-actions'
import { defineState } from 'redux-localstore'
import axios from 'axios'
const SET_USER = 'modules/Login/SET_USER'

const defaultState = {
  profile: {}
}

const initialState = defineState(defaultState)('Login')

export const setUser = createAction(SET_USER, async username => {
  const profile = await axios.get(`https://api.github.com/users/${username}`)
  return profile.data
})

export default handleAction(
  SET_USER,
  (state, action) => ({
    ...state,
    profile: action.payload
  }),
  initialState
)
