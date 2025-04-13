
import React from "react";
import { Droplets, Shield, Beaker, Wrench, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import WaterTreatmentProducts from "@/components/WaterTreatmentProducts";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Tratamiento de Agua",
      description:
        "Sistemas avanzados de tratamiento de agua para eliminar contaminantes y mejorar la calidad del agua para propiedades residenciales y comerciales.",
      link: "/services#water-treatment",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sistemas de Desinfección",
      description:
        "Tecnologías de desinfección de vanguardia para eliminar bacterias dañinas, virus y patógenos de su suministro de agua.",
      link: "/services#disinfection",
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      title: "Biorremediación",
      description:
        "Soluciones ecológicas de biorremediación para limpiar agua y suelo contaminados utilizando procesos biológicos naturales.",
      link: "/services#bioremediation",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Mantenimiento y Soporte",
      description:
        "Servicios profesionales de mantenimiento y soporte para garantizar que sus sistemas de tratamiento de agua funcionen con máxima eficiencia.",
      link: "/services#maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Miguel Jiménez",
      company: "Granjas Valle Verde",
      testimonial:
        "Las soluciones de biorremediación de GESKAL ayudaron a restaurar el suministro de agua de nuestra granja. Su equipo fue profesional, conocedor y entregó resultados más allá de nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Sara Rodríguez",
      company: "Hotel y Spa Oceanside",
      testimonial:
        "Actualizamos nuestro sistema de tratamiento de agua con GESKAL y vimos mejoras inmediatas. Nuestros huéspedes adoran la diferencia en la calidad del agua, y hemos reducido los costos de mantenimiento.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Cervecería Agua Clara",
      testimonial:
        "Como cervecería, la calidad del agua es esencial para nuestro negocio. GESKAL proporcionó una solución personalizada que mejoró nuestro perfil de agua y mejoró la consistencia de nuestro producto.",
      rating: 4,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones completas de tratamiento de agua para satisfacer sus necesidades específicas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link to="/services">Ver Todos los Servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <WaterTreatmentProducts />

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm mb-4">
                  <Award className="h-4 w-4" />
                  <span>Proveedor Líder en Tratamiento de Agua</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Comprometidos con el Agua Limpia y la Sostenibilidad Ambiental
                </h2>
                <p className="text-gray-600 mb-6">
                  Con más de 25 años de experiencia, GESKAL Solutions ha estado a la vanguardia de la innovación en tratamiento de agua. Estamos dedicados a proporcionar soluciones de agua limpia y segura mientras protegemos nuestro medio ambiente.
                </p>
                <p className="text-gray-600 mb-8">
                  Nuestro equipo de especialistas certificados en tratamiento de agua combina experiencia técnica con pasión por la sostenibilidad. Diseñamos soluciones personalizadas para abordar sus desafíos específicos de agua, asegurando resultados óptimos para su hogar, negocio o instalación industrial.
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/about">Conozca Más Sobre Nosotros</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-aqua-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-ocean-600 opacity-90 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                      <p className="text-aqua-50">
                        Proporcionar soluciones innovadoras de tratamiento de agua que protejan la salud pública, preserven los recursos naturales y promuevan la sostenibilidad ambiental.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Droplets className="h-12 w-12 text-primary animate-flow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No se fíe solo de nuestra palabra. Esto es lo que nuestros clientes dicen sobre nuestras soluciones de tratamiento de agua.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
