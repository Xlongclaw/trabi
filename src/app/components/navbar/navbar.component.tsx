import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/layout/container";
import { Button, Typography } from "@/components/ui";
import { NavbarProps } from "./navbar.type";
import { BadgeCheck, Headset, Heart, MapPin, MessageCircle, Phone } from "lucide-react";

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
     <div className=" h-9 bg-theme-green text-theme-white block">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 text-[11px] font-medium sm:px-6 lg:px-8">
        {/* Contact */}
        <div className="flex h-full items-center gap-5">
          <a
            href="tel:+918299196300"
            className="group flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="size-3.5" strokeWidth={1.8} />
            <span>+91 82991 96300</span>
          </a>

          <span className="h-3.5 w-px sm:flex hidden bg-white/20" />

          <a
            href="mailto:support@travit.in"
            className="group sm:flex hidden items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <MessageCircle className="size-3.5" strokeWidth={1.8} />
            <span>support@trabi.in</span>
          </a>

          <span className="h-3.5 w-px sm:flex hidden bg-white/20" />

          <div className="lg:flex hidden items-center gap-1.5 text-white/90">
            <MapPin className="size-3.5" strokeWidth={1.8} />
            <span>Gurugram, Harayana, India</span>
          </div>
        </div>

        {/* Trust & Support */}
        <div className="flex h-full items-center gap-5">
          <div className="lg:flex hidden items-center gap-1.5">
            <BadgeCheck className="size-3.5" strokeWidth={1.8} />
            <span>Best Price Guarantee</span>
          </div>

          <span className="h-3.5 w-px sm:flex hidden bg-white/20" />

          <div className="sm:flex hidden items-center gap-1.5">
            <Headset className="size-3.5" strokeWidth={1.8} />
            <span>24/7 Live Concierge</span>
          </div>

          <span className="h-3.5 w-px sm:flex hidden bg-white/20" />

          <button
            type="button"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <MessageCircle className="size-3.5" strokeWidth={1.8} />
            <span>WhatsApp Live Chat</span>
          </button>
        </div>
      </div>
    </div>
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Navigation */}
          <div className="flex items-center gap-10">
            {logo}

            <nav className="hidden items-center gap-8 md:flex ">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-black/60 transition-colors hover:text-theme-dark"
                >
                  <Typography variant="body-sm">{item.label}</Typography>
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <Heart className="hover:fill-red-400 cursor-pointer text-black/60" size={18} strokeWidth={2.5}/>
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
