import { ArrowRight, MapPin } from 'lucide-react';
import React from 'react';
import { Container, Section } from '@/components/layout';

const destinations = [
  {
    name: 'Bali',
    country: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
  },
];

export default function HomeDestinations() {
  return (
    <Section id="destinations" className="overflow-hidden  py-16  sm:py-20  lg:py-28">
      <Container>
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 sm:text-xs">
                Find your place
              </p>

              <h2
                className="
                  text-[34px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.055em]
                  text-theme-dark
                  sm:text-5xl
                  sm:leading-[1.1]
                  md:text-6xl
                  lg:text-[40px]
                "
              >
                Checkout destinations popular
                <br className="hidden sm:block" /> among{' '}
                <span className="ml-1 italic text-lime-600 sm:ml-2">travellers</span>
              </h2>
            </div>

            {/* View all */}
            <button
              type="button"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-2
                text-sm
                font-semibold
                text-theme-dark
                transition-colors
                hover:text-lime-600
              "
            >
              <span>View all destinations</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* Destination Cards */}
          <div
            className="
              mt-10
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-4
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:mt-12
              sm:gap-5
              lg:mt-10
              lg:grid
              lg:grid-cols-4
              lg:overflow-visible
              lg:pb-0
            "
          >
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="
                  group
                  relative
                  h-[400px]
                  min-w-[82vw]
                  snap-start
                  overflow-hidden
                  rounded-[24px]
                  bg-theme-dark
                  sm:h-[440px]
                  sm:min-w-[45vw]
                  sm:rounded-[28px]
                  lg:h-[390px]
                  lg:min-w-0
                  lg:rounded-[28px]
                "
              >
                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p
                    className="
                      text-[26px]
                      font-semibold
                      leading-none
                      tracking-[-0.035em]
                      text-white
                      sm:text-3xl
                    "
                  >
                    {destination.name}
                  </p>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      text-white/70
                    "
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>{destination.country}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    opacity-100
                    transition-all
                    duration-300
                    sm:right-5
                    sm:top-5
                    lg:opacity-0
                    lg:group-hover:opacity-100
                  "
                >
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/35 lg:hidden">
            <span>Swipe to explore</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
