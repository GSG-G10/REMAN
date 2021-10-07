const { validatePassword, setCookie } = require('../../middlewares');

const createSession = (req, res) => {
  const { password, name } = req.body;
  const { data } = req;
  validatePassword(password, data[0].password)
    .then((result) => {
      if (result) {
        setCookie(res, name);
      }
    });
};
module.exports = createSession;
