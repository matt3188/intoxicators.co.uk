import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './modules/auth';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
});
