
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Droplets, Shield, Beaker, Wrench, Microscope } from "lucide-react";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import ProductSection from "@/components/ProductSection";

const Services = () => {
  const services = [
    {
      id: "water-treatment",
      title: "Tratamiento de Agua",
      description: "Nuestros sistemas avanzados de tratamiento de agua están diseñados para eliminar contaminantes, mejorar la calidad del agua y proporcionar agua limpia y segura para aplicaciones residenciales, comerciales e industriales.",
      icon: <Droplets />,
      imagePosition: "right",
      features: [
        { title: "Sistemas de Filtración", description: "Elimine sedimentos, químicos y contaminantes de su suministro de agua." },
        { title: "Ósmosis Inversa", description: "Purificación avanzada para agua potable y aplicaciones especializadas." },
        { title: "Suavizantes y Acondicionadores", description: "Reduzca la dureza y la acumulación de sarro en sus sistemas de agua." },
        { title: "Eliminación de Hierro y Azufre", description: "Elimine minerales y olores no deseados del agua." }
      ]
    },
    {
      id: "disinfection",
      title: "Sistemas de Desinfección",
      description: "Nuestras tecnologías de desinfección de vanguardia eliminan bacterias dañinas, virus y patógenos de su suministro de agua, garantizando agua segura y saludable para todas las aplicaciones.",
      icon: <Shield />,
      imagePosition: "left",
      features: [
        { title: "Desinfección UV", description: "Eliminación de patógenos sin químicos mediante luz ultravioleta." },
        { title: "Cloro y Cloramina", description: "Métodos tradicionales de desinfección para suministros de agua." },
        { title: "Tratamiento con Ozono", description: "Oxidación potente para destruir microorganismos y eliminar contaminantes." },
        { title: "Oxidación Avanzada", description: "Tecnologías combinadas para una desinfección completa." }
      ]
    },
    {
      id: "bioremediation",
      title: "Biorremediación",
      description: "Nuestras soluciones ecológicas de biorremediación utilizan procesos biológicos naturales para limpiar agua y suelo contaminados, restaurando el equilibrio ambiental sin productos químicos agresivos.",
      icon: <Beaker />,
      imagePosition: "right",
      features: [
        { title: "Remediación Microbiana", description: "Uso de bacterias especializadas para descomponer contaminantes." },
        { title: "Fitorremediación", description: "Técnicas basadas en plantas para tratamiento de suelo y agua." },
        { title: "Tratamiento Enzimático", description: "Degradación acelerada de contaminantes orgánicos." },
        { title: "Bioaumentación", description: "Mejora de procesos naturales para una remediación más rápida." }
      ]
    },
    {
      id: "maintenance",
      title: "Mantenimiento y Soporte",
      description: "Mantenga sus sistemas de tratamiento de agua funcionando con máxima eficiencia con nuestros servicios profesionales de mantenimiento y soporte, extendiendo la vida útil del equipo y asegurando un rendimiento óptimo.",
      icon: <Wrench />,
      imagePosition: "left",
      features: [
        { title: "Mantenimiento Programado", description: "Servicio regular para prevenir problemas y optimizar el rendimiento." },
        { title: "Soporte de Emergencia 24/7", description: "Respuesta rápida a fallos del sistema y problemas urgentes." },
        { title: "Monitoreo del Sistema", description: "Monitoreo avanzado para detectar problemas antes de que se conviertan en problemas." },
        { title: "Reemplazo de Piezas", description: "Piezas y componentes genuinos para todos los sistemas." }
      ]
    },
    {
      id: "consultation",
      title: "Consultoría de Calidad del Agua",
      description: "Nuestros expertos consultores de calidad del agua proporcionan análisis y recomendaciones completas para abordar sus desafíos específicos del agua, ayudándole a tomar decisiones informadas.",
      icon: <Microscope />,
      imagePosition: "right",
      features: [
        { title: "Análisis de Agua", description: "Análisis detallado de la calidad del agua y contaminantes." },
        { title: "Evaluación de Cumplimiento", description: "Asegurando que su agua cumpla con los estándares regulatorios." },
        { title: "Diseño de Sistemas", description: "Soluciones personalizadas para sus necesidades específicas de tratamiento de agua." },
        { title: "Optimización de Eficiencia", description: "Mejorando el rendimiento de los sistemas existentes." }
      ]
    }
  ];

  const waterSoftenerProducts = [
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
      title: "Ablandador Compacto",
      description: "Solución ideal para espacios pequeños o apartamentos que aún ofrece excelente rendimiento.",
      price: "€899",
      features: [
        "Diseño compacto para espacios reducidos",
        "Instalación sencilla",
        "Bajo consumo de sal y agua",
        "Ideal para 1-3 personas",
        "Control electrónico"
      ]
    },
    {
      title: "Ablandador Industrial",
      description: "Sistemas de gran capacidad para aplicaciones comerciales e industriales con alta demanda.",
      price: "Personalizado",
      features: [
        "Capacidad para grandes volúmenes",
        "Diseño redundante para operación continua",
        "Control computarizado avanzado",
        "Monitoreo remoto disponible",
        "Servicio de instalación profesional incluido"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <ServicesHero 
          title="Nuestros Servicios" 
          description="Soluciones completas de tratamiento de agua adaptadas a sus necesidades específicas."
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service) => (
                <React.Fragment key={service.id}>
                  <ServiceDetail
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    icon={service.icon}
                    imagePosition={service.imagePosition as "left" | "right"}
                  />
                  
                  {service.id === "water-treatment" && (
                    <ProductSection
                      title="Ablandadores de Agua"
                      description="Nuestros ablandadores de agua de alta calidad eliminan los minerales que causan la dureza, protegiendo sus tuberías, electrodomésticos y mejorando la calidad del agua en su hogar o negocio."
                      products={waterSoftenerProducts}
                      serviceId="water-treatment"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
