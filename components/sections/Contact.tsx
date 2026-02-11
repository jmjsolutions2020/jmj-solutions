"use client";

import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Contact() {

  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Order your gift, ask a question or request a bulk quote. We’re here to help."
      type="primary"
    >
      <div className="flex flex-col gap-10 lg:flex-row justify-center items-center lg:justify-between px-6 pt-10">
        <div>
          <h3 className="text-xl font-semibold text-white">Contact details</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="https://wa.me/919971047797"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-200 hover:underline underline-offset-2 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-500">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                </span>
                WhatsApp · 99710 47797
              </a>
            </li>
            <li>
              <a
                href="mailto:jmjsolutions2020@gmail.com"
                className="inline-flex items-center gap-3 text-gray-200 hover:underline underline-offset-2 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted text-primary">
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </span>
                jmjsolutions2020@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919971047797"
                className="inline-flex items-center gap-3 text-gray-200 hover:underline underline-offset-2 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </span>
                +91 99710 47797
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="font-medium text-white">Visit us</p>
                <p className="text-sm text-gray-200">
                JMJ Solutions, J-26, Ashok Vihar Phase 2, Gurugram - 122001
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white shadow-sm w-full h-auto md:w-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6512568666717!2d77.0165408!3d28.490047500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d35574c383%3A0x4b850cfbe71eede8!2sJMJ%20Solutions!5e0!3m2!1sen!2sin!4v1770711038727!5m2!1sen!2sin" width="500" height="350"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full"></iframe>
        </div>
      </div>
    </Section>
  );
}
