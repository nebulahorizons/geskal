
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  icon: React.ReactNode;
  imagePosition?: "left" | "right";
}

const ServiceDetail = ({
  id,
  title,
  description,
  features,
  icon,
  imagePosition = "right",
}: ServiceDetailProps) => {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {imagePosition === "left" && (
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-aqua-100 flex items-center justify-center">
              {icon && React.cloneElement(icon as React.ReactElement, { className: "h-24 w-24 text-aqua-500" })}
            </div>
          </div>
        )}
        
        <div className={imagePosition === "left" ? "order-1 lg:order-2" : ""}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600">
              {icon && React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-aqua-600 mr-2 mt-0.5 flex-shrink-0"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className="text-gray-700">
                  <strong>{feature.title}:</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
          <Button className="bg-aqua-600 hover:bg-aqua-700" asChild>
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </div>
        
        {imagePosition === "right" && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-aqua-100 flex items-center justify-center">
              {icon && React.cloneElement(icon as React.ReactElement, { className: "h-24 w-24 text-aqua-500" })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
