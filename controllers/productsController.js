import Product from "../models/product.js";
export default class ProductsController {
  static async index(req, res) {
    let products = await Product.findAll({});
    res.json({ data: products });
  }
}
