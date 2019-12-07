module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'UserId', {
      // Add User hasMany Post
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
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
