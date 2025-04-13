
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-aqua-600 to-ocean-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready for clean, safe water?
            </h2>
            <p className="text-aqua-100 max-w-lg">
              Contact us today for a free consultation and see how our water treatment solutions can help you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button
              size="lg"
              className="bg-white text-aqua-700 hover:bg-aqua-50"
              asChild
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="tel:+15551234567" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> Call us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
