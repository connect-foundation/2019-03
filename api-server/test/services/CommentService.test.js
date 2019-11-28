/* eslint-disable no-undef */
const {
  getCommentCount,
  getTwoComments,
  setCommentLike,
  unsetCommentLike,
} = require('../../api/services/CommentService');
const { dbInit } = require('../data');
const { sequelize, CommentLike } = require('../../db');

beforeAll(async () => {
  await dbInit();
});

afterAll(async () => {
  await sequelize.close();
});

describe('CommentService 테스트', () => {
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

  describe('setCommentLike & unsetCommentLike', () => {
    const userId = 2;
    const commentId = 1;

    test('setCommentLike 테스트', async () => {
      await setCommentLike(userId, commentId);

      const result = await CommentLike.findOne({
        where: { UserId: userId, CommentId: commentId },
      });

      expect(result).not.toBeNull();
    });

    test('unsetCommentLike 테스트', async () => {
      await unsetCommentLike(userId, commentId);

      const result = await CommentLike.findOne({
        where: { UserId: userId, CommentId: commentId },
      });

      expect(result).toBeNull();
    });
  });
});
