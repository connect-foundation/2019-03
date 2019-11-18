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
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { timestamps: false },
  );

  HashTag.associate = function(models) {};

  return HashTag;
};
