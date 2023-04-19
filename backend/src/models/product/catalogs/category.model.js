import sequelize from "../../../database";
import { DataTypes } from 'sequelize';

import Product from "../product.model";

const Category = sequelize.define('Category', {
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

  Product.hasMany(Category);
  Category.belongsTo(Product);

  export default Category;