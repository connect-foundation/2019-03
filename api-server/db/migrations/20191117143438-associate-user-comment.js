module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CommentLikes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      updatedAt: {
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
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      CommentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('CommentLikes');
  },
};
