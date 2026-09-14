import { ShieldCheck, ArrowRight } from 'lucide-react';
import React from 'react';
import { Container, Section } from '@/components/layout';

export default function WhyUs() {
  const benefits = [
    'Curated trips and experiences',
    'Connect with like-minded travelers',
    'Trusted hosts and local businesses',
    'Secure and simple booking',
  ];

  const travelerImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  ];

  return (
    <Section id="about" className="overflow-hidden pt-6! sm:pt-10!">
      <Container>
        <div
          className="
            mx-auto
            max-w-[1400px]
            overflow-hidden
            rounded-[24px]
            bg-[#e8f9c7]
            sm:rounded-[30px]
            lg:rounded-[36px]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div
              className="
                flex
                flex-col
                px-5
                py-10
                sm:px-8
                sm:py-12
                md:px-10
                md:py-14
                lg:px-10
                lg:py-12
                xl:px-12
              "
            >
              <div>
                <p
                  className="
                    mb-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/40
                    sm:text-xs
                  "
                >
                  WHY US
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
                    xl:text-[44px]
                    font-oswald
                  "
                >
                  <span className="italic text-theme-green-light">Travel is better</span>{' '}
                  <br className="hidden sm:block" />
                  when you don't have to <br className="hidden sm:block" />
                  do it alone.
                </h2>
              </div>

              <p
                className="
                  mt-5
                  max-w-[520px]
                  text-sm
                  leading-6
                  text-black/55
                  sm:mt-6
                  sm:text-base
                  sm:leading-7
                "
              >
                Bracket brings travelers, local hosts and unforgettable experiences together. Find
                your people, discover new places, and create stories you'll talk about for years.
              </p>

              {/* Benefits */}
              <div className="mt-7 space-y-3.5 sm:mt-9 sm:space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        sm:h-8
                        sm:w-8
                      "
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-[#b8f45a] sm:h-4 sm:w-4" />
                    </div>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-theme-dark
                        sm:text-sm
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className="
                  group
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#111111]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                  sm:mt-10
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                <span>Start exploring</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#b8f45a]
                    text-black
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </button>
            </div>

            {/* Image */}
            <div
              className="
                relative
                min-h-[360px]
                sm:min-h-[430px]
                md:min-h-[500px]
                lg:min-h-[620px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
                alt="Travelers exploring the mountains"
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Travelers card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  rounded-[18px]
                  bg-white
                  p-4
                  shadow-xl
                  sm:bottom-6
                  sm:left-6
                  sm:right-auto
                  sm:rounded-[22px]
                  sm:p-5
                "
              >
                <div className="flex items-center gap-3">
                  {/* Avatars */}
                  <div className="flex shrink-0 -space-x-2">
                    {travelerImages.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt=""
                        loading="lazy"
                        className="
                          h-8
                          w-8
                          rounded-full
                          border-2
                          border-white
                          object-cover
                          sm:h-9
                          sm:w-9
                        "
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-theme-dark
                        sm:text-sm
                      "
                    >
                      50,000+ travelers
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        text-black/45
                        sm:text-xs
                      "
                    >
                      are already exploring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
