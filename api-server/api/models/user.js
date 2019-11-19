'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    cellPhone: {
      type: DataTypes.STRING(13),
    },
    profileImage: {
      type: DataTypes.STRING(2048),
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
    },
    isFacebook: {
      type: DataTypes.BOOLEAN,
    },
    isDeveloper: {
      type: DataTypes.BOOLEAN,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  User.associate = function(models) {};

  return User;
};
