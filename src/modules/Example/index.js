import {handleActions} from 'redux-actions'

import {GITHUB_FETCHING, GITHUB_SUCCESS, GITHUB_ERROR} from './actions'

const initialState = {
    fetching : false,
    user     : null
}

const reducer = handleActions({
  [GITHUB_FETCHING]: (state, action) => ({
      ...state,
      sending     : true
  }),

  [GITHUB_SUCCESS]: (state, action) => ({
      ...state,
      sending     : false,
      user        : action.payload.data
  }),

  [GITHUB_ERROR]: (state, action) => ({
      ...state,
      sending     : false,
  })

}, initialState);

export default reducer
