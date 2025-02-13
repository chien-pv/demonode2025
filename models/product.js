import { DataTypes } from "sequelize";
import sequelize from "../config/ormConnect.js";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    paranoid: true,
  }
);

export default Product;
