const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    image: { type: String },
    description: { type: String },
    color: { type: String },
    quantity: { type: Number, min: 0 },
    price: { type: Number, default: 5 },
    shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
  },

  { timestamps: true }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Product", ProductSchema);
