'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING
  }, {
    modelName: 'products',
    underscored: true,
    timestamps: false,
    sequelize,
  });
  return Product;
}

