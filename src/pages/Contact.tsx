
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
                Contact Us
              </h1>
              <p className="text-xl text-aqua-50 max-w-2xl mx-auto">
                Get in touch with our water treatment experts. We're here to help with your water quality needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our water treatment solutions? Contact us for a free consultation. Our team of experts is ready to answer your questions and help you find the perfect solution for your water needs.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Office Location
                      </h3>
                      <p className="text-gray-600">
                        123 Water Lane, Clearwater, CA 94103
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+15551234567"
                          className="hover:text-aqua-600 transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@aquapure.com"
                          className="hover:text-aqua-600 transition-colors"
                        >
                          info@aquapure.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM <br />
                        Saturday: 9:00 AM - 1:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Location
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our main office to discuss your water treatment needs in person.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gray-200 aspect-video flex items-center justify-center">
                <MapPin className="h-16 w-16 text-aqua-600" />
                <span className="text-xl font-semibold text-gray-700 ml-3">Map placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
