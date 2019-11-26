module.exports = {
  up: queryInterface => {
    const commentList = [
      {
        content: '정말 좋은 글이네요!',
        depth: null,
        PostId: 1,
        updatedAt: new Date(),
        UserId: 1,
      },
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      commentList.push({
        content: '정말 좋은 글이네요!',
        depth: null,
        PostId: Math.ceil(Math.random() * 100),
        updatedAt: new Date(),
        UserId: Math.ceil(Math.random() * 100),
      });
    }
    return queryInterface.bulkInsert('Comments', commentList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Comments', {});
  },
};
