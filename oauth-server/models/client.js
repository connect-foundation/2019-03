module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    clientId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(256)
    },
    clientType: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    redirectionURI: {
      allowNull: false,
      type: DataTypes.STRING(2048)
    },
    appName: {
      type: DataTypes.STRING(50)
    },
    website: {
      type: DataTypes.STRING(2048)
    },
    description: {
      type: DataTypes.STRING(500)
    },
    clientSecret: {
      type: DataTypes.STRING(256)
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    }
  });

  Client.associate = models => {};
  return Client;
};
