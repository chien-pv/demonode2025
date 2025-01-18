import { db } from "../config/connectBD.js";
class UserController {
  static index(req, res) {
    let sql = "SELECT * FROM user;";
    db.query(sql, (err, data) => {
      res.send({ users: data });
    });
  }
}

export default UserController;
