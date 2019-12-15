module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING(30),
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(128)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(45)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    cellPhone: {
      type: DataTypes.STRING(13)
    },
    profileImage: {
      type: DataTypes.STRING(2048)
    },
    isPrivate: {
      type: DataTypes.BOOLEAN
    },
    isFacebook: {
      type: DataTypes.BOOLEAN
    },
    isDeveloper: {
      type: DataTypes.BOOLEAN
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      defaultValue: new Date()
    }
  });

  User.associate = models => {
    User.hasMany(models.AccessToken);
  };

  return User;
};
