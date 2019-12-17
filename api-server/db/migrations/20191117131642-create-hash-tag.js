module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HashTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('HashTags');
  },
};
