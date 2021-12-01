const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    user_id: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    payment_type: { type: String, required: true },
    total_price: { type: Number, required: true },
    payment_status: { type: String, required: true, default: "pending" },
    order_status: { type: Number, required: true },
    length: { type: Number},
    breadth: { type: Number},
    height: { type: Number},
    weight: { type: Number},
    txnid: { type: String },
    mihpayid: { type: String },
    ship_order_id: { type: String},
    ship_shipment_id: { type: String},
    payu_status: { type: String},
    coupon_id:{ type: String},
    coupon_value: { type: Number},
    coupon_code: { type: String},
    added_on: { type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
