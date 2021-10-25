const express = require("express");
let products = require("./data");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/api/products", (req, res) => {
  const newProduct = products.push(req.body);
  res.status(201).json(newProduct);
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);

  if (foundProduct) {
    products = products.filter((product) => product.id !== +foundProduct.id);

    res.status(204).end();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
