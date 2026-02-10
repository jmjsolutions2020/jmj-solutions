import Link from "next/link";
import { Gift } from "lucide-react";
import type { NavbarLogo as LogoData } from "@/data/navbar.types";

interface LogoProps {
  data: LogoData;
}

export function Logo({ data }: LogoProps) {
  return (
    <Link
      href={data.href}
      aria-label={data.ariaLabel}
      className="flex items-center gap-2 font-bold uppercase tracking-tight text-stone-900 focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative z-30"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
        <Gift className="h-4 w-4" strokeWidth={2} />
      </span>
      {data.text}
    </Link>
  );
}
