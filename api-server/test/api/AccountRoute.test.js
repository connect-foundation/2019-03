/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const { sequelize } = require('../../db');

afterAll(async () => {
  await sequelize.close();
});

describe('Account 통합 테스트', () => {
  describe('회원가입', () => {
    const userInfo = {
      username: 'test3',
      password: 'zxcv123!!',
      name: '이몽룡',
      email: 'test3@test.com',
      cellPhone: '010-1111-2233',
    };

    test('성공', done => {
      request(app)
        .post('/account/signup')
        .send(userInfo)
        .expect(200)
        .then(res => {
          const setCookie = res.header['set-cookie'];
          const myInfo = setCookie.find(cookie => cookie.includes('myInfo'));
          expect(myInfo).not.toBeUndefined();
          done();
        });
    });

    test('실패 - 중복된 username', done => {
      request(app)
        .post('/account/signup')
        .send(userInfo)
        .expect(400)
        .then(res => {
          const { error } = res.body;
          expect(error).toEqual('Duplicated username');
          done();
        });
    });
  });
});
