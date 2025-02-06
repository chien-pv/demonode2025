import { Sequelize } from "sequelize";

const sequelize = new Sequelize("demonode2025", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
