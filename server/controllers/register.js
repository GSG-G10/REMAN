const bcrypt = require('bcrypt');
// set in cookie use jwt

const { checkEmail, addUser } = require('../database/queries');
const { regSchema } = require('../utils/validations');

const signup = (req, res) => {
  const user = req.body;

  const userValid = regSchema.validateAsync(user);

  const userExist = (rows) => {
    if (rows > 0) {
      throw new Error('user registered');
    }
  };

  userValid
    .then((user) => checkEmail(user.email))
    .then(({ rowCount }) => userExist(rowCount))
    .then(() => bcrypt.hash(user.password, 10))
    .then((newPass) => addUser(user, newPass))
    .then(({ rows }) => {
      const token = jwt.sign({ data: rows[0], is_user: true, is_admin: false }, process.env.SECRET_TOKEN);

      res.cookie(process.env.COOKIE_AUTH, token, { httponly: true, secure: true }).redirect('/profile');
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

module.exports = signup;
