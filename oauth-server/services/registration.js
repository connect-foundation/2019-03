const uuidv4 = require("uuid/v4");
const sha256 = require("js-sha256");
const cryptoRandomString = require("crypto-random-string");
const Validator = require("../oauth/src/validator/index");
const clientError = require("../oauth/src/error-types/client-error");
const { Client } = require("../db");

const registration = async client => {
  try {
    if (!client.type) {
      throw new clientError("Type is required.");
    }

    if (!client.redirectionURI) {
      throw new clientError("url is required.");
    }

    if (!Validator.isUrl(client.redirectionURI)) {
      throw new clientError("url is invalid");
    }

    const clientId = uuidv4();
    let clientSecret;
    if (client.type === "web-server-app") {
      clientSecret = cryptoRandomString({ length: 32 });
    }

    await Client.create({
      clientType: client.type,
      redirectionURI: client.redirectionURI,
      appName: client.appName,
      website: client.website,
      description: client.description,
      clientID: clientId,
      clientSecret: sha256(clientSecret),
      updatedAt: new Date()
    });

    const clientInfo = { clientId, clientSecret };
    return clientInfo;
  } catch (e) {
    throw e;
  }
};

module.exports = registration;
