import express from "express";
import UserController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", UserController.index);
userRouter.get("/new", UserController.new);

export default userRouter;
