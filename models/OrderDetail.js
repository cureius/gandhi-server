const mongoose = require("mongoose");

const OrderDetailSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    order_id: { type: Number, required: true},
    product_id: { type: Number, required: true},
    qty: { type: Number, required: true},
    price: { type: Number, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderDetail", OrderDetailSchema);
