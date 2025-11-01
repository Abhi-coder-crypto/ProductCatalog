import { useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { ProductType, CategoryType } from "@shared/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:id");
  const [, setLocation] = useLocation();
  const categoryId = params?.id || "drinks";
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: category, isLoading: categoryLoading } = useQuery<CategoryType>({
    queryKey: ["/api/categories", categoryId],
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<ProductType[]>({
    queryKey: ["/api/categories", categoryId, "products"],
  });

  const filteredProducts = products.filter(product => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    const matchesName = product.name.toLowerCase().includes(query);
    const matchesId = product.id === searchQuery.replace('#', '');
    const matchesHashcode = `#${product.id}`.toLowerCase().includes(query);
    
    return matchesName || matchesId || matchesHashcode;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const exactMatch = products.find(p => 
      p.id === searchQuery.replace('#', '') || 
      `#${p.id}` === searchQuery
    );
    
    if (exactMatch) {
      setLocation(`/product/${exactMatch.id}`);
    }
  };

  if (categoryLoading || productsLoading) {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Header onSearch={setSearchQuery} initialSearchQuery={searchQuery} onSubmitSearch={handleSearch} />
      
      {category?.image && (
        <div className="relative h-64 md:h-80 mb-8">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors" data-testid="link-home-breadcrumb">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground" data-testid="text-current-category">{category?.name}</span>
        </div>

        <div className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-category-title">
            {category?.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4" data-testid="text-category-description">
            {category?.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground" data-testid="text-product-count">
            <span>
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
              {searchQuery && ` found`}
            </span>
            {searchQuery && (
              <span className="text-primary">
                Search: "{searchQuery}"
              </span>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found matching "{searchQuery}"
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                {...product}
                category={category?.name || ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
