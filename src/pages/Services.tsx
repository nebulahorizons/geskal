import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Droplets, Shield, Beaker, Wrench, Microscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-aqua-600 to-ocean-700 py-20 md:py-28">
          <div className="absolute inset-0 bg-aqua-900 opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-aqua-50 max-w-2xl mx-auto">
                Comprehensive water treatment solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {/* Water Treatment */}
              <div id="water-treatment" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                        <Droplets className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Water Treatment
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our advanced water treatment systems are designed to remove contaminants, improve water quality, and provide safe, clean water for residential, commercial, and industrial applications.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Filtration Systems:</strong> Remove sediment, chemicals, and contaminants from your water supply.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Reverse Osmosis:</strong> Advanced purification for drinking water and specialized applications.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Softeners & Conditioners:</strong> Reduce hardness and scale buildup in your water systems.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Iron & Sulfur Removal:</strong> Eliminate unwanted minerals and odors from water.
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                      <Droplets className="h-24 w-24 text-aqua-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Disinfection Systems */}
              <div id="disinfection" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-aqua-500" />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Disinfection Systems
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our cutting-edge disinfection technologies eliminate harmful bacteria, viruses, and pathogens from your water supply, ensuring safe and healthy water for all applications.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>UV Disinfection:</strong> Chemical-free pathogen elimination using ultraviolet light.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Chlorine & Chloramine:</strong> Traditional disinfection methods for water supplies.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Ozone Treatment:</strong> Powerful oxidation to destroy microorganisms and remove contaminants.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Advanced Oxidation:</strong> Combination technologies for complete disinfection.
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bioremediation */}
              <div id="bioremediation" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                        <Beaker className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Bioremediation
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our eco-friendly bioremediation solutions utilize natural biological processes to clean contaminated water and soil, restoring environmental balance without harsh chemicals.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Microbial Remediation:</strong> Using specialized bacteria to break down contaminants.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Phytoremediation:</strong> Plant-based techniques for soil and water treatment.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Enzymatic Treatment:</strong> Accelerated degradation of organic contaminants.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Bioaugmentation:</strong> Enhancing natural processes for faster remediation.
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                      <Beaker className="h-24 w-24 text-aqua-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance & Support */}
              <div id="maintenance" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                      <Wrench className="h-24 w-24 text-aqua-500" />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Maintenance & Support
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Keep your water treatment systems operating at peak efficiency with our professional maintenance and support services, extending equipment life and ensuring optimal performance.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Scheduled Maintenance:</strong> Regular service to prevent issues and optimize performance.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>24/7 Emergency Support:</strong> Rapid response to system failures and urgent issues.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>System Monitoring:</strong> Advanced monitoring to detect issues before they become problems.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Parts Replacement:</strong> Genuine parts and components for all systems.
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Water Quality Consultation */}
              <div id="consultation" className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                        <Microscope className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Water Quality Consultation
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our expert water quality consultants provide comprehensive analysis and recommendations to address your specific water challenges, helping you make informed decisions.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Water Testing:</strong> Detailed analysis of water quality and contaminants.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Compliance Assessment:</strong> Ensuring your water meets regulatory standards.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>System Design:</strong> Custom solutions for your specific water treatment needs.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Efficiency Optimization:</strong> Improving existing system performance.
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                      <Microscope className="h-24 w-24 text-aqua-500" />
                    </div>
                  </div>
                </div>
              </div>
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

export default Services;
