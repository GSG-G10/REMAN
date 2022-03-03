const getProductsQuery = require('../../database/queries/products/getProductsQuery');

const getProducts = (req, res) => {
  getProductsQuery(req.query)
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => {
      res.status(500).json({ status: 500, msg: 'Server Error' });
    });
};

module.exports = getProducts;
