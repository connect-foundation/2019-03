'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
        autoIncrement: false,
      },
      imageUrl: {
        allowNull: true,
        type: DataTypes.STRING(2048),
      },
      content: {
        type: DataTypes.STRING(1000),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {},
  );

  Post.associate = function(models) {
    Post.belongsTo(models.User);
    Post.belongsToMany(models.User, { through: 'PostLikes' });
    Post.belongsToMany(models.User, { through: 'UserTags' });
  };
  return Post;
};
