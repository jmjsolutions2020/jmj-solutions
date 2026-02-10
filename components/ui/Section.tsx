import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  /** Optional id for anchor links */
  id?: string;
  /** Optional heading for the section (renders as h2) */
  title?: string;
  /** Optional short subheading */
  subtitle?: string;
  /* Optional section type */
  type?: "default" | "primary";
}

export function Section({
  children,
  className = "",
  id,
  title,
  subtitle,
  type = "default",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${className}`}
      {...props}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 rounded-4xl ${type=="primary" ? "bg-primary py-10" : ""}`}>
        {(title || subtitle) && (
          <header className="mb-8 md:mb-10 text-center">
            {title && (
              <h2 className={`text-3xl font-bold tracking-tight md:text-5xl ${type=="primary" ? "text-white" : "text-stone-900"}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-2.5 md:mt-4 max-w-2xl mx-auto text-sm md:text-base ${type=="primary" ? "text-gray-200" : "text-stone-600"}`}>
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
