const connection = require('../../config/connection');

const addToCartQuery = ({ productId, quantity, userId }) => connection.query(
  'INSERT INTO cart (user_id, product_id, qunatity) VALUES ($1, $2, $3) ON CONFLICT (product_id, user_id) DO UPDATE SET qunatity = $3 RETURNING *',
  [userId, productId, quantity],
);

module.exports = addToCartQuery;
