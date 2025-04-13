
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  title: string;
  description: string;
  price: string;
  features: string[];
  image?: string;
  popular?: boolean;
}

interface ProductSectionProps {
  title: string;
  description: string;
  products: Product[];
  serviceId: string;
}

const ProductSection = ({
  title,
  description,
  products,
  serviceId,
}: ProductSectionProps) => {
  return (
    <section id={`${serviceId}-products`} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              features={product.features}
              image={product.image}
              ctaLink="/contact"
              ctaText="Request Quote"
              popular={product.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
