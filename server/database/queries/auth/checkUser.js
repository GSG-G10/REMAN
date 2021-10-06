const connection = require('../../config/connection');

const checkUser = (name) => connection.query('SELECT name,password from users where name=$1', [name]);
module.exports = checkUser;
