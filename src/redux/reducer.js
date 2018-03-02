import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './modules/auth';
import navigationReducer from './modules/navigation';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  navigation: navigationReducer,
});
