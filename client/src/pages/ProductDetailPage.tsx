import { useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import Header from "@/components/Header";
import { ChevronRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "@shared/schema";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailPage() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const productId = params?.id || "715";
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: product, isLoading } = useQuery<ProductType>({
    queryKey: ["/api/products", productId],
  });

  const { data: allProducts = [] } = useQuery<ProductType[]>({
    queryKey: ["/api/products"],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const matchedProduct = allProducts.find(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id === searchQuery.replace('#', '')
    );
    
    if (matchedProduct) {
      setLocation(`/product/${matchedProduct.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="text-center">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Header onSearch={setSearchQuery} initialSearchQuery={searchQuery} onSubmitSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors" data-testid="link-home-breadcrumb">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link 
            href={`/category/${product.categoryId}`} 
            className="hover:text-primary transition-colors"
            data-testid="link-category-breadcrumb"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground" data-testid="text-current-product">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-200 sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 md:p-8"
                data-testid="img-product"
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-amber-100 text-amber-900 border-amber-200" data-testid="badge-category">
                {product.category}
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                #{product.id}
              </Badge>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-testid="text-product-name">
              {product.name}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6" data-testid="text-short-description">
              {product.shortDescription}
            </p>

            <Button
              onClick={() => {
                const message = `I am interested in ${product.name}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919930953307?text=${encodedMessage}`, '_blank');
              }}
              className="w-full mb-8 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg shadow-lg hover-elevate active-elevate-2"
              data-testid="button-enquire-now"
            >
              <FaWhatsapp className="w-6 h-6 mr-2" />
              Enquire Now
            </Button>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-amber-50 border border-amber-200" data-testid="tabs-product-info">
                <TabsTrigger value="description" className="data-[state=active]:bg-white data-[state=active]:text-primary" data-testid="tab-description">Description</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-primary" data-testid="tab-features">Features</TabsTrigger>
                <TabsTrigger value="benefits" className="data-[state=active]:bg-white data-[state=active]:text-primary" data-testid="tab-benefits">Benefits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6 space-y-4">
                <div className="prose max-w-none">
                  <p className="text-foreground leading-relaxed text-sm md:text-base" data-testid="text-description">
                    {product.description}
                  </p>
                </div>
                <Card className="border-amber-200">
                  <CardContent className="p-4 md:p-6 bg-gradient-to-br from-white to-amber-50/30">
                    <h3 className="font-semibold text-lg mb-3">How to Use</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-usage">
                      {product.usage}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card className="border-amber-200">
                  <CardContent className="p-4 md:p-6 bg-gradient-to-br from-white to-amber-50/30">
                    <ul className="space-y-3">
                      {product.features?.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                          <div className="bg-primary/20 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="flex-1 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <Card className="border-amber-200">
                  <CardContent className="p-4 md:p-6 bg-gradient-to-br from-white to-amber-50/30">
                    <ul className="space-y-3">
                      {product.benefits?.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                          <div className="bg-primary/20 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="flex-1 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6 border-amber-200">
              <CardContent className="p-4 md:p-6 bg-gradient-to-br from-white to-amber-50/30">
                <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-ingredients">
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
