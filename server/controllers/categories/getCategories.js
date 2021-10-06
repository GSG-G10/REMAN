const { getCategoriesQuery } = require('../../database/queries/categories');

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then((data) => res.json(data.rows))
    .catch(() => res.json({ stutus: 500, msg: 'Server Error !' }));
};

module.exports = getCategories;
