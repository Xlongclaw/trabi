"use client";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  Children,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/utils";

interface CardCarouselProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => ReactNode;

  /**
   * Number of cards visible at different breakpoints.
   */
  desktopItems?: number;
  tabletItems?: number;
  mobileItems?: number;

  /**
   * Space between cards in pixels.
   */
  gap?: number;

  /**
   * Auto slide interval in milliseconds.
   */
  autoplay?: boolean;
  autoplayInterval?: number;

  /**
   * Pause autoplay when mouse enters carousel.
   */
  pauseOnHover?: boolean;

  /**
   * Show navigation arrows.
   */
  showArrows?: boolean;

  /**
   * Show pagination dots.
   */
  showDots?: boolean;

  className?: string;
  trackClassName?: string;
}

const DEFAULT_DESKTOP_ITEMS = 4;
const DEFAULT_TABLET_ITEMS = 2;
const DEFAULT_MOBILE_ITEMS = 1;

export function CardCarousel<T>({
  items,
  renderCard,

  desktopItems = DEFAULT_DESKTOP_ITEMS,
  tabletItems = DEFAULT_TABLET_ITEMS,
  mobileItems = DEFAULT_MOBILE_ITEMS,

  gap = 20,

  autoplay = true,
  autoplayInterval = 4500,
  pauseOnHover = true,

  showArrows = true,
  showDots = true,

  className,
  trackClassName,
}: CardCarouselProps<T>) {
  const [itemsPerView, setItemsPerView] = useState(
    mobileItems,
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /*
   * Keep enough clones at the beginning/end
   * to create a smooth infinite carousel.
   */
  const cloneCount = Math.min(
    Math.max(itemsPerView, 1),
    items.length,
  );

  const extendedItems = useMemo(() => {
    if (!items.length) return [];

    const before = items.slice(-cloneCount);
    const after = items.slice(0, cloneCount);

    return [...before, ...items, ...after];
  }, [items, cloneCount]);

  const startIndex = cloneCount;

  /*
   * Responsive cards per view.
   */
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setItemsPerView(desktopItems);
      } else if (width >= 640) {
        setItemsPerView(tabletItems);
      } else {
        setItemsPerView(mobileItems);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener(
        "resize",
        updateItemsPerView,
      );
    };
  }, [
    desktopItems,
    tabletItems,
    mobileItems,
  ]);

  /*
   * Reset position when responsive breakpoint changes.
   */
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  /*
   * Move carousel.
   */
  const moveTo = useCallback(
    (index: number) => {
      if (!items.length) return;

      setCurrentIndex(index);
    },
    [items.length],
  );

  const next = useCallback(() => {
    moveTo(currentIndex + 1);
  }, [currentIndex, moveTo]);

  const previous = useCallback(() => {
    moveTo(currentIndex - 1);
  }, [currentIndex, moveTo]);

  /*
   * Autoplay.
   */
  useEffect(() => {
    if (!autoplay || items.length <= itemsPerView) {
      return;
    }

    if (pauseOnHover && isHovered) {
      return;
    }

    if (isDragging) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => index + 1);
    }, autoplayInterval);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoplay,
    autoplayInterval,
    isHovered,
    isDragging,
    items.length,
    itemsPerView,
    pauseOnHover,
  ]);

  /*
   * Infinite-loop correction.
   *
   * When the carousel reaches the cloned items,
   * instantly reposition it to the real items.
   */
  useEffect(() => {
    const totalItems = items.length;

    if (!totalItems) return;

    if (currentIndex >= totalItems + cloneCount) {
      const timeout = window.setTimeout(() => {
        setCurrentIndex(currentIndex - totalItems);
      }, 550);

      return () => window.clearTimeout(timeout);
    }

    if (currentIndex < 0) {
      const timeout = window.setTimeout(() => {
        setCurrentIndex(currentIndex + totalItems);
      }, 550);

      return () => window.clearTimeout(timeout);
    }
  }, [
    currentIndex,
    items.length,
    cloneCount,
  ]);

  /*
   * Touch/swipe support.
   */
  const handleTouchStart = (
    event: React.TouchEvent,
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    setIsDragging(true);
  };

  const handleTouchMove = (
    event: React.TouchEvent,
  ) => {
    touchEndX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      setIsDragging(false);
      return;
    }

    const distance =
      touchStartX.current -
      touchEndX.current;

    const threshold = 50;

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        next();
      } else {
        previous();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    setIsDragging(false);
  };

  /*
   * Current real item index.
   */
  const realIndex =
    ((currentIndex - startIndex) % items.length +
      items.length) %
    items.length;

  /*
   * Number of positions/pages.
   */
  const pageCount = Math.max(
    1,
    items.length - itemsPerView + 1,
  );

  const currentPage = Math.min(
    realIndex,
    pageCount - 1,
  );

  if (!items.length) {
    return null;
  }

  const cardWidth =
    `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`;

  const translateX =
    `calc(-${currentIndex} * (${cardWidth} + ${gap}px))`;

  return (
    <div
      className={cn(
        "relative w-full",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        {/* Track */}
        <div
          className={cn(
            "flex",
            "will-change-transform",
            isDragging
              ? "transition-none"
              : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            trackClassName,
          )}
          style={{
            gap: `${gap}px`,
            transform: `translateX(${translateX})`,
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={`carousel-item-${index}`}
              className="shrink-0"
              style={{
                width: cardWidth,
              }}
            >
              {renderCard(
                item,
                index % items.length,
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {(showArrows || showDots) && (
        <div className="mt-7 flex items-center justify-between">
          {/* Dots */}
          {showDots ? (
            <div className="flex items-center gap-1.5">
              {Array.from({
                length: pageCount,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    currentPage === index
                      ? "true"
                      : undefined
                  }
                  onClick={() => {
                    moveTo(
                      startIndex + index,
                    );
                  }}
                  className={cn(
                    "h-1.5 rounded-full",
                    "transition-all duration-300",
                    currentPage === index
                      ? "w-7 bg-theme-dark"
                      : "w-1.5 bg-black/15 hover:bg-black/30",
                  )}
                />
              ))}
            </div>
          ) : (
            <div />
          )}

          {/* Arrows */}
          {showArrows && (
            <div className="flex items-center gap-2">
              <CarouselButton
                label="Previous slide"
                onClick={previous}
              >
                <ArrowLeft className="size-4" />
              </CarouselButton>

              <CarouselButton
                label="Next slide"
                onClick={next}
              >
                <ArrowRight className="size-4" />
              </CarouselButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Carousel Button                                                            */
/* -------------------------------------------------------------------------- */

interface CarouselButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
}

function CarouselButton({
  label,
  onClick,
  children,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center",
        "rounded-full border border-black/10",
        "bg-white text-theme-dark",
        "transition-all duration-300",
        "hover:border-theme-dark",
        "hover:bg-theme-dark hover:text-white",
        "active:scale-95",
      )}
    >
      {children}
    </button>
  );
}