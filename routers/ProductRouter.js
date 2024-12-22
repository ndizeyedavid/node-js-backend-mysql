import express from "express";
import {
  getAllProducts,
  insertNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
const ProductRouter = express.Router();

ProductRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Product Router endpoint" });
});

ProductRouter.get("/view", getAllProducts);
ProductRouter.post("/add", insertNewProduct);
ProductRouter.put("/update/:id", updateProduct);
ProductRouter.delete("/delete/:id", deleteProduct);

export default ProductRouter;
