const crypto = require("crypto");

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

module.exports = {
  generateRandomBytes,
  generateHexUsingHash
};
