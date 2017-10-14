import { handleAction, createAction } from 'redux-actions'

const SET_USER = 'modules/Login/SET_USER'

const initialState = {
  username: null
}

export const setUser = createAction(SET_USER)

export default handleAction(
  SET_USER,
  (state, action) => ({
    ...state,
    username: action.payload.username
  }),
  initialState
)
