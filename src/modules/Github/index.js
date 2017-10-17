import { createAction, handleActions } from 'redux-actions'
import { defineState } from 'redux-localstore'

const FOLLOWING = 'modules/Github/FOLLOWING'
const ACTIVITY = 'modules/Github/ACTIVITY'
const TRENDING_REPOS = 'modules/Github/TRENDING_REPOS'

const defaultState = {
  following: null,
  activity: null,
  trendingRepos: null
}

const initialState = defineState(defaultState)('Github')

export const setFollowing = createAction(FOLLOWING)
export const setActivity = createAction(ACTIVITY)
export const setTrendingRepos = createAction(TRENDING_REPOS)

export default handleActions(
  {
    [FOLLOWING]: (state, action) => ({
      ...state,
      following: action.payload
    }),

    [ACTIVITY]: (state, action) => ({
      ...state,
      activity: action.payload
    }),

    [TRENDING_REPOS]: (state, action) => ({
      ...state,
      trendingRepos: action.payload
    })
  },
  initialState
)
