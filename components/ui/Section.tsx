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
}

export function Section({
  children,
  className = "",
  id,
  title,
  subtitle,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || subtitle) && (
          <header className="mb-8 md:mb-10 text-center">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl mx-auto text-stone-600 text-sm md:text-base">
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
