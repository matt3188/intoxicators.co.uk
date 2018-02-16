import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(logger, ...middleware), ...enhancers);

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, composedEnhancers);
}
