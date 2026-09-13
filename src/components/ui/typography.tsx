import { cn } from '@/utils';
import type { ElementType, ReactNode } from 'react';

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-lg'
  | 'body-sm'
  | 'muted'
  | 'label'
  | 'caption'
  | 'eyebrow';

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  as?: ElementType;
  className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  display: 'text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.055em] leading-[0.95]',

  h1: 'text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] leading-[1.05]',

  h2: 'text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.045em] leading-[1.05]',

  h3: 'text-2xl sm:text-3xl font-semibold tracking-[-0.035em] leading-[1.1]',

  h4: 'text-lg sm:text-xl font-semibold tracking-[-0.025em] leading-[1.2]',

  'body-lg': 'sm:text-lg/8 text-lg/7 text-foreground/70',

  body: 'text-base leading-7 text-foreground/70',

  'body-sm': 'text-sm leading-6 text-foreground/65',

  muted: 'text-sm leading-6 text-muted',

  label: 'text-sm font-medium leading-5 text-foreground',

  caption: 'text-xs leading-5 text-foreground/55',

  eyebrow: 'text-xs font-semibold uppercase tracking-[0.14em] text-barket-green',
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  muted: 'p',
  label: 'span',
  caption: 'span',
  eyebrow: 'span',
};

export function Typography({ children, variant = 'body', as, className }: TypographyProps) {
  const Component = as ?? defaultElements[variant];

  return <Component className={cn(variantStyles[variant], className)}>{children}</Component>;
}
