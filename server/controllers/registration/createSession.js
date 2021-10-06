const { validatePassword, setCookie } = require('../../middlewares');

const createSession = (req, res) => {
  const { userPassword, data, userName } = req;
  validatePassword(userPassword, data[0].password)
    .then((result) => {
      if (result) {
        setCookie(res, userName);
      }
    });
};
module.exports = createSession;
