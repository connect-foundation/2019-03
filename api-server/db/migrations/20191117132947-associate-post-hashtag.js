module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HashTagsOfPosts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
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
      HashTagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HashTags',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('HashTagsOfPosts');
  },
};
