import axios from 'axios';
import base64 from 'base-64'
import { handleAction, createAction } from 'redux-actions';
import { defineState } from 'redux-localstore';
import { CLIENT_ID, CLIENT_SECRET } from 'constants/index';

const SET_USER = 'modules/Login/SET_USER';

const devToken = base64.encode(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_TOKEN}`)

const defaultState = {
  token: process.env.NODE_ENV === `development` ? devToken : null
};

const initialState = defineState(defaultState)('Login');

export const setUser = createAction(SET_USER, code => {
  return axios
    .post(`https://github.com/login/oauth/access_token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: `https://awesomefeed.js.org/#/login`,
      state: `awesomefeed`,
      code
    })
});

export default handleAction(
  SET_USER,
  (state, action) => ({
    ...state,
    token: action.payload
  }),
  initialState
);
