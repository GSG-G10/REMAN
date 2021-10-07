const { checkEmail, addUser } = require('./User');
const {
  productByCategory, getProductsQuery, productDataQuery, addNewProductQuery,
} = require('./products');

module.exports = {
  checkEmail,
  addUser,
  productByCategory,
  getProductsQuery,
  productDataQuery,
  addNewProductQuery,
};
