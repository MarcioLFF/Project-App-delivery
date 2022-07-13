'use strict';

import Products from './Products';
import Sales from './Sales';

const {
  Model
} = require('sequelize');

  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  }
  SalesProducts.init({
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'salesProducts',
    timestamps: false
  });

  Sales.hasMany(Products, { through: 'salesProducts', foreignKey: 'sales_id', otherKey: 'products_id' })
  Products.hasMany(Sales, { through: 'salesProducts', foreignKey: 'products_id', otherKey: 'sales_id' })
  
  Sales.belongsToMany(Products, { through: 'salesProducts', foreignKey: 'sales_id', otherKey: 'products_id' })
  Products.belongsToMany(Sales, { through: 'salesProducts', foreignKey: 'products_id', otherKey: 'sales_id' })
  
module.exports = SalesProducts;


