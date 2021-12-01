const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    
      id: { type: String, required: true, unique: true },
      categories_id:{ type: String, required: true},
      sub_categories_id:{ type: String, required: true},
      name: { type: String},
      mrp: { type: Number},
      price:{ type: Number},
      qty: { type: Number},
      image: { type: String},
      short_desc: { type: String},
      description: { type: String},
      best_seller: { type: String},
      meta_title: { type: String},
      meta_desc: { type: String},
      meta_keyword: { type: String},
      added_by: { type: String},
      status: { type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
