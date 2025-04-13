
import React from "react";
import { Droplets, Leaf, Award, Users } from "lucide-react";

const stats = [
  {
    icon: <Droplets className="h-6 w-6" />,
    value: "10M+",
    label: "Gallons Treated Daily",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: "1,000+",
    label: "Satisfied Clients",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "25+",
    label: "Years of Experience",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    value: "100%",
    label: "Eco-Friendly Solutions",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-aqua-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-aqua-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
