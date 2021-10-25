let products = require("../../data");

exports.productListFetch = (req, res) => {
  return res.json(products);
};

exports.productCreate = (req, res) => {
  products.push(req.body);

  return res.status(201).json(req.body);
};

exports.productDelete = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);

  if (foundProduct) {
    products = products.filter((product) => product.id !== +foundProduct.id);

    res.status(204).end();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
