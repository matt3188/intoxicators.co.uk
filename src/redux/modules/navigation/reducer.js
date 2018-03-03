import * as types from './types';

export default function navigationReducer(
  state = {
    menuState: false,
  },
  action
) {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menuState: !state.menuState,
      };
    case types.CLOSE_MENU:
      return {
        ...state,
        menuState: false,
      };
    default:
      return state;
  }
}
