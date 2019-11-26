module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CommentLikes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      CommentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments',
          key: 'id',
        },
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('CommentLikes');
  },
};
