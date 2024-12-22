import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./routers/ProductRouter.js";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api/v1/product", ProductRouter);
