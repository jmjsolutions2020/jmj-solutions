import { Briefcase, Users, Calendar, Award, IndianRupee } from "lucide-react";
import { Section } from "@/components/ui/Section";

const POINTS = [
  {
    icon: Users,
    text: "HR onboarding kits, festival gifts & event takeaways",
  },
  {
    icon: IndianRupee,
    text: "Bulk pricing and consistent branding across items",
  },
  {
    icon: Calendar,
    text: "Reliable timelines so your events run on schedule",
  },
  {
    icon: Award,
    text: "Quality-checked prints and packaging",
  },
];

export function CorporateGifting() {
  return (
    <Section
      id="corporate"
      title="Corporate gifting"
      subtitle="Bulk branded gifts for teams, clients and events — handled with care."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-muted text-secondary">
            <Briefcase className="h-7 w-7" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-stone-900">
            Events, HR & branding
          </h3>
          <p className="mt-3 text-stone-600">
            We handle bulk orders for corporate events, employee gifting and
            client giveaways. Get a custom quote with bulk pricing and delivery
            timelines.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={2} />
                <span className="text-sm text-stone-700">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Request bulk quote
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 md:p-8">
          <p className="text-sm font-medium text-stone-500">Why bulk with us</p>
          <p className="mt-2 text-stone-700">
            Same quality as our retail orders, with dedicated coordination for
            quantities, artwork and delivery windows. Ideal for Diwali, New Year,
            onboarding and client appreciation.
          </p>
        </div>
      </div>
    </Section>
  );
}
