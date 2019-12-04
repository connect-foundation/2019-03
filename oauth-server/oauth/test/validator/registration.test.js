const registration = require("../../../services/registration");

describe("registration 함수 테스트", () => {
  describe("client type", () => {
    test("없을 때 error", async () => {
      client = {};
      try {
        await registration(client);
      } catch (e) {
        expect(e.message).toMatch("Type is required.");
      }
    });
  });

  describe("redirectionURI", () => {
    test("없을 때 error", async () => {
      client = { type: "web-server-app" };
      try {
        await registration(client);
      } catch (e) {
        expect(e.message).toMatch("url is required.");
      }
    });

    test("맞지않는 url일 때 error", async () => {
      client = { type: "web-server-app", redirectionURI: "http" };
      try {
        await registration(client);
      } catch (e) {
        expect(e.message).toMatch("url is invalid");
      }
    });
  });

  describe("database insert 오류", () => {
    test("appName 없을 때 error", async () => {
      client = { type: "web-server-app", redirectionURI: "https://naver.com" };
      try {
        await registration(client);
      } catch (e) {
        expect(e.name).toMatch("SequelizeDatabaseError");
      }
    });

    test("성공", async () => {
      client = {
        type: "web-server-app",
        redirectionURI: "https://naver.com",
        appName: "soyoung is best"
      };
      try {
        await registration(client);
      } catch (e) {}
    });
  });
});
