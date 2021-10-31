const express = require("express");
const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
  productListDetail,
  fetchProduct,
} = require("./controllers");

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", productListFetch);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.put("/:productId", productUpdate);
router.get("/:productId", productListDetail);
module.exports = router;
