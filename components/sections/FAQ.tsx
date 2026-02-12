"use client";

import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/seo";

export const ITEMS = [
  {
    question: "How long will my order take?",
    answer:
      "Standard items: 3–5 business days. Bulk orders: depends on quantity — we'll confirm in the quote.",
  },
  {
    question: "Do you offer same-day pickup?",
    answer:
      "Yes for in-store ready items — call/WhatsApp to confirm.",
  },
  {
    question: "What if my image is low quality or blurry?",
    answer:
      "We automatically optimize images for better print clarity using AI-assisted enhancement when required. It’s included at no extra cost.",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept UPI, card and bank transfer. For bulk orders we can discuss payment terms. Details are shared when you confirm your order.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      title="Frequently asked questions"
      subtitle="Quick answers to common questions."
    >
      {/* FAQ structured data for SEO */}
      <JsonLd data={faqLd(ITEMS)} />
      <ul className="mx-auto max-w-2xl space-y-2">
        {ITEMS.map(({ question, answer }, index) => (
          <li
            key={question}
            className="rounded-xl border border-stone-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-stone-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-stone-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all ${openIndex === index ? "max-h-96" : "max-h-0"}`}
            >
              <p className="border-t border-stone-100 px-4 py-3 text-sm text-stone-600">
                {answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
