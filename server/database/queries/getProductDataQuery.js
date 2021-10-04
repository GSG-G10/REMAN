const connection = require('../config/connection');

const productDataQuery = (id) => connection.query('SELECT * FROM products WHERE id=$1', [id]);

module.exports = productDataQuery;
