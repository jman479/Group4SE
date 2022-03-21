import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
    code: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    percentDiscount: {
      type: Number,
      required: true,
      default: 0.0,
    },
}, {
  timestamps: true,
});

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
