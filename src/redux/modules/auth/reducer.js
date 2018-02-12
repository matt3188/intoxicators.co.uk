import Auth from 'utils/Auth';
import * as types from './types';

  isAuthenticated: false,
export default function authReducer(
  state = {
    isAuthenticated: !Auth.isTokenExpired(),
    isFetching: false,
    profile: Auth.getProfile(),
    error: null,
  },
  action
) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        profile: action.payload.profile,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: {},
      };
    default:
      return state;
  }
}
