import { ArrowUpRight, Camera, Compass, Users } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { Typography } from '@/components/ui';

export interface CommunityStat {
  value: string;
  label: string;
}

export interface CommunityInterest {
  label: string;
}

export interface CommunityImage {
  src: string;
  alt: string;
}

export interface TravelCommunitySectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  stats?: CommunityStat[];
  interests?: CommunityInterest[];
  images?: CommunityImage[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultStats: CommunityStat[] = [
  {
    value: '4,200+',
    label: 'Travellers',
  },
  {
    value: '380+',
    label: 'Trips',
  },
  {
    value: '120+',
    label: 'Hosts',
  },
  {
    value: '4.8★',
    label: 'Avg Rating',
  },
];

const defaultInterests: CommunityInterest[] = [
  { label: 'Trekking' },
  { label: 'Backpacking' },
  { label: 'Road Trips' },
  { label: 'Photography' },
  { label: 'Beaches' },
  { label: 'Food & Culture' },
  { label: 'Camping' },
  { label: 'International' },
  { label: 'Heritage' },
  { label: 'Adventure Sports' },
];

const defaultImages: CommunityImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1620398762817-ff3885718863?w=900&q=85&fit=crop',
    alt: 'Travellers exploring a mountain destination',
  },
  {
    src: 'https://images.unsplash.com/photo-1627894482516-3b0809d0ebeb?w=900&q=85&fit=crop',
    alt: 'Beautiful mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1651319484670-aaed6d6726cb?w=900&q=85&fit=crop',
    alt: 'Travellers enjoying an outdoor adventure',
  },
];

export function TravelCommunitySection({
  eyebrow = 'THE COMMUNITY',
  title,
  description = 'Join a community of travellers, hosts, and explorers who believe the best trips begin with the right people.',
  stats = defaultStats,
  interests = defaultInterests,
  images = defaultImages,
  ctaLabel = 'JOIN THE COMMUNITY',
  ctaHref = '/signup',
}: TravelCommunitySectionProps) {
  return (
    <section
      className="
        mt-12
        overflow-hidden
        bg-theme-dark
        py-14
        sm:mt-16
        sm:py-20
        lg:mt-20
        lg:py-24
      "
    >
      <Container>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-start
            lg:gap-16
            xl:gap-20
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-2 sm:mb-7">
              <Typography
                variant="body-sm"
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                  sm:text-xs
                "
              >
                {eyebrow}
              </Typography>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-3xl
                text-[38px]
                font-semibold
                leading-[0.96]
                tracking-[-0.055em]
                text-theme-white/96
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                xl:text-[78px]
              "
            >
              {title ?? (
                <>
                  The People Are The <span className="italic text-theme-lime">Journey.</span>
                </>
              )}
            </h2>

            {/* Description */}
            <Typography
              variant="body-lg"
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/70
                sm:mt-7
                sm:text-base
                sm:leading-7
                lg:text-lg
              "
            >
              {description}
            </Typography>

            {/* CTA */}
            <div className="mt-7 sm:mt-8">
              <Link
                href={ctaHref}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  bg-theme-white
                  px-4
                  py-2.5
                  transition-transform
                  duration-200
                  hover:-translate-y-0.5
                  sm:gap-3
                  sm:px-5
                  sm:py-3.5
                "
              >
                <Typography
                  variant="body-sm"
                  className="
                    text-[10px]
                    font-bold
                    tracking-wide
                    text-theme-dark
                    sm:text-xs
                  "
                >
                  {ctaLabel}
                </Typography>

                <span
                  className="
                    flex
                    size-7
                    items-center
                    justify-center
                    rounded-full
                    bg-theme-lime
                    text-theme-dark
                    transition-transform
                    duration-200
                    group-hover:rotate-45
                    sm:size-8
                  "
                >
                  <ArrowUpRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="
                mt-10
                grid
                grid-cols-2
                border-y
                border-white/[0.08]
                sm:mt-12
                sm:grid-cols-4
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className={`
                    px-0
                    py-5
                    sm:px-4
                    sm:py-6
                    lg:px-5
                    lg:py-7
                    ${index % 2 !== 0 ? 'border-l border-white/[0.08]' : ''}
                    ${index >= 2 ? 'border-t border-white/[0.08] sm:border-t-0' : ''}
                    ${index > 0 ? 'sm:border-l' : ''}
                  `}
                >
                  <Typography
                    variant="h3"
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      sm:text-3xl
                    "
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    variant="body-sm"
                    className="
                      mt-1
                      text-[11px]
                      text-theme-muted
                      sm:text-xs
                    "
                  >
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLLAGE ================= */}
          <div
            className="
              relative
              min-h-[440px]
              sm:min-h-[560px]
              lg:min-h-[560px]
            "
          >
            {/* Decorative glow */}
            <div
              className="
                absolute
                right-0
                top-0
                h-32
                w-32
                rounded-full
                bg-theme-lime/25
                blur-3xl
                sm:h-40
                sm:w-40
              "
            />

            {/* ================= MOBILE / TABLET COLLAGE ================= */}
            <div
              className="
                relative
                h-[440px]
                sm:h-[560px]
                lg:hidden
              "
            >
              {/* Main image */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[290px]
                  w-[72%]
                  overflow-hidden
                  rounded-[24px]
                  sm:h-[360px]
                  sm:w-[68%]
                  sm:rounded-[30px]
                "
              >
                <img
                  src={images[0]?.src}
                  alt={images[0]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/95
                    px-3
                    py-2
                    backdrop-blur
                    sm:bottom-5
                    sm:left-5
                  "
                >
                  <Compass className="size-3.5 text-theme-green sm:size-4" />

                  <Typography
                    variant="body-sm"
                    className="
                      text-[10px]
                      font-semibold
                      text-theme-dark
                      sm:text-xs
                    "
                  >
                    Find your people
                  </Typography>
                </div>
              </div>

              {/* Top-right image */}
              <div
                className="
                  absolute
                  right-0
                  top-12
                  h-[190px]
                  w-[38%]
                  overflow-hidden
                  rounded-[22px]
                  border-4
                  border-theme-dark
                  shadow-xl
                  sm:top-16
                  sm:h-[250px]
                  sm:w-[38%]
                  sm:rounded-[26px]
                  sm:border-8
                "
              >
                <img
                  src={images[1]?.src}
                  alt={images[1]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Bottom image */}
              <div
                className="
                  absolute
                  bottom-0
                  right-[5%]
                  h-[210px]
                  w-[58%]
                  overflow-hidden
                  rounded-[24px]
                  border-4
                  border-theme-dark
                  shadow-xl
                  sm:h-[280px]
                  sm:w-[56%]
                  sm:rounded-[30px]
                  sm:border-8
                "
              >
                <img
                  src={images[2]?.src}
                  alt={images[2]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    backdrop-blur
                    sm:bottom-4
                    sm:left-4
                    sm:size-11
                  "
                >
                  <Camera className="size-4 text-theme-dark sm:size-5" />
                </div>
              </div>

              {/* Floating community card */}
              <div
                className="
                  absolute
                  bottom-[25%]
                  left-[2%]
                  z-10
                  rounded-xl
                  bg-theme-dark
                  px-3
                  py-3
                  shadow-2xl
                  sm:bottom-[22%]
                  sm:left-[4%]
                  sm:rounded-2xl
                  sm:px-5
                  sm:py-4
                "
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    {images.slice(0, 3).map((image) => (
                      <div
                        key={image.src}
                        className="
                          size-7
                          overflow-hidden
                          rounded-full
                          border-2
                          border-theme-dark
                          sm:size-9
                        "
                      >
                        <img
                          src={image.src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <Typography
                      variant="body-sm"
                      className="
                        text-[10px]
                        font-bold
                        text-theme-white
                        sm:text-xs
                      "
                    >
                      4,200+ travellers
                    </Typography>

                    <Typography
                      variant="body-sm"
                      className="
                        text-[9px]
                        text-white/60
                        sm:text-xs
                      "
                    >
                      already exploring
                    </Typography>
                  </div>

                  <Users
                    className="
                      ml-0.5
                      size-4
                      text-theme-lime
                      sm:ml-1
                      sm:size-5
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= DESKTOP COLLAGE ================= */}
            <div className="absolute inset-0 hidden lg:block">
              {/* Main image */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[390px]
                  w-[68%]
                  overflow-hidden
                  rounded-[30px]
                "
              >
                <img
                  src={images[0]?.src}
                  alt={images[0]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/95
                    px-3.5
                    py-2
                    backdrop-blur
                  "
                >
                  <Compass className="size-4 text-theme-green" />

                  <Typography variant="body-sm" className="font-semibold text-theme-dark">
                    Find your people
                  </Typography>
                </div>
              </div>

              {/* Top-right image */}
              <div
                className="
                  absolute
                  right-0
                  top-16
                  h-[280px]
                  w-[42%]
                  overflow-hidden
                  rounded-[26px]
                  border-8
                  border-theme-dark
                  shadow-xl
                "
              >
                <img
                  src={images[1]?.src}
                  alt={images[1]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Bottom image */}
              <div
                className="
                  absolute
                  bottom-0
                  right-[8%]
                  h-[310px]
                  w-[55%]
                  overflow-hidden
                  rounded-[30px]
                  border-8
                  border-theme-dark
                  shadow-xl
                "
              >
                <img
                  src={images[2]?.src}
                  alt={images[2]?.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    backdrop-blur
                  "
                >
                  <Camera className="size-5 text-theme-dark" />
                </div>
              </div>

              {/* Floating community card */}
              <div
                className="
                  absolute
                  bottom-[20%]
                  left-[5%]
                  z-10
                  rounded-2xl
                  bg-theme-dark
                  px-5
                  py-4
                  shadow-2xl
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {images.slice(0, 3).map((image) => (
                      <div
                        key={image.src}
                        className="
                          size-9
                          overflow-hidden
                          rounded-full
                          border-2
                          border-theme-dark
                        "
                      >
                        <img
                          src={image.src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <Typography variant="body-sm" className="font-bold text-theme-white">
                      4,200+ travellers
                    </Typography>

                    <Typography variant="body-sm" className="text-white/60">
                      already exploring
                    </Typography>
                  </div>

                  <Users className="ml-1 size-5 text-theme-lime" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
