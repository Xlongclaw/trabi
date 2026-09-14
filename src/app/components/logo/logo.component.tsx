import { cn } from '@/utils';
import Link from 'next/link';
import React from 'react';

export function Logo({
  removeTextOnSmallScreens = false,
  onlyLogo = false,
  white = false,
  text = '',
}: {
  removeTextOnSmallScreens?: boolean;
  onlyLogo?: boolean;
  white?: boolean;
  text?: string;
}) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex size-5 items-center justify-center rounded-xl bg-theme-green-light text-sm font-bold text-[#b9ef69] overflow-hidden">
        <span className="scale-200 mb-2 text-xl pr-1.5 rotate-12">t</span>
      </span>

      <span
        className={cn('text-lg font-semibold tracking-tight', {
          'sm:block hidden': removeTextOnSmallScreens,
          hidden: onlyLogo,
          'text-white': white,
        })}
      >
        {text}
        <span className="animate-ping">.</span>
      </span>
    </Link>
  );
}
