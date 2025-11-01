import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  image: { type: String, required: false },
  category: { type: String, required: true },
  categoryId: { type: String, required: true },
  features: [{ type: String }],
  benefits: [{ type: String }],
  ingredients: { type: String, required: true },
  usage: { type: String, required: true },
}, { timestamps: true });

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
