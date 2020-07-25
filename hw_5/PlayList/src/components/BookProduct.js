import ShopProduct from './ShopProduct';

function BoolProduct (title, price, numPages) {
  ShopProduct.apply(this, arguments);
  this.numPages = numPages;
}

BoolProduct.prototype = Object.create(ShopProduct.prototype);
BoolProduct.prototype.constructor = BoolProduct;

BoolProduct.prototype.getNumPages = function() {
  return this.numPages;
}

export default BoolProduct;