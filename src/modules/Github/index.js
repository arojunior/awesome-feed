import { createAction, handleActions } from 'redux-actions'
import { defineState } from 'redux-localstore'

const FOLLOWING = 'modules/Github/FOLLOWING'
const ACTIVITY = 'modules/Github/ACTIVITY'

const defaultState = {
  following: null,
  activity: []
}

const initialState = defineState(defaultState)('Github')

export const setFollowing = createAction(FOLLOWING)
export const setActivity = createAction(ACTIVITY)

export default handleActions(
  {
    [FOLLOWING]: (state, action) => ({
      ...state,
      following: action.payload
    }),

    [ACTIVITY]: (state, action) => ({
      ...state,
      activity: state.activity.concat(action.payload)
    })
  },
  initialState
)
