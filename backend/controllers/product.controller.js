import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body;
    
    // Check if all required fields are present
    if (!name || !price || !image) {
      return res.status(400).json({ error: "All fields (name, price, image) are required" });
    }
  
    const product = new Product({ name, price, image });
    try {
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.json({ message: "Product deleted" });
    } catch (error) {
      res.status(404).json({ error: "Product not found" });
    }
  }


export const displayProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.json({"count": products.length, "products": products});
    } catch (error) {
        res.status(404).json({ error: "No products found" });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid product ID" });
    }

    try{
        const product = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}