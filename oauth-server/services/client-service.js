const uuidv4 = require("uuid/v4");
const Validator = require("../validator");
const { InvalidRequestError } = require("../error-types");
const { Client } = require("../db");
const { generateHexUsingHash } = require("../lib");

const clientType = {
  WEB: "web-server-app",
  SPA: "single-page-app"
};

async function register(client) {
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
      clientSecret = await generateHexUsingHash();
    }

    await Client.create({
      clientId: clientId,
      clientType: client.type,
      redirectionURI: client.redirectionURI,
      appName: client.appName,
      website: client.website,
      description: client.description,
      clientSecret,
      UserId: client.UserId,
      updatedAt: new Date()
    });

    const clientInfo = { clientId, clientSecret };
    return clientInfo;
  } catch (e) {
    throw e;
  }
}

async function getClient(clientId) {
  const client = await Client.findOne({
    attribute: ["clientId", "redirectionURI"],
    where: { clientId }
  });

  return client;
}

module.exports = { register, getClient };
