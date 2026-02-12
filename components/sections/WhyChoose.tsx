import {
  IndianRupee,
  CheckCircle2,
  MapPin,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { EXTRA_IMAGES } from "@/data/images";

const REASONS = [
  {
    icon: IndianRupee,
    title: "Budget-friendly pricing",
    text: "Great value for personalised gifts without compromising on quality.",
  },
  {
    icon: CheckCircle2,
    title: "Quality-checked prints",
    text: "Every order is checked before hand off, so you get a product you can gift with confidence.",
  },
  {
    icon: MapPin,
    title: "Local Delivery & Store",
    text: "Based in Gurugram, free and quick delivery within 3km and you can also visit the shop.",
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
      <div className="md:mt-20">
        {/* Desktop layout: Reasons on sides, image in center */}
        <div className="hidden lg:flex gap-20 items-center justify-center">
        <div>
          <ul className="grid grid-cols-1 gap-6">
          {REASONS.slice(0,2).map(({ icon, title, text }) => (
            <li key={title}>
              <ReasonCard icon={icon} title={title} text={text} />
            </li>
          ))}
        </ul>
        </div>
        <div className="w-1/3">
          <Image src={EXTRA_IMAGES.customers} alt="Why choose us" width={300} height={400} loading="lazy" className="h-auto w-full object-cover rounded-2xl shadow-sm aspect-3/4 bg-white" />
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-6">
          {REASONS.slice(2,4).map(({ icon, title, text }) => (
            <li key={title}>
              <ReasonCard icon={icon} title={title} text={text} />
            </li>
          ))}
        </ul>
        </div>
      </div>
      {/* Mobile layout: Image on top, reasons in a list below */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="px-4 my-10 w-full sm:w-1/2">
          <Image src={EXTRA_IMAGES.customers} alt="Why choose us" width={400} height={300} loading="lazy" className="h-auto w-full object-cover rounded-2xl shadow-sm aspect-3/4 bg-white" />
        </div>
        <ul className="grid grid-cols-1 gap-6">
          {REASONS.map(({ icon, title, text }) => (
            <li key={title}>
              <ReasonCard icon={icon} title={title} text={text} />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </Section>
  );
}

function ReasonCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl p-5 justify-center items-center text-center max-w-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-primary bg-primary-muted text-primary">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="mt-4 font-semibold text-stone-900 text-lg">{title}</h3>
      <p className="mt-2 text-sm text-stone-600">{text}</p>
    </div>
  );
}
