module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostLikes', {
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
      PostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('PostLikes');
  },
};
