import { z } from "zod";

export const insertProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  image: z.string(),
  category: z.string(),
  categoryId: z.string(),
  features: z.array(z.string()),
  benefits: z.array(z.string()),
  ingredients: z.string(),
  usage: z.string(),
});

export const insertCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type ProductType = InsertProduct & { _id?: string; createdAt?: Date; updatedAt?: Date };
export type CategoryType = InsertCategory & { _id?: string; createdAt?: Date; updatedAt?: Date };
