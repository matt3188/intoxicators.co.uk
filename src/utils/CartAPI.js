export default class CartAPI {
  static getProductData() {
    const product = window.localStorage.getItem('product');
    return product ? JSON.parse(window.localStorage.product) : {};
  }
}
