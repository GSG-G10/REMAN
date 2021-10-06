/* eslint-disable no-lonely-if */
/* eslint-disable indent */
const { verfiy } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  verfiy(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res
        .clearCookie('token')
        .status(401)
        .json({ msg: 'you are not authorized' });
    } else {
      if (decoded.is_user) {
        req.userId = decoded.id;
        next();
      } else {
        res.status(401).json({ msg: 'You are not user in REMAN' });
      }
    }
  });
};

module.exports = checkAuth;
