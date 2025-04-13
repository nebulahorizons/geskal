
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Droplets, Shield, Beaker, Wrench, Microscope } from "lucide-react";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";

const Services = () => {
  const services = [
    {
      id: "water-treatment",
      title: "Water Treatment",
      description: "Our advanced water treatment systems are designed to remove contaminants, improve water quality, and provide safe, clean water for residential, commercial, and industrial applications.",
      icon: <Droplets />,
      imagePosition: "right",
      features: [
        { title: "Filtration Systems", description: "Remove sediment, chemicals, and contaminants from your water supply." },
        { title: "Reverse Osmosis", description: "Advanced purification for drinking water and specialized applications." },
        { title: "Softeners & Conditioners", description: "Reduce hardness and scale buildup in your water systems." },
        { title: "Iron & Sulfur Removal", description: "Eliminate unwanted minerals and odors from water." }
      ]
    },
    {
      id: "disinfection",
      title: "Disinfection Systems",
      description: "Our cutting-edge disinfection technologies eliminate harmful bacteria, viruses, and pathogens from your water supply, ensuring safe and healthy water for all applications.",
      icon: <Shield />,
      imagePosition: "left",
      features: [
        { title: "UV Disinfection", description: "Chemical-free pathogen elimination using ultraviolet light." },
        { title: "Chlorine & Chloramine", description: "Traditional disinfection methods for water supplies." },
        { title: "Ozone Treatment", description: "Powerful oxidation to destroy microorganisms and remove contaminants." },
        { title: "Advanced Oxidation", description: "Combination technologies for complete disinfection." }
      ]
    },
    {
      id: "bioremediation",
      title: "Bioremediation",
      description: "Our eco-friendly bioremediation solutions utilize natural biological processes to clean contaminated water and soil, restoring environmental balance without harsh chemicals.",
      icon: <Beaker />,
      imagePosition: "right",
      features: [
        { title: "Microbial Remediation", description: "Using specialized bacteria to break down contaminants." },
        { title: "Phytoremediation", description: "Plant-based techniques for soil and water treatment." },
        { title: "Enzymatic Treatment", description: "Accelerated degradation of organic contaminants." },
        { title: "Bioaugmentation", description: "Enhancing natural processes for faster remediation." }
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      description: "Keep your water treatment systems operating at peak efficiency with our professional maintenance and support services, extending equipment life and ensuring optimal performance.",
      icon: <Wrench />,
      imagePosition: "left",
      features: [
        { title: "Scheduled Maintenance", description: "Regular service to prevent issues and optimize performance." },
        { title: "24/7 Emergency Support", description: "Rapid response to system failures and urgent issues." },
        { title: "System Monitoring", description: "Advanced monitoring to detect issues before they become problems." },
        { title: "Parts Replacement", description: "Genuine parts and components for all systems." }
      ]
    },
    {
      id: "consultation",
      title: "Water Quality Consultation",
      description: "Our expert water quality consultants provide comprehensive analysis and recommendations to address your specific water challenges, helping you make informed decisions.",
      icon: <Microscope />,
      imagePosition: "right",
      features: [
        { title: "Water Testing", description: "Detailed analysis of water quality and contaminants." },
        { title: "Compliance Assessment", description: "Ensuring your water meets regulatory standards." },
        { title: "System Design", description: "Custom solutions for your specific water treatment needs." },
        { title: "Efficiency Optimization", description: "Improving existing system performance." }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <ServicesHero 
          title="Our Services" 
          description="Comprehensive water treatment solutions tailored to your specific needs."
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
