'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING

   }, {
    modelName: 'users',
    timestamps: false,
    sequelize,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'user_id',
      as: 'userId'
    });
    
    User.hasMany(models.Sale, {
      foreignKey: 'seller_id',
      as: 'sellerId'
    });
  }

  return User;
}