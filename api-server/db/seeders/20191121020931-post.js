Number.prototype.pad = function(size) {
  let s = String(this);
  while (s.length < (size || 2)) {
    s = `0${s}`;
  }
  return s;
};

module.exports = {
  up: queryInterface => {
    const postList = [];
    for (let i = 0; i < 1000; i += 1) {
      postList.push({
        imageURL: `https://kr.object.ncloudstorage.com/youngstargram/post/fruit_${i.pad(
          4,
        )}.jpg`,
        postURL: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        content: `${Math.random()
          .toString(36)
          .substr(2, 30)}`,
        updatedAt: new Date(),
        UserId: (i % 100) + 1,
      });
    }
    return queryInterface.bulkInsert('Posts', postList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Posts', {});
  },
};
