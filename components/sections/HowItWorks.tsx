import { Package, Upload, Truck } from "lucide-react";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    step: 1,
    icon: Package,
    title: "Choose your product",
    text: "Select from mugs, tshirts, cushions, keychains or bundles. We provide wide range of customized gifts.",
  },
  {
    step: 2,
    icon: Upload,
    title: "Upload your image",
    text: "Send us the image or text you want printed. Low quality image? We optimise it automatically for better print clarity.",
  },
  {
    step: 3,
    icon: Truck,
    title: "We print & deliver",
    text: "Quality-checked printing and delivery in Gurugram. You can also pickup your order from our shop. Bulk orders get dedicated timelines.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      subtitle="Three simple steps from idea to delivered gift."
    >
      <ol className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-20">
        {STEPS.map(({ step, icon: Icon, title, text }) => (
          <li key={step} className="relative text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-muted text-secondary border-2 border-secondary">
              <Icon className="h-7 w-7" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
            <p className="mt-2 text-sm text-stone-600">{text}</p>
            {step < 3 && (
              <span
                className="absolute right-0 top-8 hidden text-stone-300 md:block"
                aria-hidden
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
