import sequelize from "../../../database";
import { DataTypes } from 'sequelize';

import Product from "../product.model";

const Photo = sequelize.define('Photo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Product.hasMany(Photo);
  Photo.hasOne(Product);

  export default Photo;