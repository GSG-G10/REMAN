const getProductsQuery = require('./getProductsQuery');
const productDataQuery = require('./getProductDataQuery');
const productByCategory = require('./getProductByCgId');
const addToCartQuery = require('./addProductToCartQuery');
const addNewProductQuery = require('./addNewProductQuery');

module.exports = {
  getProductsQuery,
  productDataQuery,
  productByCategory,
  addToCartQuery,
  addNewProductQuery,
};
