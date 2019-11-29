module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'CommentLikes',
      Array.from(Array(100)).map(() => ({
        UserId: Math.ceil(Math.random() * 100),
        CommentId: Math.ceil(Math.random() * 100),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('CommentLikes', {});
  },
};
