const { getProductsQuery } = require('../database/queries');

const getAllProducts = (req, res) => {
  getProductsQuery().then((data) => res.json(data));
};

module.exports = getAllProducts;
