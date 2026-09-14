
import { useEffect, useState } from "react";

interface UseScrollOptions {
  /**
   * Start tracking after this scroll position.
   */
  offset?: number;

  /**
   * Maximum value for progress.
   */
  maxScroll?: number;
}

interface UseScrollReturn {
  scrollY: number;
  scrollX: number;

  /**
   * "up" | "down" | null
   */
  direction: "up" | "down" | null;

  /**
   * Progress from 0 to 1.
   */
  progress: number;

  /**
   * Whether the page has been scrolled past offset.
   */
  isScrolled: boolean;
}

export function useScroll(
  options: UseScrollOptions = {},
): UseScrollReturn {
  const {
    offset = 0,
    maxScroll = 1000,
  } = options;

  const [scroll, setScroll] = useState<UseScrollReturn>({
    scrollY: 0,
    scrollX: 0,
    direction: null,
    progress: 0,
    isScrolled: false,
  });

  useEffect(() => {
    let ticking = false;
    let previousScrollY = window.scrollY;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const direction =
        scrollY > previousScrollY
          ? "down"
          : scrollY < previousScrollY
            ? "up"
            : null;

      const progress = Math.min(
        Math.max(scrollY / maxScroll, 0),
        1,
      );

      setScroll({
        scrollY,
        scrollX,
        direction,
        progress,
        isScrolled: scrollY > offset,
      });

      previousScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(updateScroll);
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, maxScroll]);

  return scroll;
}
