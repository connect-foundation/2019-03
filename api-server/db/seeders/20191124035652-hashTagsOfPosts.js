module.exports = {
  up: queryInterface => {
    const data = Array.from(Array(100)).map(() => ({
      PostId: Math.ceil(Math.random() * 100),
      HashTagId: Math.ceil(Math.random() * 100),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert('HashTagsOfPosts', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('HashTagsOfPosts', {});
  },
};
