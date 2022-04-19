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
    const { code, expirationDate, percentDiscount, isEnabled } = req.body;
    const couponExist = await Coupon.findOne({ code });
    if (couponExist) {
      res.status(400);
      throw new Error("Coupon code already exists");
    } else {
      if (percentDiscount > 100) {
        res.status(400);
        throw new Error("percentDiscount Cannot be greater than 100%");
      }
      const coupon = new Coupon({
        code,
        expirationDate,
        percentDiscount, 
        isEnabled
      });
      if (coupon) {
        const createdCoupon = await coupon.save();
        res.status(201).json(createdCoupon);
      } else {
        res.status(400);
        throw new Error("Invalid coupon data");
      }
    }
  })
);

// DELETE COUPON
couponRoute.delete(
  "/:code",
  asyncHandler(async (req, res) => {
    console.log("couponRoute.delete: req.params.code:", req.params.code);
    const coupon = await Coupon.findById(req.params.code);
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

// GET SINGLE COUPON
couponRoute.get(
  "/:code",
  asyncHandler(async (req, res) => {
    const coupon = await Coupon.findOne({ code: req.params.code });
    if (coupon) {
      res.json(coupon);
    } else {
      res.status(404);
      throw new Error("Coupon not Found");
    }
  })
);

// UPDATE COUPON
couponRoute.put(
  "/:code",
  asyncHandler(async (req, res) => {
    console.log("couponRoute.put: req.params.code:", req.params.code);
    console.log("couponRoute.put: Got body:", req.body);
    const { code, expirationDate, percentDiscount, isEnabled } = req.body;
    const coupon = await Coupon.findOne({ code: req.params.code });
    if (coupon) {
      coupon.code = code || coupon.code;
      coupon.expirationDate = expirationDate || coupon.expirationDate;
      coupon.percentDiscount = percentDiscount || coupon.percentDiscount;
      coupon.isEnabled = isEnabled;

      const updatedCoupon = await coupon.save();
      res.json(updatedCoupon);
    } else {
      res.status(404);
      throw new Error("Coupon not found");
    }
  })
);

export default couponRoute;
