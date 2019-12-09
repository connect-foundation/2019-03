module.exports = {
  up: queryInterface => {
    const hashtagList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      hashtagList.push({
        name: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        updatedAt: new Date(new Date().getTime() + 1000 * i),
      });
    }
    return queryInterface.bulkInsert('HashTags', hashtagList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('HashTags', {});
  },
};
