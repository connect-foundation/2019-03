"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientType: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      redirectionURI: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      appName: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      website: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      description: {
        type: Sequelize.STRING(2048)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Clients");
  }
};
