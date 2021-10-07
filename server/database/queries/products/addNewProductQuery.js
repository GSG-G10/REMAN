const connection = require('../../config/connection');

const addNewProductQuery = (
  name, price, discount, url, category,
) => connection.query(
  'INSERT INTO products (name, price, discount, image, category_id) VALUES ($1, $2, $3, $4, $5)',
  [name, price, discount, url, category],
);
module.exports = addNewProductQuery;
