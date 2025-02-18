import { DataTypes } from "sequelize";
import sequelize from "../config/ormConnect.js";

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // paranoid: true,
  }
);

export default User;
