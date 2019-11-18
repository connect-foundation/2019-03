'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFollow = sequelize.define(
    'UserFollow',
    {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {},
  );

  UserFollow.associate = function(models) {};

  return UserFollow;
};
