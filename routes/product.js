import express from "express";
import ProductsController from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.get("/", ProductsController.index);
productRouter.get("/:id", ProductsController.show);
productRouter.post("/", ProductsController.create);
productRouter.put("/:id", ProductsController.update);
productRouter.delete("/:id", ProductsController.destroy);

export default productRouter;
