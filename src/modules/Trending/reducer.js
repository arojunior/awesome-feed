import { handleActions } from 'redux-actions';
import { defineState } from 'redux-localstore';
import { SET_TRENDING_USERS, SET_TRENDING_REPOS } from './actions';

const defaultState = {
  users: [],
  repos: [],
};

const initialState = defineState(defaultState)(`Trending`);

export default handleActions(
  {
    [SET_TRENDING_USERS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    [SET_TRENDING_REPOS]: (state, action) => ({
      ...state,
      repos: action.payload,
    }),
  },
  initialState,
);
