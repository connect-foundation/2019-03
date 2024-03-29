const { saveToken } = require("../services/token-service");

const ONE_DAY = 86400;

async function tokenHandler(
  { redirect_uri: redirectURI, client_id: clientId, state, scope },
  { username }
) {
  scope = scope || "read_profile";
  const { accessToken } = await saveToken(scope, clientId, username, false);
  const expiresIn = ONE_DAY;

  let path = `${redirectURI}#access_token=${accessToken}&token_type=Bearer&scope=${scope}&expires_in=${expiresIn}`;
  if (state) path = path.concat("&state=", state);

  return path;
}

module.exports = { tokenHandler };
