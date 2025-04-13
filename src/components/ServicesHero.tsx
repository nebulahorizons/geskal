
import React from "react";

interface ServicesHeroProps {
  title: string;
  description: string;
}

const ServicesHero = ({ title, description }: ServicesHeroProps) => {
  return (
    <section className="relative bg-gradient-to-r from-aqua-600 to-ocean-700 py-20 md:py-28">
      <div className="absolute inset-0 bg-aqua-900 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-aqua-50 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
