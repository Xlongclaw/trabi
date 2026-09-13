import { cn } from '@/utils';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

interface FinalCTAProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;

  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };

  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };

  id?: string;
  className?: string;
  titleSize?: 'md' | 'lg';
}

export function FinalCTA({
  eyebrow = 'THE LOCAL MARKETPLACE',
  title,
  description,
  primaryAction,
  secondaryAction,
  id,
  className,
  titleSize = 'lg',
}: FinalCTAProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-theme-lime text-[#071006] ${className ?? ''}`}
    >
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border-[70px] border-black/5" />

      <div className="absolute -bottom-48 -left-20 h-[450px] w-[450px] rounded-full border-[70px] border-black/5" />

      <div className="relative mx-auto max-w-[1100px] px-6 py-24 text-center lg:py-16">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="mx-auto mb-7 flex w-fit items-center gap-3">
            <span className="h-px w-7 bg-[#071006]" />

            <Typography variant="eyebrow" className="text-[#071006] opacity-60">
              {eyebrow}
            </Typography>

            <span className="h-px w-7 bg-[#071006]" />
          </div>
        )}

        {/* Title */}
        {titleSize == 'lg' ? (
          <Typography
            variant="display"
            as="h2"
            className={cn('mx-auto max-w-4xl uppercase text-[#071006]')}
          >
            {title}
          </Typography>
        ) : (
          <Typography
            variant="h2"
            as="h2"
            className={cn('mx-auto max-w-4xl uppercase text-[#071006]')}
          >
            {title}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography
            variant="body"
            className="mx-auto mt-8 max-w-[520px] text-[#071006] opacity-60"
          >
            {description}
          </Typography>
        )}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {primaryAction && (
              <Button
                href={primaryAction.href}

                className="flex items-center justify-center gap-3 rounded-full bg-[#071006] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#172514]"
              >
                {primaryAction.label}
                <ArrowRight size={16} />
              </Button>
            )}

            {secondaryAction && (
              <Button
                href={secondaryAction.href}

                variant="outline"
                className="rounded-full border-black/15 px-7 py-4 text-sm font-semibold text-[#071006] transition hover:bg-black/5"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
