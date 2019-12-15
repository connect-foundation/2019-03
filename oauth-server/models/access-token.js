module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define("AccessToken", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    scope: {
      allowNull: false,
      type: DataTypes.INTEGER(1)
    },
    accessToken: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    refreshToken: {
      type: DataTypes.STRING(256)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    }
  });

  AccessToken.associate = models => {
    AccessToken.belongsTo(models.User, {
      onDelete: "cascade",
      onUpdate: "cascade"
    });
    AccessToken.belongsTo(models.Client, {
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  };

  return AccessToken;
};
