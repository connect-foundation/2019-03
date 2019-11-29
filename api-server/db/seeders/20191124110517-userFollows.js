module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'UserFollows',
      Array.from(Array(100)).map(() => ({
        from: Math.ceil(Math.random() * 100),
        to: Math.ceil(Math.random() * 100),
        status: 0,
        updatedAt: new Date(),
      })),
      {},
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('UserFollows', {});
  },
};
