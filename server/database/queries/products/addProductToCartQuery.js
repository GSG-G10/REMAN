const connection = require('../../config/connection');

const addToCartQuery = ({ productId, quantity, userId }) => connection.query('INSERT INTO cart (user_id, product_id, qunatity) VALUES ()', [productId, quantity, userId]);

module.exports = addToCartQuery;
