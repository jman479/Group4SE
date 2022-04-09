import express from "express";
import asyncHandler from "express-async-handler";
import Coupon from "./../Models/CouponModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const couponRoute = express.Router();

// CREATE A COUPON
couponRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log("couponRoute.post: Got body:", req.body);
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
        console.log("coupon exists?");
        res.status(201).json(createdCoupon);
      } else {
        res.status(400);
        console.log("coupon NOT exists?");
        throw new Error("Invalid coupon data");
      }
    }
  })
);

// DELETE COUPON
couponRoute.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log("couponRoute.delete: req.params.id:", req.params.id);
    const coupon = await Coupon.findById(req.params.id);
    if (coupon) {
      await coupon.remove();
      res.json({ message: "Coupon deleted" });
    } else {
      res.status(404);
      throw new Error("Coupon not Found");
    }
  })
);

// GET ALL COUPON ADMIN
couponRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const coupons = await Coupon.find({});
    res.json(coupons);
  })
);

export default couponRoute;
