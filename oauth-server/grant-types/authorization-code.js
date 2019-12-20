const { InvalidGrantError } = require("../error-types");
const { generateHexUsingHash } = require("../lib");
const { saveToken } = require("../services/token-service");

let codeRepository = {};

function expireAuthorizationCode(clientId, code) {
  let codes = codeRepository[clientId];
  const removedIndex = codes.findIndex(({ code: _code }) => _code === code);
  if (removedIndex === -1) return;

  codes = [...codes.slice(0, removedIndex), ...codes.slice(removedIndex + 1)];
  codeRepository[clientId] = codes;
}

function setExpireAuthorizationCode(clientId, code) {
  setTimeout(expireAuthorizationCode, 600000, clientId, code); // 10분 만료
}

async function codeHandler({ redirect_uri, client_id, state }, { username }) {
  const code = await generateHexUsingHash(16);
  let codes = codeRepository[client_id] || [];
  codes = [...codes, { code, username }];
  codeRepository[client_id] = codes;

  setExpireAuthorizationCode(client_id, code);

  let path = `${redirect_uri}?code=${code}`;
  if (state) path = path.concat("&state=", state);

  return path;
}

async function tokenHandler({ client_id: clientId, code, scope }) {
  const codes = codeRepository[clientId];
  const codeInfo = codes.find(({ code: _code }) => _code === code);
  if (!codeInfo) {
    return next(new InvalidGrantError());
  }

  scope = scope || "read_profile";
  const expiresIn = 2592000; // ONE_MONTH
  const { accessToken, refreshToken } = await saveToken(
    scope,
    clientId,
    codeInfo.username
  );
  expireAuthorizationCode(clientId, code);

  return {
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: expiresIn,
    refresh_token: refreshToken,
    scope
  };
}

module.exports = { codeHandler, tokenHandler };
