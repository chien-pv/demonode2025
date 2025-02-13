import Product from "../models/product.js";
import { Op } from "sequelize";
export default class ProductsController {
  static async index(req, res) {
    try {
      let limit = 2;
      let name = req.query.name;
      let page = parseInt(req.query.page);
      let offset = limit * (page - 1);

      name = name ? name : "";

      let products = await Product.findAll({
        limit,
        offset,
        where: {
          name: { [Op.like]: `%${name}%` },
        },
      });
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
  static async update(req, res) {
    try {
      let id = req.params.id;
      let params = req.body;
      let product = await Product.update(params, {
        where: {
          id,
        },
      });
      res.status(200).json({ message: "Update thành công!!!", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async destroy(req, res) {
    try {
      let id = req.params.id;
      let product = await Product.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: "Xoá thành công!!!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
