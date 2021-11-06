const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const { Schema } = mongoose;

const ShopSchema = new Schema({
  name: { type: String, required: true },

  image: { type: String },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

ShopSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Shop", ShopSchema);
