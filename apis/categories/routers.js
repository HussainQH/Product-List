const express = require("express");
const upload = require("../../multer");
const router = express.Router();
const {
  categoryCreate,
  getCategories,
  productCreate,
} = require("./controllers");
router.get("/", getCategories);
router.post("/", categoryCreate);
router.post("/:categoryId/products", upload.single("image"), productCreate);
module.exports = router;
