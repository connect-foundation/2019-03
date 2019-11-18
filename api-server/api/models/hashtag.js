'use strict';
module.exports = (sequelize, DataTypes) => {
  const HashTag = sequelize.define(
    'HashTag',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(45),
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

  HashTag.associate = function(models) {};

  return HashTag;
};
