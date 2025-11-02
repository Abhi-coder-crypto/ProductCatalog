import { Search, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { CategoryType } from "@shared/schema";
import { FaWhatsapp } from "react-icons/fa";

interface HeaderProps {
  onSearch?: (query: string) => void;
  initialSearchQuery?: string;
  onSubmitSearch?: (e: React.FormEvent) => void;
}

export default function Header({ onSearch, initialSearchQuery = "", onSubmitSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: categories = [] } = useQuery<CategoryType[]>({
    queryKey: ["/api/categories"],
  });

  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSearch?.(e);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 h-16 md:h-20">
            <div className="flex items-center gap-2">
              <Link href="/" data-testid="link-home">
                <h1 className="font-heading font-bold text-lg md:text-xl text-primary cursor-pointer">
                  PRADNYA RAUTE
                </h1>
              </Link>
              <a
                href="https://wa.me/919930953307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-1.5 rounded-full transition-all"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-[#25D366]" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button 
                className="p-2 hover-elevate active-elevate-2 rounded-md" 
                data-testid="button-menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-heading font-bold text-lg text-primary">Categories</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                data-testid="button-close-menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="overflow-y-auto h-[calc(100%-64px)]">
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div 
                  className="px-4 py-3 hover:bg-amber-50 border-b cursor-pointer transition-colors"
                  data-testid="link-home-menu"
                >
                  <p className="font-semibold text-gray-900">Home</p>
                </div>
              </Link>
              
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div 
                    className="px-4 py-3 hover:bg-amber-50 border-b cursor-pointer transition-colors"
                    data-testid={`link-category-${category.id}`}
                  >
                    <p className="font-semibold text-gray-900">{category.name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{category.description}</p>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="sticky top-16 md:top-20 z-40 bg-white border-b shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <form onSubmit={handleSubmit}>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 border-amber-200 focus:border-primary focus:ring-primary"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
