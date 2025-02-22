import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import HomeController from "../controllers/homeController.js";
import multer from "multer";
import User from "../models/user.js";
import UserMongo from "../models/usersMongo.js";
import { checkLoginMiddware } from "../middwares/checkLogin.js";
const salt = bcrypt.genSaltSync(10);

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
  if (user && bcrypt.compareSync(pw, user.password)) {
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

rootRouter.post("/api/resgiter", async (req, res) => {
  let { username, email, password } = req.body;

  password = bcrypt.hashSync(password, salt);

  let user = User.create({ username, email, password });
  res.json({ message: "Đăng kí thành công!!!", user });
});

rootRouter.post("/api/login", async (req, res) => {
  let { email, password } = req.body;
  // console.log(req.body);
  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (user && bcrypt.compareSync(password, user.password)) {
    let token = jwt.sign({ email }, "nodejs");
    res.json({ message: "Đăng Nhập thành công!!!", token });
    return;
  }
  res.status(400).json({ message: "Đăng Nhập Thất bại!!!" });
});
rootRouter.get("/mongo/users", async (req, res) => {
  const users = await UserMongo.find({});
  res.json({ users });
});
export default rootRouter;
