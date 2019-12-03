const { InvalidRequestError } = require("../../src/error-types");

describe("OAuth 2.0 Error Response Type 테스트", () => {
  describe("InvalidRequestError 테스트", () => {
    test("InvalidRequestError 생성자 테스트", () => {
      const message = "This is a test!";
      const error = new InvalidRequestError(message);

      expect(error.message).toEqual(message);
      expect(error.name).toEqual("invalid_request");
      expect(error.status).toEqual(400);
    });
  });
});
