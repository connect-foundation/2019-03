module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'UserId', {
      // Add User hasMany Post
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn(
      // Remove User hasMany Post
      'Posts',
      'UserId',
    );
  },
};
