const { sign } = require('jsonwebtoken');

const asyncSign = (data, isUser, isAdmin) => new Promise((resolve, reject) => {
  sign({ data, isUser, isAdmin }, process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token);
  });
});

module.exports = asyncSign;
