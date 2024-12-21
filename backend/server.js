import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.routes.js";
const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);    

app.listen(4444, () => {
  connectDB();
  console.log("Server is running on port 4444");
});
