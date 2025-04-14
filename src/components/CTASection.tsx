
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-aqua-600 to-ocean-700 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              ¿Listo para agua limpia y segura?
            </h2>
            <p className="text-aqua-100 max-w-lg text-sm md:text-base">
              Contáctenos hoy para una consulta gratuita y vea cómo nuestras soluciones de tratamiento de agua pueden ayudarle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button
              size={isMobile ? "default" : "lg"}
              className="bg-white text-aqua-700 hover:bg-aqua-50"
              asChild
            >
              <Link to="/contact">Obtener Cotización Gratis</Link>
            </Button>
            <Button
              size={isMobile ? "default" : "lg"}
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="tel:+15551234567" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> Llámenos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
