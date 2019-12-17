/* eslint-disable no-undef */
require('mysql2/node_modules/iconv-lite').encodingExists('cesu8');
const userService = require('../../api/services/UserService');
const { sequelize } = require('../../db');

afterAll(async () => {
  await sequelize.close();
});

describe('UserService 테스트', () => {
  describe('signup 메소드 테스트', () => {
    test('회원가입 성공', async () => {
      const userInfo = {
        username: 'test101',
        password: 'asdf123A!',
        name: '홍길동',
        email: 'test@test.com',
        cellPhone: '010-1111-2222',
      };

      const result = await userService.signup(userInfo);

      expect(result).not.toBeNull();
      expect(result.username).toEqual(userInfo.username);
    });

    test('회원가입 실패 - 중복된 username', async () => {
      const userInfo = {
        username: 'test102',
        password: 'qwer123!!',
        name: '임꺽정',
        email: 'qwerty@test.com',
        cellPhone: '010-2222-3333',
      };
      await userService.signup(userInfo);

      await expect(userService.signup(userInfo)).rejects.toThrow();
    });
  });

  describe('signin 메소드 테스트', () => {
    test('로그인 성공', async () => {
      const userInfo = {
        username: 'test103',
        password: 'asdf123!!',
        name: '임꺽정',
        email: 'qwerty@test.com',
        cellPhone: '010-2222-3333',
      };
      await userService.signup(userInfo);

      const result = await userService.signin(
        userInfo.username,
        userInfo.password,
      );

      expect(result).not.toBeNull();
      expect(result.username).toEqual(userInfo.username);
    });

    test('로그인 실패', async () => {
      const userInfo = {
        username: 'test104',
        password: 'asdf123!!',
        name: '하하하',
        email: 'qwerty@test.com',
        cellPhone: '010-2222-3333',
      };
      await userService.signup(userInfo);

      const result = await userService.signin(
        userInfo.username,
        'wrong_password',
      );

      expect(result).toBeNull();
    });
  });
});
