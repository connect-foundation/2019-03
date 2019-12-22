const { generateHexUsingHash } = require("../lib");
const { Token } = require("../db");

async function generateToken(isIssueRefreshToken = true) {
  const accessToken = await generateHexUsingHash();
  const refreshToken = isIssueRefreshToken
    ? await generateHexUsingHash()
    : null;

  return { accessToken, refreshToken };
}

async function saveToken(
  scope,
  clientId,
  username,
  isIssueRefreshToken = true
) {
  const { accessToken, refreshToken } = await generateToken(
    isIssueRefreshToken
  );
  const _scope = scope === "read_profile" ? 0 : 1;

  await Token.create({
    accessToken,
    refreshToken,
    scope: _scope,
    clientId,
    resourceOwner: username
  });

  return { accessToken, refreshToken };
}

async function getTokenInfoByAccessToken(accessToken) {
  const tokenInfo = await Token.findOne({
    where: { accessToken }
  });

  if (!tokenInfo) {
    throw new Error("The access token is not existed.");
  }

  return tokenInfo;
}

async function checkIsExistedByRefreshToken(refreshToken) {
  const tokenInfo = await Token.findOne({
    attribute: [],
    where: { refreshToken }
  });

  return tokenInfo !== null;
}

async function updateAccessToken(refreshToken) {
  const { accessToken } = await generateToken(false);

  await Token.update(
    { accessToken, updateAt: new Date() },
    { where: { refreshToken } }
  );

  return accessToken;
}

module.exports = {
  saveToken,
  getTokenInfoByAccessToken,
  checkIsExistedByRefreshToken,
  updateAccessToken
};
