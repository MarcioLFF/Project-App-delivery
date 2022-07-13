'use strict';
const {
  Model
} = require('sequelize');

  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
    underscored: true,
    timestamps: false
  });
export default Products

