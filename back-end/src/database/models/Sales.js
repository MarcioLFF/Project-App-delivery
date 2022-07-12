'use strict';
const Users = require('./Users'); 
const {
  Model
} = require('sequelize');

class Sales extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */

}
Sales.init({
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
  sequelize,
  modelName: 'sales',
  timestamps: false,
  underscored: true,
});

Sales.belongsTo(User, {
  foreignKey: 'id',
  as: 'sellerId'
});

Sales.belongsTo(User, {
  foreignKey: 'id',
  as: 'userId'
});

Users.hasMany(Sales, {
  foreignKey: 'id',
  as: 'sellerId'
});

Users.hasMany(Sales, {
  foreignKey: 'id',
  as: 'userId'
});

export default Sales

