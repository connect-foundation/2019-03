function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

module.exports = {
  up: queryInterface => {
    const data = [
      {
        from: 1,
        to: 2,
        status: 0,
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 3,
        status: 0,
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 4,
        status: 0,
        updatedAt: new Date(),
      },
      {
        from: 2,
        to: 1,
        status: 0,
        updatedAt: new Date(),
      },
      ...Array.from(Array(100)).map(() => ({
        from: getRandomInt(5, 100),
        to: getRandomInt(5, 100),
        status: 0,
        updatedAt: new Date(),
      })),
    ];

    return queryInterface.bulkInsert('UserFollows', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('UserFollows', {});
  },
};
