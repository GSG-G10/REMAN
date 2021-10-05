const connection = require('../../config/connection');

const addUser = (userData, password) => {
  const sqlQuery = {
    text: 'INSERT INTO users (name, email, password) VALUES ($1,$2,$3)',
    values: [userData.name, userData.email, password],
  };

  return connection.query(sqlQuery);
};

module.exports = addUser;
