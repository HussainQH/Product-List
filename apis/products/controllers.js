const mongoose = require("mongoose");

const Product = require("../../models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productListDetail = async (req, res, next) => {
  res.status(200).json(req.product);
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.product,
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.status(200).json(product);
  } catch (err) {
    next(error);
  }
};
