import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const variantStyles = {
  default:
    "bg-stone-100 text-stone-700 border-stone-200",
  primary:
    "bg-primary-muted text-primary border-primary/20",
  secondary:
    "bg-secondary-muted text-teal-700 border-teal-200",
};

export function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
