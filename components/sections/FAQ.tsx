"use client";

import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState } from "react";

const ITEMS = [
  {
    question: "How long does delivery take?",
    answer:
      "For Gurugram and NCR we typically deliver within 3–5 business days after print. Bulk orders may take 7–10 days depending on quantity. We’ll confirm timelines when you place your order.",
  },
  {
    question: "Do you do bulk or corporate orders?",
    answer:
      "Yes. We handle bulk orders for HR, events and branding. You get dedicated coordination, bulk pricing and reliable delivery windows. Use the contact form or WhatsApp to request a quote.",
  },
  {
    question: "What if my image is low quality or blurry?",
    answer:
      "We use a print-optimisation step to improve clarity of low-resolution images so prints look better. This improves sharpness and contrast for print; it doesn’t alter faces or content. It’s included at no extra cost.",
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
