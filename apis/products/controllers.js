const mongoose = require("mongoose");

const Product = require("../../models/Product");

exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    res.status(500);
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500);
  }
};

exports.productDelete = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findById(productId);

    await Product.remove(foundProduct);
    return res.status(204).end();
  } catch (error) {
    res.status(500);
  }
};

exports.productListDetails = (req, res) => {};
