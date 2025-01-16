import express from "express";
import HomeController from "../controllers/homeController.js";
import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img/");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const rootRouter = express.Router();

rootRouter.get("/", HomeController.index);
rootRouter.get("/products", (req, res) => {
  res.render("products");
});

rootRouter.get("/upload", (req, res) => {
  res.render("login");
});

rootRouter.post("/upload", upload.single("image"), (req, res) => {
  res.redirect("/");
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
