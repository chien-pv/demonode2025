import express from "express";
import rootRouter from "./routes/root.js";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import cors from "cors";
import session from "express-session";
import { connectMongo } from "./config/connectMongo.js";

const __dirname = import.meta.dirname;

connectMongo();
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors());

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/api/products", productRouter);

app.listen(3000, () => {
  console.log("ExpressJS server started!!!");
});
