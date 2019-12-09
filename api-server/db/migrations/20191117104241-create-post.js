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
          type: Sequelize.STRING(2048),
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
          type: Sequelize.DATE,
        },
      })
      .then(() => queryInterface.addIndex('Posts'), ['postURL']);
  },
  down: queryInterface => {
    return queryInterface.dropTable('Posts');
  },
};
