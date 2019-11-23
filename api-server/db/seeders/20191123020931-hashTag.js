module.exports = {
  up: queryInterface => {
    const hashtagList = [
      {
        name: '해쉬태그는띄어쓰기가되지않는다',
        updatedAt: new Date(),
      },
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      hashtagList.push({
        name: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('HashTags', hashtagList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('HashTags', {});
  },
};
