import { CalendarDays, MapPin, PlaneTakeoff, Search, Users } from 'lucide-react';
import React from 'react';
import { AutoImageSlider } from '../auto-image-slider';
import { EntryAnimation } from '../entry-animation';
import SearchBox from './components/search-box';
import { Container, Section } from '@/components/layout';

const heroImages = [
  'https://i.postimg.cc/fLCzdttn/tt1.jpg',
  // 'https://i.postimg.cc/s23WQT9D/tt2.jpg',
  'https://i.postimg.cc/9FtZm3yW/tt4.jpg',
  // 'https://i.postimg.cc/vHQDv46s/tt7.jpg',
];

export default function HomeHero() {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="relative mx-auto max-w-[1400px]">
          {/* Decorative plane */}
          <PlaneTakeoff
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-8
              top-0
              size-28
              fill-theme-lime/10
              stroke-0
              sm:-right-4
              sm:size-48
              lg:right-0
              lg:size-72
              xl:size-96
            "
          />

          {/* HERO CONTENT */}
          <div className="relative z-10 max-w-[900px]">
            <h1
              className="
                max-w-[900px]
                text-[46px]
                font-semibold
                leading-[0.94]
                tracking-[-0.055em]
                sm:text-7xl
                lg:text-[88px]
              "
            >
              Go somewhere
              <br />
              <span className="relative inline-block">
                worth remembering.
                {/* Underline */}
                <svg
                  className="
                    absolute
                    -bottom-2
                    right-[-25px]
                    w-20
                    text-[#b8f45a]
                    sm:-bottom-3
                    sm:right-[-45px]
                    sm:w-32
                  "
                  viewBox="0 0 130 25"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 17C34 2 83 2 126 12"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="
              mt-6
              max-w-[620px]
              text-sm
              leading-6
              text-black/55
              sm:mt-7
              sm:text-lg
              sm:leading-7
              "
            >
              Discover unforgettable places, join incredible trips, and meet people who want to
              experience the world just like you do.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div
            className="
              relative
              mt-9
              h-[480px]
              overflow-hidden
              rounded-[26px]
              sm:mt-12
              sm:h-[520px]
              sm:rounded-[30px]
              lg:h-[570px]
              lg:rounded-[34px]
              "
          >
            {/* AUTO IMAGE SLIDER */}
            <AutoImageSlider
              images={heroImages}
              interval={5000}
              transitionDuration={1500}
              alt="Beautiful travel destination"
              showIndicators={false}
            />

            {/* Dark gradient */}
            <div
              className="
              absolute
              inset-0
              z-20
              bg-gradient-to-t
              from-black/65
              via-black/10
              to-transparent
              "
            />

            {/* SEARCH BOX */}
            <SearchBox />
            {/* BOTTOM CONTENT */}
            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                z-30
                sm:bottom-7
                sm:left-7
                sm:right-auto
                "
            >
              <div className="flex flex-col items-start text-white">
                <p
                  className="
                    text-2xl
                    font-bold
                    tracking-[-0.03em]
                    sm:text-3xl
                  "
                >
                  Spiti Valley{' '}
                  <span
                    className="
                      text-base
                      font-medium
                      text-white/75
                      sm:text-xl
                      "
                  >
                    (90+ trips)
                  </span>
                </p>

                <p
                  className="
                    mt-1.5
                    max-w-[340px]
                    text-sm
                    leading-5
                    text-white/75
                    sm:mt-2
                    sm:text-base
                    sm:leading-6
                  "
                >
                  Join expertly hosted adventures
                  <br className="hidden sm:block" />
                  created by experienced travelers.
                </p>
              </div>
            </div>

            {/* EXPLORE LABEL */}
            <div
              className="
                absolute
                bottom-6
                right-6
                z-30
                hidden
                items-center
                gap-2
                rounded-full
                bg-white/95
                px-4
                py-2.5
                text-xs
                font-semibold
                backdrop-blur
                sm:flex
                lg:bottom-7
                lg:right-7
              "
            >
              <span className="relative flex size-2">
                <span
                  className="
                    absolute
                    inline-flex
                    size-full
                    animate-ping
                    rounded-full
                    bg-[#7dbd25]
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    size-2
                    rounded-full
                    bg-[#7dbd25]
                  "
                />
              </span>
              Explore the world
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// <div className="absolute top-35 left-5 max-w-[310px] rounded-[22px] p-4  sm:bottom-7 sm:left-7">
//     <div className="flex items-center gap-3">
//       <Button>Join A Trip</Button>
//       <Button variant="secondary">Host A Trip</Button>
//     </div>
//   </div>

// src="https://i.postimg.cc/vHQDv46s/tt7.jpg"
// src="https://i.postimg.cc/JzYy0R07/tt6.jpg"
// src="https://i.postimg.cc/CLYn6vX2/tt5.jpg"
// src="https://i.postimg.cc/9FtZm3yW/tt4.jpg"
// src="https://i.postimg.cc/WbRwp6KQ/tt3.jpg"
// src="https://i.postimg.cc/s23WQT9D/tt2.jpg"
// src="https://i.postimg.cc/DZj1K1GC/tt1.jpg"
