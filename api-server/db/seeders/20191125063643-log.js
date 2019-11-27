module.exports = {
  up: queryInterface => {
    const logList = [
      {
        From: 1,
        To: 2,
        PostId: 1,
        status: 'follow',
        updatedAt: new Date(),
      },
    ];

    const statusList = ['follow', 'like', 'comment'];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      logList.push({
        From: Math.ceil(Math.random() * 100),
        To: Math.ceil(Math.random() * 100),
        PostId: Math.ceil(Math.random() * 100),
        status: `${statusList[Math.floor(Math.random() * statusList.length)]}`,
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Logs', logList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Logs', {});
  },
};
