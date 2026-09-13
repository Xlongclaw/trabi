import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/layout/container";
import { Button, Typography } from "@/components/ui";

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

export function Navbar({
  logo,
  navigation,
  login,
  cta,
  showLogin = true,
  showCta = true,
  showMobileNav = true,
  className,
}: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-50 border-b border-theme-border bg-theme-white backdrop-blur-x ${
        className ?? ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Navigation */}
          <div className="flex items-center gap-10">
            {logo}

            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-theme-muted transition-colors hover:text-theme-dark"
                >
                  <Typography variant="body-sm">{item.label}</Typography>
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {showLogin && login && (
              <Link
                href={login.href}
                className="hidden text-sm font-medium text-theme-muted transition-colors hover:text-theme-dark sm:inline-flex"
              >
                <Typography variant="body-sm" className="font-bold">
                  {login.label}
                </Typography>
              </Link>
            )}

            {showCta && cta && (
              <Button
                href={cta.href}
                className="hidden h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-theme-white transition-transform hover:-translate-y-0.5 hover:bg-theme-dark sm:inline-flex"
              >
                <Typography
                  variant="body-sm"
                  className="flex items-center font-bold text-theme-white"
                >
                  {cta.icon}
                  {cta.label}
                </Typography>
              </Button>
            )}

            {showMobileNav && (
              <MobileNav
                navigation={navigation}
                login={login}
                cta={cta}
                showLogin={showLogin}
                showCta={showCta}
              />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
