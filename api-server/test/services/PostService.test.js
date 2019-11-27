/* eslint-disable no-undef */
const {
  getFollowingPostList,
  getTwoComments,
  getCommentCount,
  getLikerInfo,
  getLikerList,
} = require('../../api/services/PostService');
const { dbInit } = require('../data');
const { sequelize } = require('../../db');

beforeAll(async () => {
  await dbInit();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Post Servcie 테스트', () => {
  test('getFollowingPostList 테스트', async () => {
    const myId = 1;

    const postList = await getFollowingPostList(myId);

    // console.log(JSON.stringify(postList, null, 4));
    expect(postList).not.toBeUndefined();
    expect(postList.length).toEqual(5);
  });

  test('getTwoComments 테스트', async () => {
    const postId = 4;

    const commentList = await getTwoComments(postId);

    // console.log(JSON.stringify(commentList, null, 4));
    expect(commentList).not.toBeUndefined();
    expect(commentList.length).toEqual(2);
  });

  test('getCommentCount 테스트', async () => {
    const postId = 4;

    const commentCount = await getCommentCount(postId);

    expect(commentCount).toEqual(2);
  });

  test('getLikerInfo 테스트', async () => {
    const postId = 4;

    const { username, profileImage, likerCount } = await getLikerInfo(postId);

    expect(likerCount).toEqual(4);
    expect(username).toEqual('ss23');
    expect(profileImage).toEqual('profile4');
  });

  test('getLikerList 테스트', async () => {
    const postId = 4;

    const likerList = await getLikerList(postId);

    // console.log(JSON.stringify(likerList, null, 4));
    expect(likerList).not.toBeUndefined();
    expect(likerList.length).toEqual(4);
  });
});
