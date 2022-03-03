const bcrypt = require('bcryptjs');
const { asyncSign } = require('../middlewares');

const { checkEmail, addUser } = require('../database/queries');
const { regSchema } = require('../utils/validations');

const signup = async (req, res) => {
  const user = req.body;

  const userValid = regSchema.validateAsync(user);
  try {
    const { rowCount } = await checkEmail(userValid.email);
    if (rowCount) {
      res.status(400).json({ err: 'Invaild Email' });
    }
    const password = await bcrypt.hash(user.password, 10);
    const addedUser = await addUser(user, password);
    const token = await asyncSign(
      { data: addedUser.rows[0], is_user: true, is_admin: false },
      process.env.SECRET_TOKEN,
    );
    res
      .cookie(process.env.COOKIE_AUTH, token, {
        httponly: true,
        secure: true,
      })
      .status(200)
      .json({ msg: 'success' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = signup;
