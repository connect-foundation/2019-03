module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserTags', {
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
      username: {
        type: Sequelize.STRING(100),
      },
      PostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('UserTags');
  },
};
