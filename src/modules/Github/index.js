import { createAction, handleActions } from 'redux-actions'

const FOLLOWING = 'modules/Github/FOLLOWING'
const ACTIVITY = 'modules/Github/ACTIVITY'

const initialState = {
  following: null,
  activity: null
}

export const getFollowing = createAction(FOLLOWING)
export const getActivity = createAction(ACTIVITY)

export default handleActions(
  {
    [FOLLOWING]: (state, action) => ({
      ...state,
      following: action.payload
    }),

    [ACTIVITY]: (state, action) => ({
      ...state,
      activity: action.payload
    })
  },
  initialState
)
