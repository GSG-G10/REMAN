<<<<<<< Updated upstream
const bcrypt = require('bcryptjs');
=======
const bcrypt = require('bcrypt');
>>>>>>> Stashed changes
const { sign } = require('jsonwebtoken');
// set in cookie use jwt

const { checkEmail, addUser } = require('../database/queries');
const { regSchema } = require('../utils/validations');

const signup = (req, res) => {
  const user = req.body;

  const userValid = regSchema.validateAsync(user);

  const userExist = (rows) => {
    if (rows.rowCount > 0) {
      throw new Error('user registered');
    }
  };

  userValid
<<<<<<< Updated upstream
    .then((selectedUser) => checkEmail(selectedUser.email))
=======
    .then((enteredUser) => checkEmail(enteredUser.email))
>>>>>>> Stashed changes
    .then(({ rowCount }) => userExist(rowCount))
    .then(() => bcrypt.hash(user.password, 10))
    .then((newPass) => addUser(user, newPass))
    .then(({ rows }) => {
      // eslint-disable-next-line max-len
      const token = sign({ data: rows[0], is_user: true, is_admin: false }, process.env.SECRET_TOKEN);

      res.cookie(process.env.COOKIE_AUTH, token, { httponly: true, secure: true }).redirect('/profile');
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

module.exports = signup;
