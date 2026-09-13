import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Section } from '@/components/layout';
import { Container } from '@/components/layout/container';
import { Typography } from '@/components/ui';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo: ReactNode;
  description?: string;

  groups?: FooterGroup[];

  backToTop?: {
    label?: string;
    href?: string;
  };

  copyright?: ReactNode;
  bottomText?: ReactNode;

  className?: string;
}

export function Footer({
  logo,
  description,
  groups = [],
  backToTop,
  copyright,
  bottomText,
  className = '',
}: FooterProps) {
  return (
    <footer className={`border-t border-theme-border bg-theme-white ${className}`}>
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
            {/* Brand */}
            <div>
              {logo}

              {description && (
                <Typography
                  variant="body-sm"
                  className="mt-5 max-w-sm font-medium leading-6 text-theme-muted"
                >
                  {description}
                </Typography>
              )}

              {backToTop && (
                <Link
                  href={backToTop.href ?? '#'}
                  className="group mt-6 inline-flex items-center gap-1.5 text-theme-dark transition-colors hover:text-theme-green-light"
                >
                  <Typography variant="body-sm" className="font-semibold">
                    {backToTop.label ?? 'Back to top'}
                  </Typography>

                  <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>

            {/* Navigation */}
            {groups.length > 0 && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
                {groups.map((group) => (
                  <div key={group.title}>
                    <Typography
                      variant="h3"
                      className="text-xs! font-bold uppercase tracking-wider"
                    >
                      {group.title}
                    </Typography>

                    <ul className="mt-5 space-y-3">
                      {group.links.map((link) => (
                        <li key={`${link.label}-${link.href}`}>
                          <Link
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="text-theme-muted transition-colors hover:text-theme-green-light"
                          >
                            <Typography variant="body-sm" className="font-medium">
                              {link.label}
                            </Typography>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom */}
          {(copyright || bottomText) && (
            <div className="mt-14 flex flex-col gap-4 border-t border-theme-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              {copyright && (
                <Typography variant="caption" className="text-theme-muted">
                  {copyright}
                </Typography>
              )}

              {bottomText && (
                <Typography variant="caption" className="text-theme-muted">
                  {bottomText}
                </Typography>
              )}
            </div>
          )}
        </Container>
      </Section>
    </footer>
  );
}
