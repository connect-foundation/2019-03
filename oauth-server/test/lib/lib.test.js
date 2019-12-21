const { generateRandomBytes, generateHexUsingHash } = require("../../lib");

describe("lib 모듈 테스트", () => {
  describe("generateRandomBytes 메소드 테스트", () => {
    test("Promise 반환", done => {
      const promise = generateRandomBytes(32);

      expect(promise instanceof Promise).toBeTruthy();

      promise.then(_ => done()).catch((_ = done()));
    });

    test("size 만큼의 랜덤 바이트 생성", async () => {
      const bytes = await generateRandomBytes(32);

      expect(bytes.length).toEqual(32);
    });

    test("음수 size 입력 시 에러", async () => {
      await expect(generateRandomBytes(-1)).rejects.toThrow();
    });
  });

  describe("generateHexUsingHash 메소드 테스트", () => {
    test("해시함수를 통과한 16진수 형태의 값 생성", async () => {
      const token = await generateHexUsingHash();

      expect(token).not.toBeNull();
    });
  });
});
