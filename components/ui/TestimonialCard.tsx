import { Star } from "lucide-react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  context = "Customer",
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex flex-row justify-between items-center">
        {/* Quote Icon */}
      <BiSolidQuoteAltLeft size={40} className="mb-4 text-primary-muted stroke-1 stroke-primary">&ldquo;</BiSolidQuoteAltLeft>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
            strokeWidth={0}
          />
        ))}
      </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-sm text-stone-700 mb-6 leading-relaxed">{quote}</p>

      {/* Author Info */}
      <div>
        <p className="font-semibold text-stone-900">{author}</p>
        <p className="text-xs text-stone-500">{context}</p>
      </div>
    </div>
  );
}
