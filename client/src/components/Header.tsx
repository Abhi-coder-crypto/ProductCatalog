import { Search } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void;
  initialSearchQuery?: string;
  onSubmitSearch?: (e: React.FormEvent) => void;
}

export default function Header({ onSearch, initialSearchQuery = "", onSubmitSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/images/forever-logo.png" 
                alt="Forever Living" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
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

          <div className="flex items-center gap-2">
            <button 
              className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md" 
              data-testid="button-search-mobile"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {isMobileSearchOpen && (
          <div className="pb-4 md:hidden">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 border-amber-200 focus:border-primary focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  data-testid="input-search-mobile"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
