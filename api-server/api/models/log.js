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
  Log.associate = models => {
    Log.belongsTo(models.User, { foreignKey: 'From', targetKey: 'id' });
    Log.belongsTo(models.User, { foreignKey: 'To', targetKey: 'id' });
    Log.belongsTo(models.Post, { foreignKey: 'PostId', targetKey: 'id' });
  };
  return Log;
};
