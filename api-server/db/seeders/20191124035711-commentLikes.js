module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'CommentLikes',
      Array.from(Array(100)).map((_, index) => ({
        UserId: Math.ceil(Math.random() * 100),
        CommentId: Math.ceil(Math.random() * 100),
        updatedAt: new Date(new Date().getTime() + 1000 * index),
      })),
      {},
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('CommentLikes', {});
  },
};
