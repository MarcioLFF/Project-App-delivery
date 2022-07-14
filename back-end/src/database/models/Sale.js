'use strict';

require('dotenv/config');

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'sale',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      total_price: DataTypes.NUMBER,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
      user_id: DataTypes.NUMBER,
      seller_id: DataTypes.NUMBER,
    },
    {
      modelName: 'sales',
      timestamps: false,
      underscored: true,
      sequelize,
    },
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'userName',
    });

    Sale.belongsTo(models.user, {
      foreignKey: 'seller_id',
      as: 'sellerName',
    });
  };

  return Sale;
};
