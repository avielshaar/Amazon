import expressAsyncHandler from "express-async-handler";
import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", expressAsyncHandler(getProducts));
productsRouter.get("/:id", expressAsyncHandler(getProductById));

export default productsRouter;
