'use strict';

require('dotenv/config');

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.NUMBER,
    sellerId: DataTypes.NUMBER
  }, {
    modelName: 'sales',
    timestamps: false,
    underscored: true,
    sequelize,
  })

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'userName'
    });
    
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'sellerName'
    });
    

  }
  
  

  return Sale;
  
}

