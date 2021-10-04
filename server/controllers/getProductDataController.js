const { productDataQuery } = require('../database/queries');

const getProductData = (req, res) => {
  productDataQuery(req.params.id)
    .then((data) => res.json(data.rows))
    .catch(() => {
      res.status(500).json({ status: 500, msg: 'Server Error' });
    });
};

module.exports = getProductData;
