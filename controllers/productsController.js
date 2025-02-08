import Product from "../models/product.js";
export default class ProductsController {
  static async index(req, res) {
    try {
      let products = await Product.findAll({});
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async show(req, res) {
    try {
      let id = req.params.id;
      let product = await Product.findByPk(id);
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      let { name, description, image, price } = req.body;
      let product = await Product.create({ name, description, image, price });
      res.status(200).json({ message: "Tạo mới thành công!!", data: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
