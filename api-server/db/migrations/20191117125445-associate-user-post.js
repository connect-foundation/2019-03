module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('PostLikes', {
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
          onDelete: 'cascade',
          onUpdate: 'cascade',
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
      })
      .then(() =>
        queryInterface.addConstraint('PostLikes', ['UserId', 'PostId'], {
          type: 'unique',
          name: 'Post-User-unique',
        }),
      );
  },

  down: queryInterface => {
    return queryInterface.dropTable('PostLikes');
  },
};
