module.exports = (sequelize, DataTypes) => {
  const UserTag = sequelize.define('UserTag', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(100),
    },
    PostId: {
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  UserTag.associate = function(models) {};

  return UserTag;
};
