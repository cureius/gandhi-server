const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        categories: { type: String, required: true, unique: true },
        status: { type: Number}
      },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
