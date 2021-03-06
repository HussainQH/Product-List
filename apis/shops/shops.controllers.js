const Shop = require("../../models/Shop");
const Product = require("../../models/Product");

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find().populate("products");
    return res.json(shops);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.fetchShop = async (shopId, next) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop;
  } catch (error) {
    next(error);
  }
};

exports.shopCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}}`;
    }
    req.body.owner = req.user._id;
    const newShop = await Shop.create(req.body);
    await newShop.populate({
      path: "owner",
      select: "username",
    });
    return res.status(201).json(newShop);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productCreate = async (req, res, next) => {
  try {
    if (!req.user._id.equals(req.shop.owner._id)) {
      return next({
        status: 401,
        message: "Access Denied",
      });
    }

    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }

    const shopId = req.params.shopId;
    req.body = { ...req.body, shop: shopId };
    const newProduct = await Product.create(req.body);
    await Shop.findByIdAndUpdate(
      { _id: req.params.shopId },
      { $push: { products: newProduct._id } }
    );
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
