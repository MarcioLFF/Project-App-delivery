'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
    User.hasMany(models.sale, {
      foreignKey: 'user_id',
      as: 'userId'
    });
    
    User.hasMany(models.sale, {
      foreignKey: 'seller_id',
      as: 'sellerId'
    });
  }

  return User;
}
