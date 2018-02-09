import * as types from './types';
// import AuthService from '../../../utils/AuthService';

const initialState = {
  isAuthenticated: false,
  profile: null,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...initialState,
        isAuthenticated: true,
        profile: action.data,
      };
    }

    case types.LOGIN_FAILURE: {
      return {
        ...initialState,
        error: action.error,
      };
    }

    case types.RECEIVE_PROFILE: {
      return {
        ...initialState,
        profile: action.data,
      };
    }

    case types.LOGGED_OUT: {
      return initialState;
    }

    default:
      return state;
  }
}
