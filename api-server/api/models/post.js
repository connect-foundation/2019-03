'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    imageUrl: {
      allowNull: true,
      type: DataTypes.STRING(2048),
    },
    content: {
      type: DataTypes.STRING(1000),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  Post.associate = function(models) {};

  return Post;
};
