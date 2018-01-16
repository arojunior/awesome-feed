import axios from 'axios';
import { handleAction, createAction } from 'redux-actions';
import { defineState } from 'redux-localstore';
import { GITHUB, CLIENT_ID, CLIENT_SECRET } from 'constants/index';

const SET_USER = 'modules/Login/SET_USER';

const defaultState = {
  token: null
};

const initialState = defineState(defaultState)('Login');

export const setUser = createAction(SET_USER, code => {
  return axios
    .post(`${GITHUB}/login/oauth/access_token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: `https://awesomefeed.js.org/login`,
      state: `awesomefeed`,
      code
    })
    .then(({ data }) => {
      console.log(data);
      return data.access_token;
    });
});

export default handleAction(
  SET_USER,
  (state, action) => ({
    ...state,
    token: action.payload
  }),
  initialState
);
