import sequelize from "../../../database";
import { DataTypes } from 'sequelize';

import Product from "../product.model";

const Brand = sequelize.define('Brand', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Product.hasOne(Brand);
  Brand.hasMany(Product);

  export default Brand;