import { useState } from "react";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import type { CategoryType, ProductType } from "@shared/schema";

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: categories = [] } = useQuery<CategoryType[]>({
    queryKey: ["/api/categories"],
  });

  const { data: products = [] } = useQuery<ProductType[]>({
    queryKey: ["/api/products"],
  });

  const categoriesWithCounts = categories.map(category => {
    const productCount = products.filter(p => p.categoryId === category.id).length;
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      productCount,
      image: category.image || ""
    };
  });

  const filteredCategories = categoriesWithCounts.filter(category => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    return category.name.toLowerCase().includes(query) ||
           category.description.toLowerCase().includes(query);
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const matchedProduct = products.find(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id === searchQuery.replace('#', '')
    );
    
    if (matchedProduct) {
      setLocation(`/product/${matchedProduct.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Header onSearch={setSearchQuery} initialSearchQuery={searchQuery} onSubmitSearch={handleSearch} />
      
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/images/hero-banner.png"
          alt="Forever Living - World's Best Aloe Vera Company"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%),_0_0_20px_rgb(0_0_0_/_60%)]" data-testid="text-hero-title">
              Forever Living Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto [text-shadow:_1px_1px_6px_rgb(0_0_0_/_80%),_0_0_15px_rgb(0_0_0_/_50%)]" data-testid="text-hero-subtitle">
              World's Best Aloe Vera Company - Discover our complete range of natural health, wellness, and beauty products
            </p>
            <button 
              className="bg-primary text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover-elevate active-elevate-2 transition-all shadow-lg"
              data-testid="button-explore"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' })}
            >
              Explore Categories
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-categories-title">
            Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-categories-subtitle">
            Browse our carefully curated collection of health and wellness products
          </p>
        </div>

        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {filteredCategories.length} of {categoriesWithCounts.length} categories
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            {filteredCategories.length === 0 && (
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-2 text-primary hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </div>

      <footer className="border-t bg-gradient-to-b from-amber-50/50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-primary">Forever Living</h3>
              <p className="text-sm text-muted-foreground">
                Quality natural products for health, wellness, and beauty since 1978.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {categoriesWithCounts.slice(0, 5).map(cat => (
                  <li key={cat.id}>
                    <a href={`/category/${cat.id}`} className="hover:text-primary transition-colors">
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Contact this person for buying these products:
              </p>
              <p className="text-sm font-semibold text-primary">
                Pradnya Raute - 9930953307
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
