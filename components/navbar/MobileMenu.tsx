import { NavLinks } from "./NavLinks";
import { NavCTAButton } from "./NavCTAButton";
import type { NavbarLink } from "@/data/navbar.types";
import type { NavbarCTA } from "@/data/navbar.types";

interface MobileMenuProps {
  id: string;
  open: boolean;
  links: NavbarLink[];
  cta: NavbarCTA;
  onClose: () => void;
}

export function MobileMenu({
  id,
  open,
  links,
  cta,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-label="Mobile navigation"
      className="absolute left-0 right-0 top-1/2 z-20 flex min-h-[calc(100dvh-6rem)] flex-col overflow-y-auto rounded-b-4xl border border-t-0 border-stone-200 bg-color-surface shadow-lg lg:hidden bg-stone-100"
    >
      <div className="flex flex-1 flex-col px-6 py-6 pt-16 items-center">
        <NavLinks links={links} vertical onLinkClick={onClose} />
        <div className="mt-6 pt-6 border-t border-stone-200">
          <NavCTAButton data={cta} fullWidth onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
