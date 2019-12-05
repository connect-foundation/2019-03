const uuidv4 = require("uuid/v4");
const Validator = require("../oauth/src/validator/index");
const { InvalidRequestError } = require("../oauth/src/error-types");
const { Client } = require("../db");

const clientType = {
  WEB: "web-server-app",
  SPA: "single-page-app"
};

const registration = async client => {
  try {
    if (!client.type) {
      throw new InvalidRequestError("Type is required.");
    }

    if (!client.redirectionURI) {
      throw new InvalidRequestError("url is required.");
    }

    if (!Validator.isUrl(client.redirectionURI)) {
      throw new InvalidRequestError("url is invalid");
    }

    const clientId = uuidv4();
    let clientSecret = null;
    if (client.type === clientType.WEB) {
    }

    await Client.create({
      clientType: client.type,
      redirectionURI: client.redirectionURI,
      appName: client.appName,
      website: client.website,
      description: client.description,
      clientID: clientId,
      clientSecret,
      updatedAt: new Date()
    });

    const clientInfo = { clientId, clientSecret };
    return clientInfo;
  } catch (e) {
    throw e;
  }
};

module.exports = registration;
