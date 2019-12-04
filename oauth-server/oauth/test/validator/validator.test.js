const Validator = require("../../src/validator");

describe("Validator 클래스 테스트", () => {
  describe("isVSCHAR 메소드 테스트", () => {
    // \u0020~\u007E => ASCII CODE
    test("true 반환", () => {
      const value = "slkqid!*#73)(~`";

      const result = Validator.isVSCHAR(value);

      expect(result).toBeTruthy();
    });

    test("false 반환", () => {
      const value = "\u0019 12~@s%^$##*";

      const result = Validator.isVSCHAR(value);

      expect(result).not.toBeTruthy();
    });
  });

  describe("isNQCHAR 메소드 테스트", () => {
    // space와 ", \ 가 제외된 ASCII CODE
    test("true 반환", () => {
      const value = "asoxi,22!@#$%~^&*(";

      const result = Validator.isNQCHAR(value);

      expect(result).toBeTruthy();
    });

    test("false 반환 - space 포함", () => {
      const value = " asoxi,22!@#$%~^&*(";

      const result = Validator.isNQCHAR(value);

      expect(result).not.toBeTruthy();
    });

    test('false 반환 - " 포함', () => {
      const value = '"asoxi,22!@#$%~^&*(';

      const result = Validator.isNQCHAR(value);

      expect(result).not.toBeTruthy();
    });

    test("false 반환 - \\ 포함", () => {
      const value = "\\asoxi,22!@#$%~^&*(";

      const result = Validator.isNQCHAR(value);

      expect(result).not.toBeTruthy();
    });
  });

  describe("isNQSCHAR 메소드 테스트", () => {
    // ", \가 제외된 ASCII CODE
    test("true 반환", () => {
      const value = "asdf ,2MHA!@#$%~^&*(";

      const result = Validator.isNQSCHAR(value);

      expect(result).toBeTruthy();
    });

    test('false 반환 - " 포함', () => {
      const value = '"asdf ,2MHA!@#$%~^&*(';

      const result = Validator.isNQSCHAR(value);

      expect(result).not.toBeTruthy();
    });

    test("false 반환 - \\ 포함", () => {
      const value = "\\asdf ,2MHA!@#$%~^&*(";

      const result = Validator.isNQSCHAR(value);

      expect(result).not.toBeTruthy();
    });
  });

  describe("isUNICODECHARNOCRLF 메소드 테스트", () => {
    test("true 반환 - 한글포함", () => {
      const value = "한글입니다.!@kd#ie$nqA; ";

      const result = Validator.isUNICODECHARNOCRLF(value);

      expect(value).toBeTruthy();
    });

    test("false 반환 - CR포함", () => {
      const value = "\u000D is carriage return";

      const result = Validator.isUNICODECHARNOCRLF(value);

      expect(result).not.toBeTruthy();
    });

    test("false 반환 - CR포함", () => {
      const value = "\u000A is line feed";

      const result = Validator.isUNICODECHARNOCRLF(value);

      expect(result).not.toBeTruthy();
    });
  });

  describe("isUrl 메소드 테스트", () => {
    test("true 반환", () => {
      const url = "https://user:password@github.com:8000/app/test";

      const result = Validator.isUrl(url);

      expect(result).toBeTruthy();
    });

    test("false 반환 - 잘못된 scheme ", () => {
      const url = "1ht@tps://github.com";

      const result = Validator.isUrl(url);

      expect(result).not.toBeTruthy();
    });
  });
});
