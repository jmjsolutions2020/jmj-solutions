import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
  ariaLabel: string;
  ariaExpanded: boolean;
  ariaControls: string;
}

export function MenuToggle({
  open,
  onToggle,
  ariaLabel,
  ariaExpanded,
  ariaControls,
}: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {open ? (
        <X className="h-5 w-5" strokeWidth={2} />
      ) : (
        <Menu className="h-5 w-5" strokeWidth={2} />
      )}
    </button>
  );
}
