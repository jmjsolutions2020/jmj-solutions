import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-shadow ${hover ? "hover:shadow-md" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
