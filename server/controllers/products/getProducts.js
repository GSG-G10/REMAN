const { getProductsQuery } = require('../../database/queries/products');

const getProducts = (req, res) => {
  const queryString = req.query;

  getProductsQuery(queryString)
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => {
      res.status(500).json({ status: 500, msg: 'Server Error' });
    });
};

module.exports = getProducts;
