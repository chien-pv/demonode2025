import { db } from "../config/connectBD.js";
class UserController {
  static index(req, res) {
    let sql = "SELECT * FROM user;";
    db.query(sql, (err, data) => {
      console.log(data);
      res.render("users/index", { users: data });
    });
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
