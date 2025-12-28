const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.post("/execute", async (req, res) => {
  const { query } = req.body;
  if (!query || !query.toLowerCase().startsWith("select")) {
    return res.status(400).json({ error: "Only SELECT queries are allowed" });
  }
  try {
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
