const connection = require('../../config/connection');

const deleteCartProductQuery = (userId, productId) => connection.query('DELETE FROM cart WHERE user_id = $1 AND product_id = $2', [userId, productId]);

module.exports = deleteCartProductQuery;
