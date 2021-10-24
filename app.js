const express = require("express");
const products = require("./data");

const app = express();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

module.exports = app;
