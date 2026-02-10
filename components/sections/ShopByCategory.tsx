import {
  Coffee,
  Square,
  Shirt,
  KeyRound,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const CATEGORIES: { icon: LucideIcon; label: string }[] = [
  { icon: Coffee, label: "Mugs" },
  { icon: Square, label: "Cushions & Pillows" },
  { icon: Shirt, label: "T-Shirts" },
  { icon: KeyRound, label: "Keychains & Small Gifts" },
  { icon: Briefcase, label: "Corporate Gifts" },
];

export function ShopByCategory() {
  return (
    <Section
      id="categories"
      title="Shop by category"
      subtitle="Choose what you want to personalise — we take care of the rest."
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CATEGORIES.map(({ icon: Icon, label }) => (
          <li key={label}>
            <a href="#contact" className="block h-full">
              <Card
                hover
                className="flex h-full flex-col items-center justify-center gap-3 py-6 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted text-primary">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <span className="font-medium text-stone-900">{label}</span>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
