const implicitTokenHandler = (redirectURI, clientId, state) => {
  /**
   * Response
   * - access_token(required)
   * - token_type(required) => only Bearer
   * - expires_in(recommended) 2592000 seconds === 1month
   * - scope(optional)
   * - state(required if the 'state' param was present)
   *
   * refresh token은 절대로 발행하지 말 것!
   */

  // const { accessToken } = saveToken(clientId, false);
  const accessToken = "";
  const expiresIn = 2592000;
  const scope = "read_profile";

  let path = `${redirectURI}#access_token=${accessToken}&token_type=Bearer&scope=${scope}&expires_in=${expiresIn}`;
  if (state) path = path.concat("&state=", state);

  return path;
};

module.exports = { implicitTokenHandler };
