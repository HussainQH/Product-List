const express = require("express");
const upload = require("../../Middleware/multer");
const router = express.Router();
const { shopCreate, getShops, productCreate } = require("./controllers");
router.get("/", getShops);
router.post("/", shopCreate);
router.post("/:shopId/products", upload.single("image"), productCreate);
module.exports = router;
