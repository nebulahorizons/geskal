
import React from "react";
import { Droplets } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const WaterTreatmentProducts = () => {
  const products = [
    {
      title: "Ablandador de Agua Premium",
      description: "Sistema avanzado para eliminar la dureza del agua y proteger sus electrodomésticos y tuberías.",
      price: "€1,299",
      features: [
        "Elimina calcio y magnesio",
        "Reduce manchas y acumulación de sarro",
        "Prolonga la vida útil de electrodomésticos",
        "Sistema de regeneración eficiente",
        "Programación digital fácil de usar"
      ],
      image: "/lovable-uploads/d1b76ecb-a690-48b5-bf19-7c8b6729f9af.png",
      popular: true
    },
    {
      title: "Filtro de Sedimentos",
      description: "Elimina partículas, arena y sedimentos para mejorar la calidad general del agua.",
      price: "€299",
      features: [
        "Filtración de 5 micrones",
        "Protege otros sistemas de filtración",
        "Fácil mantenimiento",
        "Aumenta la claridad del agua",
        "Carcasa duradera de alto impacto"
      ]
    },
    {
      title: "Sistema de Ósmosis Inversa",
      description: "Purificación avanzada para obtener agua potable de la más alta calidad para toda la familia.",
      price: "€749",
      features: [
        "Elimina hasta 99% de contaminantes",
        "Sistema de 5 etapas de filtración",
        "Incluye grifo dedicado",
        "Certificado NSF",
        "Tanque de almacenamiento incluido"
      ]
    }
  ];

  return (
    <section id="water-treatment-products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm mb-4">
            <Droplets className="h-4 w-4" />
            <span>Soluciones de Calidad</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Productos para Tratamiento de Agua
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestros sistemas de tratamiento de agua de alta calidad están diseñados para proporcionarle agua limpia y saludable para su hogar o negocio.
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
              ctaText="Solicitar Cotización"
              popular={product.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterTreatmentProducts;
