'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface AutoImageSliderProps {
  images: string[] | StaticImageData[];
  interval?: number;
  transitionDuration?: number;
  alt?: string;
  className?: string;
  showIndicators?: boolean;
}

export function AutoImageSlider({
  images,
  interval = 5000,
  transitionDuration = 1500,
  alt = 'Travel destination',
  className = '',
  showIndicators = false,
}: AutoImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <Image
          key={`${image}-${index}`}
          src={image}
          alt={alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`
            object-cover
            transition-opacity
            ease-in-out
            ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDuration: `${transitionDuration}ms`,
          }}
        />
      ))}

      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`
                h-1.5 rounded-full transition-all duration-500
                ${activeIndex === index ? 'w-7 bg-white' : 'w-1.5 bg-white/50'}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
