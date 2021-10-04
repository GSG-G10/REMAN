const connection = require('../config/connection');

const getProductsQuery = () => connection.query('SELECT * FROM products');

module.exports = getProductsQuery;
