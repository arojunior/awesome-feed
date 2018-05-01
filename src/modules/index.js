import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import storeSynchronize from 'redux-localstore';
import Login from './Login';

const rootReducer = combineReducers({
  Login
});

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(promiseMiddleware), devTools)
);

storeSynchronize(store);

export default store;
