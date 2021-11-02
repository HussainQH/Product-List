const express = require("express");
const {
  productListFetch,
  productDelete,
  productUpdate,
  productListDetail,
  fetchProduct,
} = require("./controllers");

const router = express.Router();

const upload = require("../../multer");

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

router.delete("/:productId", productDelete);
router.put("/:productId", upload.single("image"), productUpdate);
router.get("/:productId", productListDetail);
module.exports = router;
