import expressAsyncHandler from "express-async-handler";
import express from "express";
import {
  getProducts,
  getProductById,
  getProductByToken
} from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", expressAsyncHandler(getProducts));
productsRouter.get("/:id", expressAsyncHandler(getProductById));
productsRouter.get("/token/:token", expressAsyncHandler(getProductByToken));


export default productsRouter;
