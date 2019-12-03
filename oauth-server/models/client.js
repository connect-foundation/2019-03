"use strict";
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
        type: DataTypes.STRING(100)
      },
      redirectionURI: {
        allowNull: true,
        type: DataTypes.STRING(2048)
      },
      appName: {
        type: DataTypes.STRING(2048)
      },
      website: {
        allowNull: false,
        type: DataTypes.STRING(2048)
      },
      description: {
        allowNull: false,
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
        type: DataTypes.DATE
      }
    },
    {}
  );
  Client.associate = function(models) {};
  return Client;
};
