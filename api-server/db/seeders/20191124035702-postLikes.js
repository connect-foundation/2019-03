module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'PostLikes',
      Array.from(Array(100)).map(() => ({
        UserId: Math.ceil(Math.random() * 100),
        PostId: Math.ceil(Math.random() * 100),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('PostLikes', {});
  },
};
