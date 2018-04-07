import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable';
import createReducer from './reducer'
const browserHistory = createBrowserHistory();
const middlewares = [
  // sagaMiddleware,
  thunkMiddleware,
  promiseMiddleware(),
  routerMiddleware(browserHistory),
];

const enhancers = [
  applyMiddleware(...middlewares),
];
const store = createStore(
  createReducer(),
  fromJS({}),
  compose(...enhancers)
);
export { browserHistory }
export default store