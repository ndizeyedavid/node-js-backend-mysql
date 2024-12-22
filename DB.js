import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 3306,
});

db.on("connect", () => {
  console.log("Database Connected");
});

db.on("error", (err) => {
  console.log("An error occured: ", err.message);
});

export default db;
