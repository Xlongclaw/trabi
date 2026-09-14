
"use client";

import { VStack } from "@/components/layout";
import { useScroll } from "@/hooks/useScroll";
import { ReactNode, useEffect, useState } from "react";

const HERO_SCROLL_OFFSET = 0;

function getScrollAfter() {
  if (typeof window === "undefined") return 190;

  if (window.matchMedia("(min-width: 1280px)").matches) {
    return 190;
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 190;
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    return 170;
  }

  if (window.matchMedia("(min-width: 640px)").matches) {
    return 80;
  }

  return 0;
}

export function ScrollingContainer({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const { scrollY } = useScroll();
  const [scrollAfter, setScrollAfter] = useState(190);

  useEffect(() => {
    const updateScrollAfter = () => {
      setScrollAfter(getScrollAfter());
    };

    updateScrollAfter();

    window.addEventListener("resize", updateScrollAfter);

    return () => {
      window.removeEventListener("resize", updateScrollAfter);
    };
  }, []);

  const contentOffset =
    HERO_SCROLL_OFFSET - scrollY + scrollAfter;

  return (
    <VStack
      justify="between"
      align="center"
      spacing="xl"
      className="absolute inset-x-0 top-0 z-40 h-[150%] sm:h-[133%] md:h-[116%]"
      style={{
        transform: `translateY(${
          scrollY > scrollAfter ? contentOffset : 0
        }px)`,
      }}
    >
      {children}
    </VStack>
  );
}
