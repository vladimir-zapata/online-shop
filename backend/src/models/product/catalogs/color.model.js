import sequelize from "../../../database";
import { DataTypes } from 'sequelize';

import Product from "../product.model";

const Color = sequelize.define('Color', {
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

  Product.hasMany(Color);
  Color.hasMany(Product);

  export default Color;