import { createAction } from 'redux-actions';

export const SET_TRENDING_USERS = `modules/Trending/SET_USERS`;
export const SET_TRENDING_REPOS = `modules/Trending/SET_REPOS`;

export const setTrendingUsers = createAction(SET_TRENDING_USERS);
export const setTrendingRepos = createAction(SET_TRENDING_REPOS);
