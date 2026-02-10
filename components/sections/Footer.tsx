import { Gift } from "lucide-react";

const LINKS = [
  { label: "Categories", href: "#categories" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "Corporate", href: "#corporate" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Gift className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="font-semibold text-stone-900">JMJ Solutions</span>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-stone-600 hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-500">
            © {year} JMJ Solutions. All rights reserved. Gurugram, India.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
