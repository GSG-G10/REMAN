const connection = require('../../config/connection');

const addToCartQuery = ({ productId, quantity, userId }) => connection.query(
  'INSERT INTO cart (user_id, product_id, qunatity) VALUES ($3, $1, $2) ON CONFLICT (product_id, user_id) DO UPDATE SET qunatity = $2 RETURNING *',
  [productId, quantity, userId],
);

module.exports = addToCartQuery;
