import {
  IndianRupee,
  CheckCircle2,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

const REASONS = [
  {
    icon: IndianRupee,
    title: "Budget-friendly pricing",
    text: "Great value for personalised gifts without compromising on quality.",
  },
  {
    icon: CheckCircle2,
    title: "Quality-checked prints",
    text: "Every order is checked before dispatch so you get a product you can gift with confidence.",
  },
  {
    icon: MapPin,
    title: "Local fulfilment",
    text: "Based in Gurugram — faster delivery in NCR and a store you can visit for larger orders.",
  },
  {
    icon: Briefcase,
    title: "Corporate bulk expertise",
    text: "Dedicated handling for HR, events and branding with consistent quality and reliable timelines.",
  },
  {
    icon: Sparkles,
    title: "Complimentary image optimisation",
    text: "We improve low-resolution images for better print clarity at no extra cost.",
  },
];

export function WhyChoose() {
  return (
    <Section
      id="why-us"
      title="Why choose JMJ Solutions"
      subtitle="We focus on what matters: quality, value and reliability."
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {REASONS.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <div className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-semibold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm text-stone-600">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
