module.exports = {
  up: queryInterface => {
    const postlikeList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1000; i++) {
      postlikeList.push({
        UserId: `${Math.ceil(Math.random() * 100)}`,
        PostId: `${Math.ceil(Math.random() * 100)}`,
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('PostLikes', postlikeList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('PostLikes', {});
  },
};
