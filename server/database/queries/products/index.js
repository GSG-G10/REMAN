const getProductsQuery = require('./getProductsQuery');
const productDataQuery = require('./getProductDataQuery');
const productByCategory = require('./getProductByCgId');
const addToCartQuery = require('./addProductToCartQuery');

module.exports = {
  getProductsQuery,
  productDataQuery,
  productByCategory,
  addToCartQuery,
};
