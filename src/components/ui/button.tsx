import { cn } from '@/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;

  href?: string;

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  className?: string;
}

export function Button({ children, href, variant = 'primary', className }: ButtonProps) {
  const classes = cn(
    'inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200',

    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',

    // Primary
    variant === 'primary' && 'bg-black text-white! hover:-translate-y-0.5 hover:bg-gray-800',

    // Secondary
    variant === 'secondary' &&
      'border border-gray-200 bg-white text-gray-900 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50',

    // Outline
    variant === 'outline' &&
      'border border-black/15 bg-transparent text-gray-950 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black/5',

    // Ghost
    variant === 'ghost' && 'text-gray-700 hover:bg-gray-100',

    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
