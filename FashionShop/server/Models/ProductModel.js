import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    piece: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    imageOne: {
      type: String,
    },
    imageTwo: {
      type: String,
    },
    imageThree: {
      type: String,
    },
    imageFour: {
      type: String,
    },
    imageFive: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeInStockXS: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeInStockS: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeInStockM: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeInStockL: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeInStockXL: {
      type: Number,
      required: true,
      default: 0,
    },
    sizeChosen: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
