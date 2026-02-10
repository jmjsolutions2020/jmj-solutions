"use client";

import { useState } from "react";
import navbarData from "@/data/navbar.json";
import type { NavbarData } from "@/data/navbar.types";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavCTAButton } from "./NavCTAButton";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";

const data = navbarData as NavbarData;
const MOBILE_MENU_ID = "mobile-nav-menu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full px-3 py-3 md:px-6">
      <div className=" mx-auto w-full max-w-[1232px] px-4 md:px-0">
        <div
          className="relative flex w-full items-center justify-between gap-4 rounded-full bg-stone-100 px-5 py-4 shadow-sm lg:justify-start md:px-6 md:py-3"
        >
          <Logo data={data.logo} />

          {/* Desktop: centered nav */}
          <nav
            aria-label="Main navigation"
            className="hidden flex-1 justify-center lg:flex md:items-center"
          >
            <NavLinks links={data.links} />
          </nav>

          {/* Desktop: CTA | Mobile: menu toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <NavCTAButton data={data.cta} />
            </div>
            <div className="lg:hidden">
              <MenuToggle
                open={mobileOpen}
                onToggle={() => setMobileOpen((o) => !o)}
                ariaLabel={mobileOpen ? "Close menu" : "Open menu"}
                ariaExpanded={mobileOpen}
                ariaControls={MOBILE_MENU_ID}
              />
              <MobileMenu
                id={MOBILE_MENU_ID}
                open={mobileOpen}
                links={data.links}
                cta={data.cta}
                onClose={() => setMobileOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
