/* eslint-disable no-lonely-if */
/* eslint-disable indent */
const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res
        .clearCookie('token')
        .status(401)
        .json({ status: 401, msg: 'you are not authorized' });
    } else {
        req.userId = decoded.user_id;
        next();
    }
  });
};

module.exports = checkAuth;
