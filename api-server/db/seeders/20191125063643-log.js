module.exports = {
  up: queryInterface => {
    const logList = [
      {
        From: 1,
        To: 2,
        PostId: 1,
        status: 1,
        updatedAt: new Date(),
      },
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      logList.push({
        From: Math.ceil(Math.random() * 100),
        To: Math.ceil(Math.random() * 100),
        PostId: Math.ceil(Math.random() * 100),
        status: Math.ceil(Math.random() * 3),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Logs', logList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Logs', {});
  },
};
