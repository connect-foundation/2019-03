module.exports = {
  up: queryInterface => {
    const data = Array.from(Array(100)).map((_, index) => ({
      PostId: Math.ceil(Math.random() * 100),
      HashTagId: Math.ceil(Math.random() * 100),
      updatedAt: new Date(new Date().getTime() + 1000 * index),
    }));
    return queryInterface.bulkInsert('HashTagsOfPosts', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('HashTagsOfPosts', {});
  },
};
