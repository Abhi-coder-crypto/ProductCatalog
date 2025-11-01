import mongoose from "mongoose";
import { Product, Category } from "./models";
import { type InsertProduct, type InsertCategory, type ProductType, type CategoryType } from "@shared/schema";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export interface IStorage {
  getAllProducts(): Promise<ProductType[]>;
  getProductById(id: string): Promise<ProductType | null>;
  getProductsByCategory(categoryId: string): Promise<ProductType[]>;
  createProduct(product: InsertProduct): Promise<ProductType>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<ProductType | null>;
  deleteProduct(id: string): Promise<boolean>;
  
  getAllCategories(): Promise<CategoryType[]>;
  getCategoryById(id: string): Promise<CategoryType | null>;
  createCategory(category: InsertCategory): Promise<CategoryType>;
  updateCategory(id: string, category: Partial<InsertCategory>): Promise<CategoryType | null>;
  deleteCategory(id: string): Promise<boolean>;
}

export class MongoStorage implements IStorage {
  async getAllProducts(): Promise<ProductType[]> {
    await connectDB();
    return await Product.find({}).lean() as ProductType[];
  }

  async getProductById(id: string): Promise<ProductType | null> {
    await connectDB();
    return await Product.findOne({ id }).lean() as ProductType | null;
  }

  async getProductsByCategory(categoryId: string): Promise<ProductType[]> {
    await connectDB();
    return await Product.find({ categoryId }).lean() as ProductType[];
  }

  async createProduct(product: InsertProduct): Promise<ProductType> {
    await connectDB();
    const newProduct = new Product(product);
    return await newProduct.save() as ProductType;
  }

  async updateProduct(id: string, product: Partial<InsertProduct>): Promise<ProductType | null> {
    await connectDB();
    return await Product.findOneAndUpdate({ id }, product, { new: true }).lean() as ProductType | null;
  }

  async deleteProduct(id: string): Promise<boolean> {
    await connectDB();
    const result = await Product.deleteOne({ id });
    return result.deletedCount > 0;
  }

  async getAllCategories(): Promise<CategoryType[]> {
    await connectDB();
    return await Category.find({}).lean() as CategoryType[];
  }

  async getCategoryById(id: string): Promise<CategoryType | null> {
    await connectDB();
    return await Category.findOne({ id }).lean() as CategoryType | null;
  }

  async createCategory(category: InsertCategory): Promise<CategoryType> {
    await connectDB();
    const newCategory = new Category(category);
    return await newCategory.save() as CategoryType;
  }

  async updateCategory(id: string, category: Partial<InsertCategory>): Promise<CategoryType | null> {
    await connectDB();
    return await Category.findOneAndUpdate({ id }, category, { new: true }).lean() as CategoryType | null;
  }

  async deleteCategory(id: string): Promise<boolean> {
    await connectDB();
    const result = await Category.deleteOne({ id });
    return result.deletedCount > 0;
  }
}

export const storage = new MongoStorage();
