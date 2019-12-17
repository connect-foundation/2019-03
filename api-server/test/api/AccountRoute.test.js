/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const { sequelize } = require('../../db');

afterAll(async () => {
  await sequelize.close();
});

describe('Account 통합 테스트', () => {
  const userInfo = {
    username: 'test3',
    password: 'zxcv123!!',
    name: '이몽룡',
    email: 'test3@test.com',
    cellPhone: '010-1111-2233',
  };

  describe('회원가입', () => {
    test('성공', done => {
      request(app)
        .post('/account/signup')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .send(userInfo)
        .expect(200)
        .then(res => {
          const { myInfo } = res.body;
          expect(myInfo.username).toEqual(userInfo.username);
          done();
        });
    });

    test('실패 - 중복된 username', done => {
      request(app)
        .post('/account/signup')
        .send(userInfo)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .expect(400)
        .then(res => {
          const { error } = res.body;
          expect(error).toEqual('Duplicated username');
          done();
        });
    });
  });

  describe('로그인 및 /graphql 접근', () => {
    const agent = request.agent(app);

    test('로그인 실패 - 잘못된 비밀번호', done => {
      const { username } = userInfo;
      agent
        .post('/account/login')
        .send({ username, password: 'wrong' })
        .expect(302)
        .then(res => {
          const { location } = res.header;
          expect(location).toEqual('/account/login');
          done();
        });
    });

    test('접근 실패 - 비로그인 상태', done => {
      agent
        .get('/graphql')
        .expect(302)
        .then(res => {
          const { location } = res.header;
          expect(location).toEqual('/account/login');
          done();
        });
    });

    test('로그인 성공', done => {
      const { username, password } = userInfo;
      agent
        .post('/account/login')
        .send({ username, password })
        .expect(200)
        .then(res => {
          const { message } = res.body;
          expect(message).toEqual('Login success');
          done();
        });
    });

    test('접근 성공', done => {
      agent
        .get('/graphql?query={log(id: 1){ status }}')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
