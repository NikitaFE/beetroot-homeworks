function ShopProduct (title, price) {
  this.title = title;
  this.price = price;
}

ShopProduct.prototype.getTitle = function() {
  return this.title;
}

ShopProduct.prototype.setTitle = function(newTitle) {
  this.title = newTitle;
}

ShopProduct.prototype.setPrice = function(newPrice) {
  this.price = newPrice;
}

ShopProduct.prototype.getPrice = function(newPrice) {
  return this.price;
}

ShopProduct.prototype.getInfo = function() {
  return `Title: ${this.title} Price: ${this.price}`;
}

export default ShopProduct;