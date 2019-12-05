const {
  generateRandomBytes,
  generateHexUsingHash
} = require("../../src/utils");

/**
 * Honor Code : https://github.com/facebook/jest/issues/1377
 */
const syncify = async fn => {
  try {
    const result = await fn();
    return () => {
      return result;
    };
  } catch (err) {
    return () => {
      throw err;
    };
  }
};

describe("utils 모듈 테스트", () => {
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
      const syncRandomBytes = await syncify(generateRandomBytes.bind(null, -1));

      expect(syncRandomBytes).toThrow();
    });
  });

  describe("generateHexUsingHash 메소드 테스트", () => {
    test("해시함수를 통과한 16진수 형태의 값 생성", async () => {
      const token = await generateHexUsingHash();

      expect(token).not.toBeNull();
    });
  });
});
