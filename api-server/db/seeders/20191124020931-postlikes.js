module.exports = {
  up: queryInterface => {
    const postlikeList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1000; i++) {
      postlikeList.push({
        UserId: (i % 10) + 1,
        PostId: i + 1,
        updatedAt: new Date(new Date().getTime() + 1000 * i),
      });
    }
    return queryInterface.bulkInsert('PostLikes', postlikeList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('PostLikes', {});
  },
};
