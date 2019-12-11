module.exports = (sequelize, DataTypes) => {
  const UserFollow = sequelize.define('UserFollow', {
    from: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    to: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
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
