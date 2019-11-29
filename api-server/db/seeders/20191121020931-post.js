function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

module.exports = {
  up: queryInterface => {
    const postList = [
      {
        imageURL: 'https://picsum.photos/id/27/615/615',
        postURL: '123',
        content: '안녕 클레오 파트라 세상에서 제일가는 포테이토 칩',
        updatedAt: new Date(),
        UserId: 1,
      },
    ];

    const imageList = [
      1,
      2,
      3,
      4,
      5,
      6,
      10,
      11,
      12,
      13,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
    ].map(i => `https://picsum.photos/id/${i}/615/615`);
    const imageLength = imageList.length;
    const userList = [1, 2, 3, 4];
    const userLength = userList.length;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      postList.push({
        imageURL: imageList[getRandomInt(0, imageLength)],
        postURL: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        content: `${Math.random()
          .toString(36)
          .substr(2, 30)}`,
        updatedAt: new Date(),
        UserId: userList[getRandomInt(0, userLength)],
      });
    }
    return queryInterface.bulkInsert('Posts', postList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Posts', {});
  },
};
