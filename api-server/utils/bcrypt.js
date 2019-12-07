const bcrypt = require('bcrypt');

function hash(plaintextPassword, saltRounds = 10) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plaintextPassword, saltRounds, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function compare(plaintextPassword, hashedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plaintextPassword, hashedPassword, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = { hash, compare };
