import express from "express";
import ProductsController from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.get("/", ProductsController.index);

export default productRouter;
