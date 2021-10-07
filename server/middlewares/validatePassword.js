const { compare } = require('bcryptjs');

const validatePassword = (password, userPassword) => compare(password, userPassword);

module.exports = validatePassword;
