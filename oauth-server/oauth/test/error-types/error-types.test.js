const {
  InvalidRequestError,
  UnauthorizedClientError,
  AccessDeniedError,
  UnsupportedResonseTypeError,
  InvalidScopeError
} = require("../../src/error-types");

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

  describe("UnauthorizedClientError 테스트", () => {
    test("UnauthorizedClientError 생성자 테스트", () => {
      const message = "This is a test!";
      const error = new UnauthorizedClientError(message);

      expect(error.message).toEqual(message);
      expect(error.name).toEqual("unauthorized_client");
      expect(error.status).toEqual(400);
    });
  });

  describe("AccessDeniedError 테스트", () => {
    test("AccessDeniedError 생성자 테스트", () => {
      const message = "This is a test!";
      const error = new AccessDeniedError(message);

      expect(error.message).toEqual(message);
      expect(error.name).toEqual("access_denied");
      expect(error.status).toEqual(400);
    });
  });

  describe("UnsupportedResonseTypeError 테스트", () => {
    test("UnsupportedResonseTypeError 생성자 테스트", () => {
      const message = "This is a test!";
      const error = new UnsupportedResonseTypeError(message);

      expect(error.message).toEqual(message);
      expect(error.name).toEqual("unsupported_response_type");
      expect(error.status).toEqual(400);
    });
  });

  describe("InvalidScopeError 테스트", () => {
    test("InvalidScopeError 생성자 테스트", () => {
      const message = "This is a test!";
      const error = new InvalidScopeError(message);

      expect(error.message).toEqual(message);
      expect(error.name).toEqual("invalid_scope");
      expect(error.status).toEqual(400);
    });
  });
});
