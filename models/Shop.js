const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const { Schema } = mongoose;

const ShopSchema = new Schema({
  name: { type: String, required: true },

  image: { type: String },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

ShopSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Shop", ShopSchema);
