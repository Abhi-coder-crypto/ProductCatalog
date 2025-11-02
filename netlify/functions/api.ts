import express, { type Request, Response, NextFunction, Router } from "express";
import serverless from "serverless-http";
import { storage } from "../../server/storage";
import { insertProductSchema, insertCategorySchema } from "../../shared/schema";
import { seedDatabase } from "../../server/seed";

const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let isSeeded = false;
async function ensureSeeded() {
  if (!isSeeded) {
    try {
      await seedDatabase();
      isSeeded = true;
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Seeding error:", error);
    }
  }
}

router.get("/products", async (req, res) => {
  try {
    await ensureSeeded();
    const products = await storage.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await storage.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

router.get("/categories/:id/products", async (req, res) => {
  try {
    const products = await storage.getProductsByCategory(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
});

router.post("/products", async (req, res) => {
  try {
    const validatedData = insertProductSchema.parse(req.body);
    const product = await storage.createProduct(validatedData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Invalid product data" });
  }
});

router.get("/categories", async (req, res) => {
  try {
    await ensureSeeded();
    const categories = await storage.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

router.get("/categories/:id", async (req, res) => {
  try {
    const category = await storage.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
});

router.post("/categories", async (req, res) => {
  try {
    const validatedData = insertCategorySchema.parse(req.body);
    const category = await storage.createCategory(validatedData);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Invalid category data" });
  }
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

app.use('/.netlify/functions/api', router);

export const handler = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const serverlessHandler = serverless(app);
  return await serverlessHandler(event, context);
};
