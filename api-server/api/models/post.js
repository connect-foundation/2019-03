module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    postURL: {
      type: DataTypes.STRING(2048),
    },
    imageURL: {
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
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  Post.associate = function(models) {
    Post.hasMany(models.Log, { foreignKey: 'PostId', soureKey: 'id' });
  };

  return Post;
};
