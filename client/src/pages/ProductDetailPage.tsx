import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import { ChevronRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "@shared/schema";

//todo: remove mock functionality
const PRODUCT_DATA: Record<string, any> = {
  "715": {
    name: "Forever Aloe Vera Gel",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220709_1762016185353.png",
    shortDescription: "The power of Aloe, as nature intended",
    description: "Imagine slicing open an aloe leaf and consuming the gel directly from the plant. Our Forever Aloe Vera Gel is as close to the real thing as you can get! Aloe vera has natural cleansing abilities that help the digestive tract absorb nutrients from the foods we eat into the blood stream, while promoting friendly bacteria growth. The unique polysaccharide, acemannan, and other nutrients in aloe help to support the immune system. In fact, acemannan is one of the key markers used by the IASC to indicate quality aloe vera and Forever Aloe Vera Gel has nearly double the amount required for certification!",
    features: [
      "99.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes immune health",
      "Supports nutrient absorption",
      "Helps maintain natural energy levels",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans",
      "IASC Certified, Kosher Certified"
    ],
    benefits: [
      "Supports digestive health",
      "Promotes immune system function",
      "Helps maintain natural energy levels",
      "Assists nutrient absorption",
      "Supports overall wellness"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (Aloe Vera Inner Leaf Gel (99.7%), Antioxidant (INS 300), Acidity Regulator (INS 330))",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  "716": {
    name: "Forever Aloe Vera Gel TriPak (Pack of 3 Minis)",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220726_1762016185354.png",
    shortDescription: "Aloe as nature intended",
    description: "Imagine slicing open an aloe leaf and consuming the gel directly from the plant. Our Forever Aloe Vera Gel is as close to the real thing as you can get! Three of our aloe vera gel minis are equal to one full-size bottle and can be purchased in a TriPak. Packaged in mini bottles for convenience.",
    features: [
      "99.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes immune health",
      "Supports nutrient absorption",
      "Helps maintain natural energy levels",
      "Packaged in mini bottles for convenience",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Convenient on-the-go packaging",
      "Supports digestive health",
      "Promotes immune function",
      "Helps maintain energy levels"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (Aloe Vera Inner Leaf Gel (99.7%), Antioxidant (INS 300), Acidity Regulator (INS 330))",
    usage: "Shake well. Refrigerate after opening. 330 mL (pack of 3)"
  },
  "734": {
    name: "Forever Aloe Berry Nectar",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220753_1762016185354.png",
    shortDescription: "All the benefits with a beautiful berry kick",
    description: "The refreshing zing of cranberries is paired with the sweet notes of apples for a fresh take on our aloe gel. The result is a refreshing drink that not only aids in digestion but is packed with phytonutrients and vitamins. A burst of cranberries and sweet apples provide a naturally derived, tangy flavor. Superfood cranberry packs antioxidant power shown to be 20 times higher than that of vitamin C and has proanthocyanidins that provide urinary health and support in addition to vitamin C.",
    features: [
      "90.7% pure inner leaf aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes a healthy immune system",
      "Helps maintain natural energy levels",
      "Cranberries support urinary health",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Supports urinary tract health",
      "Rich in antioxidants",
      "Promotes digestive wellness",
      "Helps maintain energy levels"
    ],
    ingredients: "Aloe Vera Inner Leaf Juice (91%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Apple Juice Concentrate (4%) (22.2 mL Apple Juice Equivalent), Fructose, Cranberry Juice Concentrate (2%) (13.3 mL Cranberry Juice Equivalent)",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  "777": {
    name: "Forever Aloe Peaches",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220807_1762016185355.png",
    shortDescription: "The benefits of aloe with sun-ripened peaches",
    description: "Forever has paired the sweet, succulent taste of sun-ripened peaches with all the benefits of pure inner leaf aloe vera gel. The result is a flavorful drink that not only aids in digestion but is packed with nutrients and antioxidants. Pure stabilized inner leaf aloe vera gel is paired with juicy peach puree for a robust drink with a sweet taste that's high in vitamins, antioxidants and boasts all the nutritional benefits of aloe.",
    features: [
      "84.5% pure aloe vera gel",
      "No added preservatives",
      "Supports healthy digestion",
      "Promotes healthy immune system",
      "Helps maintain natural energy levels",
      "Sun ripened peaches for added flavor and nutrition",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Delicious peach flavor",
      "Supports digestive health",
      "Rich in vitamins and antioxidants",
      "Natural energy support"
    ],
    ingredients: "Aloe Vera Juice (84%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Peach Puree (8.5%) (8.5 mL Peach Juice Equivalent), Fructose, Grape Juice Concentrate (3%) (12.8 mL Grape Juice Equivalent)",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  "736": {
    name: "Forever Aloe Mango",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220918_1762016185355.png",
    shortDescription: "Everything you love about aloe with delicious natural mango",
    description: "What's better than the juicy sweetness of a perfectly ripe mango? How about combining this delicious and healthy fruit with pure aloe vera gel from Forever's aloe fields! All-new Forever Aloe Mango adds a tropical twist to our line of delicious and healthy aloe vera drinks to put the sun in your glass. Forever Aloe Mango features all the benefits of our flagship Forever Aloe Vera Gel with 86% pure aloe vera gel and an extra kick of flavor that comes from natural, tropical mango puree.",
    features: [
      "86% pure aloe vera gel",
      "No added preservatives",
      "Source of vitamin C",
      "Delicious natural mango puree for added flavor",
      "Gluten Free, Suitable for vegetarians, Suitable for vegans"
    ],
    benefits: [
      "Tropical mango flavor",
      "Source of vitamin C",
      "Supports digestive health",
      "Helps immune system function"
    ],
    ingredients: "Aloe Vera Juice (86%) [Aloe Vera Inner Leaf Gel, Antioxidant (INS 300), Acidity Regulator (INS 330)], Mango Puree Concentrate (10.95%) (11.2 mL Mango Juice Equivalent), Fructose",
    usage: "Shake well. Refrigerate after opening. 1 Liter"
  },
  "196": {
    name: "Forever Freedom",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220933_1762016185356.png",
    shortDescription: "Advanced joint support with all the benefits of aloe vera",
    description: "Forever Freedom has all the powerful benefits of the original Forever Aloe Vera Gel with a little something extra to keep you moving. We've carefully selected ingredients known to support healthy joints and comfortable movement. Whether you're kicking a ball across the field, reaching into a rug or tear across the finish line, reach first for a refreshing bottle of Forever Freedom for the perfect balance of nutrients to help your joints feel strong and lubricated! The aloe vera gel used in Forever Freedom is hand harvested from our own plantation and processed within hours to ensure you get the freshest, purest product to assist in nutrient absorption, support healthy digestion and provide a natural source of energy.",
    features: [
      "Supports joint function and mobility",
      "Helps maintain healthy cartilage",
      "Natural orange flavour",
      "Gluten free",
      "Gluten Free, Suitable for vegetarians"
    ],
    benefits: [
      "Supports joint health and mobility",
      "Helps maintain healthy cartilage",
      "Promotes comfortable movement",
      "Supports digestive health"
    ],
    ingredients: "Aloe Vera Juice (83.58%), Natural Flavour (Orange), Stabilizer (INS 420ii), Fructose, Glucosamine Sulphate (Standardized to 99.4% Glucosamine) (1.25%), Chondroitin Sulphate (1.17%), Methyl Sulfonyl Methane (0.6%), Antioxidant (INS 300, INS 307a), Acidity Regulator (INS 330), Preservative (INS 202, INS 211). Contains Crustacean.",
    usage: "Shake well. Refrigerate after opening. 1 Liter. This contains Sorbitol [INS 420ii]."
  },
  "83": {
    name: "Fab Forever Active Boost Citrus",
    category: "Drinks",
    categoryId: "drinks",
    image: "/attached_assets/Screenshot 2025-11-01 220957_1762016185356.png",
    shortDescription: "Power your day with fast, long lasting energy from Green Coffee Extract",
    description: "Fab Forever Active Boost Citrus is an energy drink that's made with natural ingredients so you can power up with energy that kicks in fast and lasts longer. When it feels like you're running on empty, why not harness the power of nature's fuel? Forever Active Boost Citrus has a delicious citrus flavour and natural caffeine that comes from Green coffee extracts. It's this blend of herbs that works with the other ingredients to provide long-lasting energy and alertness to help you charge up in the morning or power through an afternoon slump.",
    features: [
      "Natural Caffeine from Green Coffee Extract",
      "Ingredients derived from nature",
      "Powers up with fast, long lasting energy",
      "Loaded with essential B Vitamins",
      "Citrus flavor for that added taste"
    ],
    benefits: [
      "Fast, long-lasting energy",
      "Natural caffeine source",
      "Supports energy metabolism",
      "Refreshing citrus taste"
    ],
    ingredients: "Water, Sugar, Lemon Juice Concentrate (1.15%)^, Carbonating agent (INS 290), Energy Premix [Taurine, Caffeine (from natural source)‡‡ (0.03%), Inositol, Vitamins (B3, B6, B2, B12), Dextrose Monohydrate], Acidity Regulators (INS 331(iii), INS 330), Nature-Identical Flavouring Substances (Lemon), Preservative (INS 211), Stabilizer (INS 445, INS 418), Permitted synthetic food colour ( INS 102). ^Equivalent to 8.85% Fruit.",
    usage: "75mg/serving size (250ml) Consume not more than 500ml per day. Not recommended for children, pregnant or lactating women, persons sensitive to caffeine. 250ml"
  },
  "bee-honey": {
    name: "Forever Bee Honey",
    category: "Bee Products",
    categoryId: "bee",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784363?w=800&q=80",
    shortDescription: "Pure natural honey from our own beehives",
    description: "Forever Bee Honey is a great-tasting, all natural sweetener loaded with nature's goodness. Our honey is carefully collected from hives located in remote, pollution-free regions to ensure optimum purity.",
    features: [
      "100% natural honey",
      "No artificial colors or preservatives",
      "Rich in antioxidants",
      "Natural energy source",
      "Premium quality from remote hives"
    ],
    benefits: [
      "Natural energy boost",
      "Supports immune function",
      "Rich in natural enzymes",
      "Natural antioxidant properties",
      "Great natural sweetener"
    ],
    ingredients: "Pure natural honey",
    usage: "Use as a natural sweetener in beverages, cooking, or enjoy directly. Can be taken daily as a natural energy supplement."
  }
};

export default function ProductDetailPage() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id || "715";
  
  const { data, isLoading } = useQuery<ProductType>({
    queryKey: ["/api/products", productId],
  });

  const fallbackProduct = PRODUCT_DATA[productId] || PRODUCT_DATA["715"];
  const product = data || fallbackProduct;

  if (isLoading) {
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
          <Link 
            href={`/category/${product.categoryId}`} 
            className="hover:text-foreground transition-colors"
            data-testid="link-category-breadcrumb"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground" data-testid="text-current-product">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-muted sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="img-product"
              />
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4" data-testid="badge-category">
              {product.category}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-product-name">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-short-description">
              {product.shortDescription}
            </p>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3" data-testid="tabs-product-info">
                <TabsTrigger value="description" data-testid="tab-description">Description</TabsTrigger>
                <TabsTrigger value="features" data-testid="tab-features">Features</TabsTrigger>
                <TabsTrigger value="benefits" data-testid="tab-benefits">Benefits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6 space-y-4">
                <p className="text-foreground leading-relaxed" data-testid="text-description">
                  {product.description}
                </p>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">How to Use</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-usage">
                      {product.usage}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {product.features?.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                          <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {product.benefits?.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                          <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="flex-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Ingredients</h3>
                <p className="text-sm text-muted-foreground" data-testid="text-ingredients">
                  {product.ingredients}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
