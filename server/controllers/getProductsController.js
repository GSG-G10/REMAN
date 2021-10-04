const { getProductsQuery } = require('../database/queries');

const getAllProducts = (req, res) => {
  getProductsQuery()
    .then((data) => res.json(data.rows))
    .catch(() => {
      res.status(500).json({ status: 500, msg: 'Server Error' });
    });
};

module.exports = getAllProducts;
