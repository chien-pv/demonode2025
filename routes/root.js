import express from "express";
import HomeController from "../controllers/homeController.js";
import multer from "multer";
import User from "../models/user.js";
import { checkLoginMiddware } from "../middwares/checkLogin.js";

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

rootRouter.get("/", checkLoginMiddware, HomeController.index);
rootRouter.get("/products", HomeController.listProduct);

rootRouter.get("/upload", (req, res) => {
  res.render("login");
});

rootRouter.post("/upload", upload.single("image"), (req, res) => {
  res.redirect("/");
});

rootRouter.post("/login", async (req, res) => {
  let { email, pw } = req.body;

  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (user && user.password == pw) {
    req.session.user = user;
    res.redirect("/");
    return;
  }
  res.render("home/login");
});

rootRouter.get("/home", (req, res) => {
  res.send("<h1> Hello home page</h1>");
});

rootRouter.get("/contact", (req, res) => {
  res.send("<h1> Hello Contact page</h1>");
});

rootRouter.get("/login/form", (req, res) => {
  res.render("home/login");
});
export default rootRouter;
