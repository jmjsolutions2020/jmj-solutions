import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const TESTIMONIALS = [
  {
    quote:
      "Ordered personalised mugs for our team offsite. Quality was good and they delivered on time. Will use again for Diwali gifts.",
    author: "Priya M.",
    context: "Corporate order, Gurugram",
  },
  {
    quote:
      "Got a custom cushion with our photo for Mom’s birthday. She loved it. Price was reasonable and the print was clear.",
    author: "Rahul K.",
    context: "Personalised gift",
  },
  {
    quote:
      "We needed 200 branded t-shirts for an event. JMJ handled the bulk order smoothly and the finish was consistent.",
    author: "Neha S.",
    context: "Event branding, NCR",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What customers say"
      subtitle="Real feedback from people who ordered personalised and corporate gifts."
    >
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map(({ quote, author, context }) => (
          <li key={author}>
            <Card className="h-full flex flex-col">
              <p className="text-stone-700">&ldquo;{quote}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-stone-100">
                <p className="font-medium text-stone-900">{author}</p>
                <p className="text-xs text-stone-500">{context}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
