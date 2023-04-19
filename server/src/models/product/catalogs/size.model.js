import sequelize from "../../../database";
import { DataTypes } from "sequelize";

import Product from "../product.model";

const Size = sequelize.define("Size", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

Product.hasOne(Size);
Size.hasMany(Product);

export default Size;
