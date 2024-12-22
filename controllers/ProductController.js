import db from "../DB.js";

const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(result);
  });
};

const insertNewProduct = (req, res) => {
  const { p_name, p_date_in, p_date_out, p_price } = req.body;
  const sql =
    "INSERT INTO products (p_name, p_date_in, p_date_out, p_price) VALUES (?,?,?,?)";
  db.query(sql, [p_name, p_date_in, p_date_out, p_price], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: "Product added successfully" });
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { p_name, p_date_in, p_date_out, p_price } = req.body;
  const sql =
    "UPDATE products SET p_name=?, p_date_in=?, p_date_out=?, p_price=? WHERE id=?";
  db.query(sql, [p_name, p_date_in, p_date_out, p_price, id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Product updated successfully" });
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Product deleted successfully" });
  });
};

export { getAllProducts, insertNewProduct, updateProduct, deleteProduct };
