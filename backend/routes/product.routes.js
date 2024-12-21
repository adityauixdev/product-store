import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import { createProduct, deleteProduct, displayProducts, updateProduct } from "../controllers/product.controller.js";


router.post("/", createProduct);
  
router.delete("/:id", deleteProduct);
  
router.get("/", displayProducts);
  
router.patch("/:id", updateProduct);
  

export default router;