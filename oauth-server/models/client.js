module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      clientType: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      redirectionURI: {
        allowNull: false,
        type: DataTypes.STRING(2048)
      },
      appName: {
        type: DataTypes.STRING(2048)
      },
      website: {
        type: DataTypes.STRING(2048)
      },
      description: {
        type: DataTypes.STRING(2048)
      },
      clientID: {
        type: DataTypes.STRING(2048)
      },
      clientSecret: {
        type: DataTypes.STRING(2048)
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
        defaultValue: new Date()
      }
    },
    {}
  );
  Client.associate = models => {
    Client.hasMany(models.AccessToken);
  };
  return Client;
};
