const mongoose = require("mongoose");

const Product = require("../../models/Product");

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productListDetail = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById({ _id: productId });
    if (product) {
      return res.json(product);
    } else {
      next({
        status: 404,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
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
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndDelete({ _id: productId });

    if (product) {
      return res.status(204).end();
    } else {
      next({
        status: 404,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,

      { new: true, runValidators: true }
    );

    if (product) {
      return res.json(product);
    } else {
      next({
        status: 404,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};
