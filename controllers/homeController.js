import { db } from "../config/connectBD.js";
class HomeController {
  static index(req, res) {
    let users = [
      {
        id: 1,
        name: "Nguyen van AA",
        email: "abc@gmail.com",
      },
      {
        id: 2,
        name: "Nguyen van B",
        email: "abcd@gmail.com",
      },
      {
        id: 3,
        name: "Nguyen van D",
        email: "abcf@gmail.com",
      },
    ];
    res.render("home/index", { users: [] });
  }

  static listProduct(req, res) {
    let q = req.query.q;
    if (!q) q = "";

    let sql = `SELECT * FROM products where name LIKE '%${q}%'`;

    console.log(sql);

    db.query(sql, (err, data) => {
      console.log(data);
      res.render("products", { products: data });
    });
  }
}

export default HomeController;
