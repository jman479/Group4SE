import express from "express";
import asyncHandler from "express-async-handler";
import Coupon from "./../Models/CouponModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const couponRoute = express.Router();

// CREATE A COUPON
couponRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log("Got body:", req.body)
    const { code, expirationDate, percentDiscount } = req.body;
    const couponExist = await Coupon.findOne({ code });
    if (couponExist) {
      res.status(400);
      throw new Error("Coupon code already exists");
    } else {
      const coupon = new Coupon({
        code,
        expirationDate,
        percentDiscount
      });
      if (coupon) {
        const createdCoupon = await coupon.save();
        console.log("coupon exists?")
        res.status(201).json(createdCoupon);
      } else {
        res.status(400);
        console.log("coupon NOT exists?")
        throw new Error("Invalid coupon data");
      }
    }
  })
);

export default couponRoute;
