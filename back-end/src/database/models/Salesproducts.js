'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    modelName: 'salesProducts',
    timestamps: false,
    sequelize,
  }) ;

  SalesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, { through: 'salesProducts', foreignKey: 'sales_id', otherKey: 'products_id' })
    models.product.belongsToMany(models.sale, { through: 'salesProducts', foreignKey: 'products_id', otherKey: 'sales_id' })  
  }
  
  return SalesProducts;
}
  


