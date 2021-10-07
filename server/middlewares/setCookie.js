const { sign } = require('jsonwebtoken');
require('env2')('.env');
const { checkAdmin } = require('../database/queries/auth');

const setCookie = (res, name) => {
  checkAdmin(name).then((result) => {
    const token = sign({
      token: name, is_Admin: result.rows[0].isadmin, user_id: result.rows[0].id, is_User: true,
    }, process.env.SECRETE_KEY);
    res.cookie('token', token, { httponly: true, secure: true }).json({ msg: 'set cookie done' });
  });
};
module.exports = setCookie;
