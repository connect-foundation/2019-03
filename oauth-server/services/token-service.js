const { generateHexUsingHash } = require("../lib");
const { Token } = require("../db");

async function saveToken(
  scope,
  clientId,
  username,
  isIssueRefreshToken = true
) {
  const _accessToken = await generateHexUsingHash();
  const _refreshToken = isIssueRefreshToken
    ? await generateHexUsingHash()
    : null;
  const _scope = scope === "read_profile" ? 0 : 1;

  const { accessToken, refreshToken } = await Token.create({
    accessToken: _accessToken,
    refreshToken: _refreshToken,
    scope: _scope,
    clientId,
    resourceOwner: username
  });

  return { accessToken, refreshToken };
}

async function getTokenInfo(accessToken) {
  const tokenInfo = await Token.findOne({
    where: { accessToken }
  });

  if (!tokenInfo) {
    throw new Error("The access token is not existed.");
  }

  return tokenInfo;
}

module.exports = { saveToken, getTokenInfo };
