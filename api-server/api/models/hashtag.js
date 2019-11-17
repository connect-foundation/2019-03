'use strict';
module.exports = (sequelize, DataTypes) => {
  const HashTag = sequelize.define(
    'HashTag',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
  HashTag.associate = function(models) {
    HashTag.belongsToMany(models.User, { through: 'HashFollows' });
    HashTag.belongsToMany(models.User, { through: 'HashTagsOfPosts' });
  };
  return HashTag;
};
