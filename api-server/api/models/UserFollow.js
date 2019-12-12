module.exports = (sequelize, DataTypes) => {
  const UserFollow = sequelize.define('UserFollow', {
    from: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    to: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER(1),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date(),
    },
  });

  UserFollow.associate = models => {
    UserFollow.belongsTo(models.User);
  };

  return UserFollow;
};
