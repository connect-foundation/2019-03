module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accessToken: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      refreshToken: {
        type: Sequelize.STRING(256),
      },
      clientId: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      resourceOwner: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      scope: {
        allowNull: false,
        type: Sequelize.INTEGER(1),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: new Date(),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tokens');
  },
};
