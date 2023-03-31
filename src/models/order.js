'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey:'user_id'
      });
    }
  }
  Order.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdOn: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    status: {
      type: DataTypes.ENUM,
      values: ["new", "payed", "shipment, delivered"],
      defaultValue: "new",
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};