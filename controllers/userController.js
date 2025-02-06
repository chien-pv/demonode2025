import { db } from "../config/connectBD.js";
import User from "../models/user.js";
class UserController {
  static async index(req, res) {
    let data = await User.getAll();
    res.render("users/index", { users: data });
  }
  static new(req, res) {
    res.render("users/formCreate");
  }

  static create(req, res) {
    const userParams = req.body;
    console.log(userParams);
    db.query("insert into user SET ?", userParams, function (err, data) {
      if (err) res.render("users/formCreate");
      res.redirect("/users");
    });
  }
}

export default UserController;
