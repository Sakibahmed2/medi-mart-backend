import mongoose, { model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: [true, "Name is required!"] },
  slug: { type: String, required: [true, "Slug is required!"], unique: true },
  photo: { type: String, required: [true, "Photo is required!"] },
  description: { type: String },
  price: { type: Number, required: [true, "Price is required!"] },
  discount: { type: Number, default: 0 },
  stockStatus: { type: Boolean, default: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  catagories: [{ type: mongoose.Schema.ObjectId, ref: "Category" }],
});

export const Products = model<IProduct>("Products", productSchema);
