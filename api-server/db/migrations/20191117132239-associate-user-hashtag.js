module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HashFollows', {
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
      },
      HashTagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HashTags',
          key: 'id',
        },
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('HashFollows');
  },
};
