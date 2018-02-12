import * as types from './types';

export const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
});

export const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const receiveProfile = data => ({
  type: types.RECEIVE_PROFILE,
  data,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
