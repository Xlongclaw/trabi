'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Typography } from '@/components/ui';
import { siteConfig } from '@/config/site';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-10 items-center justify-center rounded-xl border border-theme-border text-theme-dark transition-colors hover:bg-gray-50"
      >
        <span className="sr-only">Menu</span>

        <div className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-0.5 w-full bg-current transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />

          <span
            className={`h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
          />

          <span
            className={`h-0.5 w-full bg-current transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-theme-border bg-theme-white pt-3 shadow-lg flex flex-col gap-6 items-start rounded-b-3xl overflow-hidden">
          <nav className="flex flex-col gap-1 flex-1 w-full">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl py-3 px-8 text-sm font-medium text-theme-dark flex justify-between items-center"
              >
                <Typography variant="body-sm">{item.label}</Typography>
                <ArrowRight />
              </Link>
            ))}

            <div className=" bg-theme-lime grid grid-cols-2 p-4 rounded-t-3xl gap-3 w-full mt-4">
              <Link
                href={siteConfig.links.register}
                className="rounded-full bg-black px-4 py-3 text-center text-sm font-medium text-theme-white"
              >
                <Typography variant="body-sm">Get started</Typography>
              </Link>
              <Link
                href={siteConfig.links.register}
                className="rounded-full bg-black px-4 py-3 text-center text-sm font-medium text-theme-white"
              >
                <Typography variant="body-sm">Login</Typography>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
