const { checkCategoryIdQuery } = require('../../database/queries/categories');

const checkCategoryId = (req, res, next) => {
  const { category } = req.body;
  checkCategoryIdQuery(category)
    .then((result) => result.rows[0].exists)
    .then((exists) => (exists ? next() : res.json({ message: 'Worng Category ID' })))
    .catch(() => res.status(500).json({ message: 'Server Error !' }));
};
module.exports = checkCategoryId;
