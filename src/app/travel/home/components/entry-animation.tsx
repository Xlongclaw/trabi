'use client';

import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

interface EntryAnimationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  disabled?: boolean;
  animateOnPageLoad?: boolean;
}

export function EntryAnimation({
  children,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
  disabled = false,
  animateOnPageLoad = false,
  className = '',
  style,
  ...props
}: EntryAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(disabled || animateOnPageLoad);

  useEffect(() => {
    if (disabled || animateOnPageLoad) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, animateOnPageLoad, once, threshold]);

  return (
    <div
      ref={ref}
      className={`
        transition-opacity
        ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
