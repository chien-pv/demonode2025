import express from "express";
import rootRouter from "./routes/root.js";
const app = express();
app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("ExpressJS server started!!!");
});
