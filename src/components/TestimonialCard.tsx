
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  name,
  company,
  testimonial,
  rating,
  className,
}: TestimonialCardProps) => {
  const stars = Array(5)
    .fill(0)
    .map((_, idx) => (
      <Star
        key={idx}
        className={cn(
          "h-4 w-4",
          idx < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )}
      />
    ));

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl border border-gray-100",
        className
      )}
    >
      <div className="flex space-x-1 mb-3">{stars}</div>
      <p className="text-gray-700 mb-4 italic">&quot;{testimonial}&quot;</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-aqua-100 flex items-center justify-center text-aqua-600 font-semibold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
