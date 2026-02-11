import { Gift, MessageCircle, Truck, Users, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TRUST_BADGES = [
  { icon: Truck, label: "Fast delivery in Gurugram & NCR" },
  { icon: IndianRupee, label: "Bulk discounts" },
  { icon: Users, label: "Local store you can visit" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-surface pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-sm font-medium text-primary">
            <Gift className="h-4 w-4" strokeWidth={2} />
            Customized Gifts · Gurugram
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl md:leading-tight">
            Gifts that say{" "}
            <span className="text-primary">you care</span> — without
            breaking the bank
          </h1>
          <p className="mt-4 max-w-xl text-base text-stone-600 md:text-lg">
            Personalised mugs, cushions, t-shirts, keychains & more. Quality
            prints, budget-friendly prices. Perfect for birthdays, festivals &
            corporate gifting.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Order your gift
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-transparent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Contact on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <Badge key={label} variant="default" className="gap-1.5 py-1.5">
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
