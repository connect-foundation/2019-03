module.exports = (sequelize, DataTypes) => {
  const HashTag = sequelize.define('HashTag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(45),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date(),
    },
  });

  HashTag.associate = function(models) {};

  return HashTag;
};
