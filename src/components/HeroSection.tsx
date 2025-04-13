
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-aqua-600 to-ocean-700 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-aqua-900 opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm mb-4">
              <Droplets className="h-4 w-4" />
              <span>Soluciones Innovadoras para Agua</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Agua Pura. Mejor Vida.
            </h1>
            <p className="text-lg md:text-xl text-aqua-50 mb-8 max-w-2xl">
              Ofrecemos soluciones de vanguardia para tratamiento de agua, desinfección y biorremediación para aplicaciones residenciales, comerciales e industriales.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-white text-aqua-700 hover:bg-aqua-50 hover:text-aqua-800"
                asChild
              >
                <Link to="/contact">
                  Obtener Consulta Gratuita
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  <span>Nuestros Servicios</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="water-wave h-96 w-96 opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroSection;
