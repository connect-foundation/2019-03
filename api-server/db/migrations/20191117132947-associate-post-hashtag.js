'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HashTagsOfPosts', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        autoIncrement: false,
      },
      createAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      PostId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Posts',
          key: 'id',
        },
      },
      HashTagId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'HashTags',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HashTagsOfPosts');
  },
};
