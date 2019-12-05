module.exports = (sequelize, DataTypes) => {
  const HashTagsOfPost = sequelize.define('HashTagsOfPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    HashTagId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updateAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  HashTagsOfPost.associate = function(models) {};

  return HashTagsOfPost;
};
