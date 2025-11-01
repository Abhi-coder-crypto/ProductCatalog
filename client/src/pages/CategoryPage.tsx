import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { ProductType, CategoryType } from "@shared/schema";

//todo: remove mock functionality
const CATEGORY_DATA: Record<string, any> = {
  drinks: {
    name: "Drinks",
    description: "Our aloe vera drinks are the cornerstone of Forever Living. Harvested from our own aloe fields and processed within hours, these drinks deliver the pure inner leaf gel in its most potent form.",
    products: [
      { id: "715", name: "Forever Aloe Vera Gel", description: "99.7% pure inner leaf aloe vera gel - Supports healthy digestion", image: "/attached_assets/Screenshot 2025-11-01 220709_1762016185353.png" },
      { id: "716", name: "Forever Aloe Vera Gel TriPak", description: "Pack of 3 mini bottles for convenience - Perfect for on-the-go", image: "/attached_assets/Screenshot 2025-11-01 220726_1762016185354.png" },
      { id: "734", name: "Forever Aloe Berry Nectar", description: "90.7% pure aloe with cranberries for urinary health support", image: "/attached_assets/Screenshot 2025-11-01 220753_1762016185354.png" },
      { id: "777", name: "Forever Aloe Peaches", description: "84.5% pure aloe with sun-ripened peaches for added flavor", image: "/attached_assets/Screenshot 2025-11-01 220807_1762016185355.png" },
      { id: "736", name: "Forever Aloe Mango", description: "86% pure aloe with delicious natural mango - Source of vitamin C", image: "/attached_assets/Screenshot 2025-11-01 220918_1762016185355.png" },
      { id: "196", name: "Forever Freedom", description: "Advanced joint support with glucosamine and MSM - Natural orange flavor", image: "/attached_assets/Screenshot 2025-11-01 220933_1762016185356.png" },
      { id: "83", name: "Fab Forever Active Boost Citrus", description: "Energy drink with natural caffeine from Green Coffee Extract", image: "/attached_assets/Screenshot 2025-11-01 220957_1762016185356.png" },
    ]
  },
  bee: {
    name: "Bee Products",
    description: "Forever's bee products harness the natural power of the hive. Our bee pollen, royal jelly, and propolis are carefully collected and processed to preserve their natural benefits.",
    products: [
      { id: "bee-honey", name: "Forever Bee Honey", description: "Pure natural honey from our own beehives", image: "https://images.unsplash.com/photo-1587049352846-4a222e784363?w=400&q=80" },
      { id: "bee-pollen", name: "Forever Bee Pollen", description: "Natural bee pollen for energy and vitality", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80" },
      { id: "bee-propolis", name: "Forever Bee Propolis", description: "Natural immune system support from bee propolis", image: "https://images.unsplash.com/photo-1599909533588-f7d0891f08a3?w=400&q=80" },
      { id: "royal-jelly", name: "Forever Royal Jelly", description: "Premium royal jelly for vitality and wellness", image: "https://images.unsplash.com/photo-1593000434626-c7a1e085d623?w=400&q=80" },
    ]
  },
  nutritionals: {
    name: "Nutritionals",
    description: "Our nutritional supplements are formulated with premium ingredients to support your daily health and wellness goals.",
    products: [
      { id: "daily", name: "Forever Daily", description: "Complete multivitamin and mineral supplement", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&q=80" },
      { id: "arctic-sea", name: "Forever Arctic Sea", description: "Omega-3 fish oil and calamari oil blend", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
      { id: "absorbent-c", name: "Forever Absorbent-C", description: "Vitamin C with oat bran for optimal absorption", image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400&q=80" },
      { id: "calcium", name: "Forever Calcium", description: "Calcium and vitamin D for bone health", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80" },
    ]
  },
  "weight-management": {
    name: "Weight Management",
    description: "Achieve your health and fitness goals with our science-backed weight management products designed to support healthy metabolism and energy.",
    products: [
      { id: "c9", name: "Clean 9", description: "9-day nutritional cleanse program", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
      { id: "f15", name: "F15", description: "15-day intermediate weight management program", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80" },
      { id: "vital5", name: "Vital5", description: "Complete nutritional foundation pack", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80" },
      { id: "lite-ultra", name: "Forever Lite Ultra", description: "Protein shake for weight management", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80" },
    ]
  },
  skincare: {
    name: "Skincare",
    description: "Pamper your skin with our natural skincare line featuring aloe vera and other botanicals for healthy, glowing skin.",
    products: [
      { id: "aloe-lotion", name: "Aloe Lotion", description: "Moisturizing body lotion with aloe vera", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" },
      { id: "aloe-jelly", name: "Aloe Vera Gelly", description: "Pure aloe vera gel for skin care", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80" },
      { id: "sonya-cleanser", name: "Sonya Daily Skincare", description: "Complete facial care system", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80" },
    ]
  },
  "personal-care": {
    name: "Personal Care",
    description: "Essential personal care products for daily wellness and hygiene with the natural benefits of aloe vera.",
    products: [
      { id: "bright-toothgel", name: "Forever Bright Toothgel", description: "Aloe vera and bee propolis toothgel", image: "https://images.unsplash.com/photo-1609682736779-88d4b644bfa5?w=400&q=80" },
      { id: "aloe-lips", name: "Aloe Lips", description: "Soothing lip balm with aloe and jojoba", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&q=80" },
      { id: "aloe-deodorant", name: "Aloe Ever-Shield Deodorant", description: "All-day protection without aluminum", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80" },
    ]
  },
  household: {
    name: "Household",
    description: "Keep your home clean and fresh with our eco-friendly household products made with natural ingredients.",
    products: [
      { id: "aloe-mpd", name: "Aloe MPD", description: "Multi-purpose concentrated cleaner", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80" },
      { id: "aloe-liquid", name: "Aloe Liquid Soap", description: "Gentle aloe vera hand soap", image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=400&q=80" },
      { id: "hand-sanitizer", name: "Aloe Hand Sanitizer", description: "Moisturizing hand sanitizer with aloe", image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&q=80" },
    ]
  }
};

export default function CategoryPage() {
  const [, params] = useRoute("/category/:id");
  const categoryId = params?.id || "drinks";
  
  const { data: category, isLoading: categoryLoading } = useQuery<CategoryType>({
    queryKey: ["/api/categories", categoryId],
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<ProductType[]>({
    queryKey: ["/api/categories", categoryId, "products"],
  });

  const fallbackCategory = CATEGORY_DATA[categoryId] || CATEGORY_DATA.drinks;
  const displayCategory = category || fallbackCategory;
  const displayProducts = products.length > 0 ? products : fallbackCategory.products;

  if (categoryLoading || productsLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors" data-testid="link-home-breadcrumb">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground" data-testid="text-current-category">{displayCategory.name}</span>
        </div>

        <div className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-category-title">
            {displayCategory.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-category-description">
            {displayCategory.description}
          </p>
          <div className="mt-4 text-sm text-muted-foreground" data-testid="text-product-count">
            {displayProducts.length} Products
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              {...product}
              category={displayCategory.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
