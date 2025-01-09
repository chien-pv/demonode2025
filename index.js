import express from "express";
import rootRouter from "./routes/root.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("ExpressJS server started!!!");
});
