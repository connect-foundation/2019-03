module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING(1000),
    },
    depth: {
      type: DataTypes.STRING(30),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    PostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  Comment.associate = function(models) {};

  return Comment;
};
