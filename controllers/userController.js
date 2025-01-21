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
}

export default UserController;
