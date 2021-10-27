const express = require("express");
const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
  productListDetail,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.put("/:productId", productUpdate);
router.get("/:productId", productListDetail);
module.exports = router;
