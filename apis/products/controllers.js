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

    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
};

exports.productListDetails = (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
