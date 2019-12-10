module.exports = {
  up: queryInterface => {
    const commentList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1000; i++) {
      commentList.push({
        content: '정말 좋은 글이네요!',
        depth: null,
        PostId: Math.ceil(Math.random() * 100),
        UserId: Math.ceil(Math.random() * 100),
        updatedAt: new Date(new Date().getTime() + 1000 * i),
      });
    }
    return queryInterface.bulkInsert('Comments', commentList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Comments', {});
  },
};
