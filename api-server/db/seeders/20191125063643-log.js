module.exports = {
  up: queryInterface => {
    const logList = [
      {
        From: 1,
        To: 2,
        Post: 1,
        status: 1,
        updatedAt: new Date(),
      },
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      logList.push({
        From: Math.ceil(Math.random() * 100),
        To: Math.ceil(Math.random() * 100),
        Post: Math.ceil(Math.random() * 100),
        status: Math.ceil(Math.random() * 4),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Logs', logList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Logs', {});
  },
};
