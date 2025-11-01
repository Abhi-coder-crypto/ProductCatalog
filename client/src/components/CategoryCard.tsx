import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
}

export default function CategoryCard({ id, name, description, productCount, image }: CategoryCardProps) {
  return (
    <Link href={`/category/${id}`} data-testid={`link-category-${id}`}>
      <Card className="group relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 h-full border-amber-200 hover:border-primary hover:shadow-lg">
        <div className="h-[280px] md:aspect-[4/3] md:h-auto relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <Badge variant="secondary" className="w-fit mb-2 bg-primary text-primary-foreground" data-testid={`badge-count-${id}`}>
              {productCount} Product{productCount !== 1 ? 's' : ''}
            </Badge>
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2" data-testid={`text-category-name-${id}`}>
              {name}
            </h3>
            <p className="text-sm text-white/90 line-clamp-2" data-testid={`text-category-description-${id}`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
