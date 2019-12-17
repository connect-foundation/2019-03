module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Posts', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        postURL: {
          type: Sequelize.STRING(500),
        },
        imageURL: {
          allowNull: true,
          type: Sequelize.STRING(2048),
        },
        content: {
          type: Sequelize.STRING(1000),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
      })
      .then(() => queryInterface.addIndex('Posts', ['postURL', 'updatedAt']));
  },
  down: queryInterface => {
    return queryInterface.dropTable('Posts');
  },
};
