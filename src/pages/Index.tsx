
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
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Treatment",
      description:
        "Advanced water treatment systems to remove contaminants and improve water quality for residential and commercial properties.",
      link: "/services#water-treatment",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Disinfection Systems",
      description:
        "Cutting-edge disinfection technologies to eliminate harmful bacteria, viruses, and pathogens from your water supply.",
      link: "/services#disinfection",
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      title: "Bioremediation",
      description:
        "Eco-friendly bioremediation solutions to clean contaminated water and soil using natural biological processes.",
      link: "/services#bioremediation",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Maintenance & Support",
      description:
        "Professional maintenance and support services to ensure your water treatment systems operate at peak efficiency.",
      link: "/services#maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Green Valley Farms",
      testimonial:
        "GESKAL's bioremediation solutions helped restore our farm's water supply. Their team was professional, knowledgeable, and delivered results beyond our expectations.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      company: "Oceanside Hotel & Spa",
      testimonial:
        "We upgraded our water treatment system with GESKAL and saw immediate improvements. Our guests love the difference in water quality, and we've reduced maintenance costs.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Clearwater Brewing Co.",
      testimonial:
        "As a brewery, water quality is essential to our business. GESKAL provided a customized solution that enhanced our water profile and improved our product consistency.",
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
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive water treatment solutions to meet your
                specific needs.
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
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm mb-4">
                  <Award className="h-4 w-4" />
                  <span>Leading Water Treatment Provider</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Committed to Clean Water and Environmental Sustainability
                </h2>
                <p className="text-gray-600 mb-6">
                  With over 25 years of experience, GESKAL Solutions has been at the forefront of water treatment innovation. We're dedicated to delivering clean, safe water solutions while protecting our environment.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of certified water treatment specialists combines technical expertise with a passion for sustainability. We design custom solutions to address your specific water challenges, ensuring optimal results for your home, business, or industrial facility.
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-aqua-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-ocean-600 opacity-90 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-aqua-50">
                        To provide innovative water treatment solutions that protect public health, preserve natural resources, and promote environmental sustainability.
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
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our water treatment solutions.
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
