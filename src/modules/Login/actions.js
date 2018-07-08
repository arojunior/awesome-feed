import { createAction } from 'redux-actions';

export const SET_TOKEN = `modules/Login/SET_TOKEN`;
export const SET_USERNAME = `modules/Login/SET_USERNAME`;

export const setToken = createAction(SET_TOKEN);
export const setUsername = createAction(SET_USERNAME);
