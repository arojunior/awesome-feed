import base64 from 'base-64';
import { handleActions, createAction } from 'redux-actions';
import { defineState } from 'redux-localstore';

const SET_TOKEN = 'modules/Login/SET_TOKEN';
const SET_USERNAME = 'modules/Login/SET_USERNAME';

const defaultState = {
  token: null,
  username: null
};

const initialState = defineState(defaultState)('Login');

export const setToken = createAction(SET_TOKEN);
export const setUsername = createAction(SET_USERNAME);

export default handleActions(
  {
    [SET_TOKEN]: (state, action) => ({
      ...state,
      token: base64.encode(`arojunior:${action.payload.data}`)
    }),
    [SET_USERNAME]: (state, action) => ({
      ...state,
      username: action.payload
    })
  },
  initialState
);
