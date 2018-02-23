import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './modules/auth';
import cartReducer from './modules/cart';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  cart: cartReducer,
});
