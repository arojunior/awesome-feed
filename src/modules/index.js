import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import storeSynchronize from 'redux-localstore';
import Login from 'modules/Login/reducer';
import Trending from 'modules/Trending/reducer';

const rootReducer = combineReducers({
  Login,
  Trending,
});

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(promiseMiddleware),
    devTools,
  ),
);

storeSynchronize(store);

export default store;
