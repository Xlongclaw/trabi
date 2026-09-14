export interface NavbarNavItem {
  label: string;
  href: string;
}

export interface NavbarAction {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavbarProps {
  logo: React.ReactNode;

  navigation: NavbarNavItem[];

  login?: NavbarAction;

  cta?: NavbarAction;

  showLogin?: boolean;
  showCta?: boolean;
  showMobileNav?: boolean;

  className?: string;
}