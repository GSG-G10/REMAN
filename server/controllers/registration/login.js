const { checkUser } = require('../../database/queries/auth');

const login = (req, res, next) => {
  const { name } = req.body;
  checkUser(name)
    .then(({ rowCount, rows }) => {
      if (rowCount) {
        req.data = rows;
        next();
      } else {
        res.json({ msg: 'You should sign up' });
      }
    });
};
module.exports = login;
