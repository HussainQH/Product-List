const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");
const router = express.Router();
const { shopCreate, getShops, productCreate } = require("./shops.controllers");

router.get("/", getShops);

router.post(
  "/",

  passport.authenticate("jwt", { session: false }),
  shopCreate
);

router.post("/:shopId/products", upload.single("image"), productCreate);

module.exports = router;
