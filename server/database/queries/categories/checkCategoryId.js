const connection = require('../../config/connection');

const checkCategoryIdQuery = (id) => connection.query(
  ' SELECT EXISTS (SELECT id FROM categories WHERE id = $1)', [id],
);
module.exports = checkCategoryIdQuery;
