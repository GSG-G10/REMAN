const connection = require('../../config/connection');

const getCartProducts = (userId) => connection.query(
  'Select * FROM  cart  inner join products on (products.id=cart.product_id) where user_id=$1',
  [userId],
);

module.exports = getCartProducts;
