import { db } from "../config/connectBD.js";
export default class User {
  static getAll() {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM user;";
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
