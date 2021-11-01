const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },

    image: { type: String },

    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },

  { timestamps: true }
);

CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Category", CategorySchema);
