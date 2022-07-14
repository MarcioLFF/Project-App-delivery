'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING

   }, {
    modelName: 'users',
    underscored: true,
    timestamps: false,
    sequelize,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'userId',
      as: 'userId'
    });
    
    User.hasMany(models.Sale, {
      foreignKey: 'sellerId',
      as: 'sellerId'
    });
  }

  return User;
}