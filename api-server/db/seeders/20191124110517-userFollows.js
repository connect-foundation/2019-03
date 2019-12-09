module.exports = {
  up: queryInterface => {
    const data = [];
    for (let to = 2; to <= 101; to += 1) {
      data.push({
        from: 1,
        to,
        status: 0,
        updatedAt: new Date(new Date().getTime() + 1000 * to),
      });
    }
    return queryInterface.bulkInsert('UserFollows', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('UserFollows', {});
  },
};
