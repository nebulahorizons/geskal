
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg group",
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-4 group-hover:bg-aqua-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to={link}>
        <Button
          variant="outline"
          className="border-aqua-600 text-aqua-600 hover:bg-aqua-600 hover:text-white transition-colors"
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
