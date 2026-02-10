import Link from "next/link";
import type { NavbarCTA } from "@/data/navbar.types";

interface NavCTAButtonProps {
  data: NavbarCTA;
  /** Full width on mobile menu */
  fullWidth?: boolean;
  onClick?: () => void;
}

export function NavCTAButton({
  data,
  fullWidth = false,
  onClick,
}: NavCTAButtonProps) {
  return (
    <Link
      href={data.href}
      aria-label={data.ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${fullWidth ? "w-full" : ""}`}
    >
      {data.label}
    </Link>
  );
}
