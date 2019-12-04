function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

module.exports = {
  up: queryInterface => {
    const data = [];
    for (let to = 2; to <= 101; to += 1) {
      data.push({
        from: 1,
        to,
        status: 0,
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('UserFollows', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('UserFollows', {});
  },
};
