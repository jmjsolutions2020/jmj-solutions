import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "Recently ordered birthday mugs, print quality was so good and they were delivered by the next day. Highly recommend!",
    author: "Jatin K.",
    context: "Customer",
    rating: 5,
  },
  {
    quote:
      "Got a custom cushion with our photo for Mom's birthday. She loved it. Price was reasonable and the print was clear.",
    author: "Mahak",
    context: "Customer",
    rating: 5,
  },
  {
    quote:
      "Recently bought a magic mug in which image appears on pouring hot beverages. Really amazed and liked the quality.",
    author: "Juhi",
    context: "Customer",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What Customers say"
      subtitle="Real feedback from people who ordered personalised gifts."
    >
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-4 px-4">
        {TESTIMONIALS.map(({ quote, author, context, rating }) => (
          <li key={author}>
            <TestimonialCard
              quote={quote}
              author={author}
              context={context}
              rating={rating}
            />
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="https://g.page/r/CejtHuf7DIVLEBM/review"
          target="_blank"
          className="group flex flex-row items-center justify-center gap-1.5 text-sm hover:underline font-medium text-primary"
        >
          Write a review <ArrowRightCircleIcon size={16} className="group-hover:translate-x-1 transition-transform duration-200"></ArrowRightCircleIcon>
        </Link>
      </div>
    </Section>
  );
}
