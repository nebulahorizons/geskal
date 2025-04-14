
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const benefits = [
    "Elimina el calcio y magnesio que causan la dureza del agua",
    "Reduce las manchas en grifos, duchas y superficies de baño",
    "Prolonga la vida útil de electrodomésticos como calentadores, lavadoras y lavavajillas",
    "Disminuye el consumo de jabones y detergentes hasta en un 50%",
    "Mejora la sensación del agua en la piel y cabello",
    "Sistema de regeneración eficiente que minimiza el consumo de agua y sal",
    "Fácil de instalar y mantener con soporte técnico incluido",
    "Programa digital intuitivo para control y monitoreo"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm inline-block mb-4">
              Producto Destacado
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ablandador de Agua Premium
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro sistema avanzado de ablandamiento de agua está diseñado para eliminar la dureza del agua, protegiendo sus electrodomésticos y tuberías mientras mejora la calidad del agua en toda su casa.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Beneficios Principales:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">€1,299</span>
              <div className="flex flex-col justify-center">
                <span className="text-sm text-gray-500">Incluye instalación profesional</span>
                <span className="text-sm font-medium text-primary">Garantía de 5 años</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Solicitar Cotización</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contactar a un Experto</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/d1b76ecb-a690-48b5-bf19-7c8b6729f9af.png"
                alt="Ablandador de Agua Premium"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary/10 rounded-full z-0 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
