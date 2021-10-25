const express = require("express");
const {
  productListFetch,
  productCreate,
  productDelete,
  productListDetails,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.get("/:productId", productListDetails);
module.exports = router;
