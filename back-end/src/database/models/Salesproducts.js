'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    modelName: 'salesProducts',
    timestamps: false,
    sequelize,
  }) ;

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { through: 'salesProducts', foreignKey: 'sales_id', otherKey: 'products_id' })
    models.Product.belongsToMany(models.Sale, { through: 'salesProducts', foreignKey: 'products_id', otherKey: 'sales_id' })  
  }
  
  return SalesProducts;
}
  


