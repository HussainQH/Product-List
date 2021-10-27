const express = require("express");
const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.put("/:productId", productUpdate);
module.exports = router;
