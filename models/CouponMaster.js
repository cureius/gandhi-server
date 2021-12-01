const mongoose = require("mongoose");

const CouponMasterSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        coupon_code: { type: String, required: true, unique: true },
        coupon_value: { type: Number, required: true},
        coupon_type: { type: String, required: true},
        cart_min_value: { type: Number, required: true},
        status: { type: Number}
      },
  { timestamps: true }
);

module.exports = mongoose.model("CouponMaster", CouponMasterSchema);
