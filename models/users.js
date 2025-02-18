import { db } from "../config/connectBD.js";
export default class Users {
  static getAll() {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM users;";
      db.query(sql, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
