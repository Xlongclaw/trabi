'use client';

import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Typography } from '@/components/ui';
import type { NavbarAction, NavbarNavItem } from '../navbar.type';

interface MobileNavProps {
  navigation: NavbarNavItem[];

  login?: NavbarAction;
  cta?: NavbarAction;

  showLogin?: boolean;
  showCta?: boolean;
}

export function MobileNav({
  navigation,
  login,
  cta,
  showLogin = true,
  showCta = true,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  // Prevent page scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu when resizing to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="md:hidden">
      {/* Trigger */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="relative flex size-10 items-center justify-center rounded-xl border border-theme-border bg-theme-white text-theme-dark transition-all duration-200 hover:bg-theme-subtle focus:outline-none focus:ring-2 focus:ring-theme-dark/10"
      >
        <span className="sr-only">
          {open ? 'Close menu' : 'Open menu'}
        </span>

        {open ? (
          <X className="size-5" strokeWidth={1.8} />
        ) : (
          <div className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </div>
        )}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 top-26 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Menu */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-50 origin-top border-b border-theme-border bg-theme-white shadow-xl transition-all duration-300 ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-4 pb-4 pt-3 sm:px-6">
            {/* Navigation */}
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-theme-subtle ${
                    index !== navigation.length - 1
                      ? 'border-b border-theme-border/60'
                      : ''
                  }`}
                >
                  <Typography
                    variant="body-sm"
                    className="font-semibold text-theme-dark"
                  >
                    {item.label}
                  </Typography>

                  <ArrowRight
                    className="size-4 text-theme-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-theme-dark"
                    strokeWidth={1.8}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            {(showLogin && login) || (showCta && cta) ? (
              <div className="mt-4 rounded-2xl bg-theme-lime p-3">
                <div className="grid grid-cols-2 gap-2.5">
                  {showLogin && login && (
                    <Link
                      href={login.href}
                      onClick={closeMenu}
                      className="flex min-h-11 items-center justify-center rounded-full border border-theme-dark/10 bg-theme-white px-4 transition-transform hover:-translate-y-0.5"
                    >
                      <Typography
                        variant="body-sm"
                        className="font-bold text-theme-dark"
                      >
                        {login.label}
                      </Typography>
                    </Link>
                  )}

                  {showCta && cta && (
                    <Link
                      href={cta.href}
                      onClick={closeMenu}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-theme-dark px-4 transition-transform hover:-translate-y-0.5"
                    >
                      <Typography
                        variant="body-sm"
                        className="flex items-center gap-1.5 font-bold text-theme-white"
                      >
                        {cta.icon}
                        {cta.label}
                      </Typography>
                    </Link>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}