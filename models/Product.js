const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: Number,
    price: { type: Number, default: 5 },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
