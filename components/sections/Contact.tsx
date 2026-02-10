"use client";

import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Order your gift, ask a question or request a bulk quote. We’re here to help."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-stone-900">Contact details</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-stone-700 hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-muted text-secondary">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                </span>
                WhatsApp · 98765 43210
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@jmjsolutions.in"
                className="inline-flex items-center gap-3 text-stone-700 hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted text-primary">
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </span>
                hello@jmjsolutions.in
              </a>
            </li>
            <li>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 text-stone-700 hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </span>
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="font-medium text-stone-900">Visit us</p>
                <p className="text-sm text-stone-600">
                  JMJ Solutions, Gurugram, NCR. Visit by appointment for bulk orders.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-lg font-semibold text-stone-900">Send a message</h3>
          {submitted ? (
            <p className="mt-4 text-stone-600">
              Thanks! We’ll get back to you soon.
            </p>
          ) : (
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="10-digit mobile"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="What do you need? (e.g. personalised mugs, bulk quote, delivery timeline)"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
