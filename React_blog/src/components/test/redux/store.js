import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const reducers = combineReducers(rootReducer);
const middlewares = [penderMiddleware()];

// 개발 모드일 때만 Redux Devtools 적용
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export default configure;
