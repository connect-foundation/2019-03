module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
  Log.associate = () => {};
  return Log;
};
