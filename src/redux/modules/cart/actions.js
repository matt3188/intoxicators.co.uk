import * as types from './types';

export const receiveProducts = products => ({
  type: types.RECEIVED_PRODUCTS,
  payload: { products },
});
