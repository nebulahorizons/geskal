
import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  popular?: boolean;
}

const ProductCard = ({
  title,
  description,
  price,
  features,
  image,
  ctaText = "Learn More",
  ctaLink = "/contact",
  className,
  popular = false,
}: ProductCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all hover:shadow-lg",
        popular ? "border-primary shadow-md" : "",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rotate-[45deg] translate-x-[30%] translate-y-[-30%] shadow-sm">
            Popular
          </div>
        </div>
      )}
      
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-1">/unit</span>}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-1"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
