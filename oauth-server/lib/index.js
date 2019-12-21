const crypto = require("crypto");
const bcrypt = require("bcrypt");

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

function generateRandomBytes(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buf) => {
      if (err) reject(err);
      resolve(buf);
    });
  });
}

async function generateHexUsingHash(size = 32) {
  const bytes = await generateRandomBytes(size);

  return crypto
    .createHash("sha256")
    .update(bytes)
    .digest("hex");
}

function makeUrlWithQueryParams(base, query) {
  let url = `${base}?`;
  url = Object.keys(query).reduce((_url, key) => {
    return _url.concat(`${key}=${query[key]}&`);
  }, url);
  url = url.substring(0, url.length - 1);
  return url;
}

module.exports = {
  generateRandomBytes,
  generateHexUsingHash,
  hash,
  compare,
  makeUrlWithQueryParams
};
