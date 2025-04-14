
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProductDetail from "@/components/ProductDetail";
import SoftenerCalculator from "@/components/SoftenerCalculator";
import { useIsMobile } from "@/hooks/use-mobile";

const Products = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
      <main>
        {/* Productos Hero Section */}
        <div className="relative bg-gradient-to-r from-aqua-600 to-ocean-700 py-12 md:py-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-aqua-900 opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Nuestros Productos
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-aqua-50 mb-6 md:mb-8 max-w-2xl mx-auto">
                Soluciones de tratamiento de agua de alta calidad para su hogar o negocio
              </p>
            </div>
          </div>
        </div>

        {/* Producto Destacado */}
        <ProductDetail />

        {/* Calculadora de Suavizador */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Calculadora de Suavizador de Agua
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Determine la capacidad ideal del suavizador para sus necesidades específicas
              </p>
            </div>
            
            <div className={isMobile ? "overflow-x-auto pb-4" : ""}>
              <SoftenerCalculator />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Products;
