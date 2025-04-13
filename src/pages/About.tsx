
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Check, Users, Target, Shield, Award } from "lucide-react";

const About = () => {
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
                About Aqua Pure Solutions
              </h1>
              <p className="text-xl text-aqua-50 max-w-2xl mx-auto">
                Committed to clean water and environmental sustainability for over 25 years.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1998, Aqua Pure Solutions began with a simple mission: to provide innovative water treatment solutions that protect public health while preserving our natural resources.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a small team of water quality specialists has grown into a leading provider of comprehensive water treatment, disinfection, and bioremediation services. Throughout our growth, we've remained committed to our core values of excellence, innovation, and environmental stewardship.
                </p>
                <p className="text-gray-600">
                  Today, Aqua Pure Solutions serves residential, commercial, and industrial clients across the nation, delivering customized water solutions that address specific challenges and exceed expectations.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-video bg-aqua-100 flex items-center justify-center">
                  <Users className="h-24 w-24 text-aqua-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Our Mission and Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-aqua-50 to-aqua-100 rounded-lg p-8 border border-aqua-200">
                <div className="w-12 h-12 rounded-full bg-aqua-600 flex items-center justify-center text-white mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  To provide innovative water treatment solutions that protect public health, preserve natural resources, and promote environmental sustainability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Deliver safe, clean water solutions for all applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Reduce environmental impact through sustainable practices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Provide exceptional service and customer support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-lg p-8 border border-ocean-200">
                <div className="w-12 h-12 rounded-full bg-ocean-600 flex items-center justify-center text-white mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-6">
                  To be the leading provider of water treatment solutions, recognized for our innovation, expertise, and commitment to environmental sustainability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Pioneer new technologies for water treatment and remediation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Set industry standards for quality and environmental responsibility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-ocean-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Expand access to clean water technologies globally
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at Aqua Pure Solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards in every aspect of our work, from customer service to technical implementation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously explore new technologies and methods to improve water treatment efficiency and effectiveness.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We develop and implement solutions that minimize environmental impact and promote conservation of our natural resources.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical conduct in all our business relationships and practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Certifications */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Certifications & Affiliations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain the highest industry standards through professional certifications and affiliations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                </div>
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

export default About;
