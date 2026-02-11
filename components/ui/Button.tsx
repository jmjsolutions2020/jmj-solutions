import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  // Primary: large pill, deep red, soft red glow shadow. Hover moves up slightly and increases shadow.
  primary:
    "bg-primary text-white shadow-[0_26px_50px_rgba(214,11,35,0.12)] hover:shadow-[0_36px_70px_rgba(214,11,35,0.18)] hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-red-200 focus-visible:ring-offset-2",
  secondary:
    "bg-secondary text-white shadow-sm hover:bg-teal-400 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`relative inline-flex items-center justify-center rounded-full px-5 py-4 text-sm font-semibold transition-transform duration-200 will-change-transform disabled:opacity-50 focus-visible:outline-none ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
