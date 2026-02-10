"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavbarLink } from "@/data/navbar.types";

interface NavLinksProps {
  links: NavbarLink[];
  /** Vertical layout for mobile menu */
  vertical?: boolean;
  onLinkClick?: () => void;
}

function useHash() {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    queueMicrotask(syncHash);
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  const setHashFromHref = (href: string) => {
    const h = href.includes("#") ? "#" + (href.split("#")[1] || "") : "";
    setHash(h);
  };
  return [hash, setHashFromHref] as const;
}

export function NavLinks({
  links,
  vertical = false,
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();
  const [hash, setHashFromHref] = useHash();

  const isActive = (href: string) => {
    const currentHash = hash.replace("#", "");
    if (href === "/" || href === "/#") return pathname === "/" && !currentHash;
    const targetHash = href.includes("#") ? href.split("#")[1] || "" : "";
    return pathname === "/" && targetHash === currentHash;
  };

  if (vertical) {
    return (
      <ul className="flex flex-col gap-4 py-4">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="block py-2 text-center font-medium uppercase tracking-wide text-stone-900 transition-colors hover:text-primary focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => {
                setHashFromHref(href);
                onLinkClick?.();
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-2 lg:gap-4" role="list">
      {links.map(({ label, href }) => {
        const active = isActive(href);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={() => setHashFromHref(href)}
              className={`inline-block rounded-full px-3 py-2 font-medium uppercase tracking-wide transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-stone-900 text-sm ${
                active
                  ? "bg-white shadow-sm"
                  : "hover:-translate-y-1"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
