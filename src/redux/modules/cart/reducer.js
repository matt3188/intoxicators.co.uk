import CartAPI from 'utils/CartAPI';
import * as types from './types';

export default function cartReducer(
  state = {
    isFetching: false,
    error: null,
    products: CartAPI.getProductData(),
  },
  action
) {
  switch (action.type) {
    case types.RECEIVED_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
}
