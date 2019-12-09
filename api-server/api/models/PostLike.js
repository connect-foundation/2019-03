module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define('PostLike', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    PostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date(),
    },
  });

  PostLike.associate = models => {
    PostLike.belongsTo(models.User);
    PostLike.belongsTo(models.Post);
  };

  return PostLike;
};
