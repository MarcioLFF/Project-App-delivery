'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    url_image: DataTypes.STRING
  }, {
    modelName: 'products',
    timestamps: false,
    sequelize,
  });
  return Product;
}

