function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

module.exports = {
  up: queryInterface => {
    const logList = [
      {
        From: 2,
        To: 1,
        PostId: 1,
        status: 'follow',
        updatedAt: new Date(),
      },
      {
        From: 3,
        To: 1,
        PostId: 1,
        status: 'like',
        updatedAt: new Date(),
      },
      {
        From: 4,
        To: 1,
        PostId: 1,
        status: 'comment',
        updatedAt: new Date(),
      },
    ];

    const statusList = ['follow', 'like', 'comment'];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      logList.push({
        From: getRandomInt(3, 100),
        To: getRandomInt(3, 100),
        PostId: getRandomInt(1, 100),
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
