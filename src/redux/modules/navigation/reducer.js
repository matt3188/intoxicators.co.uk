import * as types from './types';

export default function navigationReducer(
  state = {
    menuOpen: false,
  },
  action
) {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
}
