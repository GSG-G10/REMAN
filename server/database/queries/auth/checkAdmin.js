const connection = require('../../config/connection');

const checkAdmin = (name) => connection.query('SELECT isAdmin from users where name=$1', [name]);
module.exports = checkAdmin;
