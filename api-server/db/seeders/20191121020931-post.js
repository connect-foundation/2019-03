module.exports = {
  up: queryInterface => {
    const postList = [
      {
        imageURL: 'image.jpg',
        postURL: '123',
        content: '안녕 클레오 파트라 세상에서 제일가는 포테이토 칩',
        updatedAt: new Date(),
        UserId: 1,
      },
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      postList.push({
        imageURL: 'image.jpg',
        postURL: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        content: `${Math.random()
          .toString(36)
          .substr(2, 30)}`,
        updatedAt: new Date(),
        UserId: Math.ceil(Math.random() * 100),
      });
    }
    return queryInterface.bulkInsert('Posts', postList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Posts', {});
  },
};
