const { sign } = require('jsonwebtoken');
require('env2')('.env');

const setCookie = (res, name) => {
  const token = sign({ token: name }, process.env.SECRETE_KEY);
  res.cookie('token', token, { httponly: true, secure: true }).json({ msg: 'set cookie done' });
};
module.exports = setCookie;
