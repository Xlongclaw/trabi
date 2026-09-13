import { cn } from '@/utils';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn('py-20 sm:py-20 lg:py-20', className)} {...props}>
      {children}
    </section>
  );
}
