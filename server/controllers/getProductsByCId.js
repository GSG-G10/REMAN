const { productByCategory } = require('../database/queries');

const getProductByCId = (req, res) => {
  const categoryId = req.params;

  productByCategory(categoryId)
    .then(({ rows }) => res.json({ data: rows }))
    .catch(() => res.status(500).json({ status: 500, msg: 'Server Error' }));
};

module.exports = { getProductByCId };
