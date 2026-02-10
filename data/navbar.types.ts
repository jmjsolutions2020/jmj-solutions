export interface NavbarLogo {
  text: string;
  href: string;
  ariaLabel: string;
}

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarCTA {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavbarData {
  logo: NavbarLogo;
  links: NavbarLink[];
  cta: NavbarCTA;
}
