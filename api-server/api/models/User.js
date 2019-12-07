const bcrypt = require('../../utils/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING(30),
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    cellPhone: {
      type: DataTypes.STRING(13),
    },
    profileImage: {
      type: DataTypes.STRING(2048),
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
    },
    isFacebook: {
      type: DataTypes.BOOLEAN,
    },
    isDeveloper: {
      type: DataTypes.BOOLEAN,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  User.associate = models => {
    User.hasMany(models.Log, { foreignKey: 'From', soureKey: 'id' });
    User.hasMany(models.Log, { foreignKey: 'To', soureKey: 'id' });
    User.hasMany(models.Post);
    User.hasMany(models.Comment);
    User.belongsToMany(models.Post, {
      through: 'PostLikes',
      foreignKey: 'UserId',
      otherKey: 'PostId',
    });
  };

  User.beforeCreate(async user => {
    const saltRounds = +process.env.SALT_ROUNDS || 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    // eslint-disable-next-line no-param-reassign
    user.password = hashedPassword;
  });

  return User;
};
