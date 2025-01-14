import express from "express";
import HomeController from "../controllers/homeController.js";

const rootRouter = express.Router();

rootRouter.get("/", HomeController.index);
rootRouter.get("/products", (req, res) => {
  res.render("products");
});

rootRouter.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login thanh cong!!!");
});

rootRouter.get("/home", (req, res) => {
  res.send("<h1> Hello home page</h1>");
});

rootRouter.get("/contact", (req, res) => {
  res.send("<h1> Hello Contact page</h1>");
});

export default rootRouter;
