module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      clientId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(256),
      },
      clientType: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      redirectionURI: {
        allowNull: false,
        type: Sequelize.STRING(2048),
      },
      appName: {
        type: Sequelize.STRING(50),
      },
      website: {
        type: Sequelize.STRING(2048),
      },
      description: {
        type: Sequelize.STRING(500),
      },
      clientSecret: {
        type: Sequelize.STRING(256),
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
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: new Date(),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients');
  },
};
