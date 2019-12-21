module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define("Token", {
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
    clientId: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    resourceOwner: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    }
  });

  Token.associate = models => {};

  return Token;
};
