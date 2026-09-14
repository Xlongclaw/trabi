import { ArrowUpRight, BadgeCheck, Star } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout';

export interface TravelAgency {
  name: string;
  initials: string;
  rating: number;
  reviews: number;
  trips: number;
  destinations: string;
  href: string;
  image: string;
  verified?: boolean;
}

export interface TravelAgenciesSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  agencies?: TravelAgency[];
  viewAllHref?: string;
  viewAllLabel?: string;
}

const defaultAgencies: TravelAgency[] = [
  {
    name: 'Himalayan Adventures',
    initials: 'HA',
    rating: 4.9,
    reviews: 1240,
    trips: 450,
    destinations: 'Kashmir · Ladakh · Himachal Pradesh',
    href: '/travel/travel-agencies/himalayan-adventures',
    image: 'https://images.unsplash.com/photo-1643368214091-6af1a029aee0?w=1200&q=85&fit=crop',
    verified: true,
  },
  {
    name: 'India Explorers',
    initials: 'IE',
    rating: 4.7,
    reviews: 890,
    trips: 320,
    destinations: 'Rajasthan · Goa · Kerala',
    href: '/travel/travel-agencies/himalayan-adventuresssss',
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=1200&q=85&fit=crop',
    verified: true,
  },
  {
    name: 'Northeast Trails',
    initials: 'NT',
    rating: 4.8,
    reviews: 420,
    trips: 180,
    destinations: 'Meghalaya · Assam · Sikkim',
    href: '/travel/travel-agencies/himalayan-adventuresss',
    image: 'https://images.unsplash.com/photo-1627894482516-3b0809d0ebeb?w=1200&q=85&fit=crop',
    verified: true,
  },
  {
    name: 'Rajasthan Heritage Tours',
    initials: 'RH',
    rating: 4.6,
    reviews: 670,
    trips: 240,
    destinations: 'Jaipur · Jodhpur · Udaipur',
    href: '/travel/travel-agencies/himalayan-adventuress',
    image: 'https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?w=1200&q=85&fit=crop',
    verified: true,
  },
];

export function TravelAgenciesSection({
  eyebrow = 'Professional Partners',
  title = (
    <>
      Travel Agencies trusted
      <br className="hidden sm:block" /> by the <span className="italic text-lime-600">people</span>
    </>
  ),
  description = 'Discover professionally organised tours from verified travel companies.',
  agencies = defaultAgencies,
  viewAllHref = '/travel/travel-agencies',
  viewAllLabel = 'View all agencies',
}: TravelAgenciesSectionProps) {
  return (
    <section className="overflow-hidden bg-theme-white pt-6 sm:pt-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
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
              {eyebrow}
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
                font-oswald
              "
            >
              {title}
            </h2>

            {/* Optional description */}
            {/* {description && (
              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-theme-muted
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                "
              >
                {description}
              </p>
            )} */}
          </div>

          {/* View all */}
          <Link
            href={viewAllHref}
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              px-4
              py-2.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-theme-dark
              transition-all
              duration-300
              hover:border-theme-dark
              hover:bg-theme-dark
              hover:text-theme-white
              sm:px-5
              sm:py-3
              sm:text-xs
            "
          >
            {viewAllLabel}

            <ArrowUpRight
              className="
                size-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                sm:size-4
              "
              strokeWidth={2.5}
            />
          </Link>
        </div>

        {/* Agency Cards */}
        <div
          className="
            mt-9
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
          {agencies.map((agency) => (
            <AgencyCard key={agency.href} agency={agency} />
          ))}
        </div>

        {/* Swipe hint */}
        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-black/35
            lg:hidden
          "
        >
          <span>Swipe to explore</span>
          <ArrowUpRight className="size-3.5" />
        </div>
      </Container>
    </section>
  );
}

interface AgencyCardProps {
  agency: TravelAgency;
}

function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <Link
      href={agency.href}
      className="
        group
        min-w-[82vw]
        snap-start
        overflow-hidden
        rounded-[24px]
        border
        border-black/[0.07]
        bg-theme-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-black/[0.06]
        sm:min-w-[48vw]
        sm:rounded-[28px]
        lg:min-w-0
        lg:rounded-[16px]
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[0.92]
          overflow-hidden
          sm:aspect-[0.9]
        "
      >
        <img
          src={agency.image}
          alt={agency.name}
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

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-transparent
            to-black/10
          "
        />

        {/* Agency initials */}
        <div
          className="
            absolute
            left-3
            top-3
            flex
            size-10
            items-center
            justify-center
            rounded-full
            bg-theme-white
            text-xs
            font-bold
            tracking-tight
            text-theme-dark
            shadow-lg
            sm:left-4
            sm:top-4
            sm:size-12
            sm:text-sm
          "
        >
          {agency.initials}
        </div>

        {/* Verified */}
        {agency.verified && (
          <div
            className="
              absolute
              right-3
              top-3
              flex
              items-center
              gap-1
              rounded-full
              bg-theme-white/95
              px-2.5
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-theme-dark
              backdrop-blur-sm
              sm:right-4
              sm:top-4
              sm:gap-1.5
              sm:px-3
              sm:text-[10px]
            "
          >
            <BadgeCheck
              className="
                size-3
                text-theme-green
                sm:size-3.5
              "
              fill="currentColor"
              strokeWidth={2}
            />
            Verified
          </div>
        )}

        {/* Bottom image labels */}
        <div
          className="
            absolute
            bottom-3
            left-3
            right-3
            flex
            items-center
            justify-between
            gap-2
            sm:bottom-4
            sm:left-4
            sm:right-4
          "
        >
          <span
            className="
              rounded-full
              bg-black/30
              px-2.5
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
              sm:px-3
              sm:text-[10px]
            "
          >
            {agency.trips} trips
          </span>

          <span
            className="
              flex
              items-center
              gap-1
              rounded-full
              bg-theme-white
              px-2.5
              py-1.5
              text-[10px]
              font-bold
              text-theme-dark
              sm:px-3
              sm:text-xs
            "
          >
            <Star
              className="
                size-3
                fill-current
                text-theme-green
                sm:size-3.5
              "
              strokeWidth={1.5}
            />

            {agency.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
                text-base
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-theme-dark
                sm:text-lg
              "
            >
              {agency.name}
            </h3>

            <div
              className="
                mt-1.5
                flex
                items-center
                gap-1.5
                text-[11px]
                text-theme-muted
                sm:mt-2
                sm:text-xs
              "
            >
              <span className="font-medium text-theme-dark">{agency.rating}</span>

              <span>·</span>

              <span>{agency.reviews.toLocaleString()} reviews</span>
            </div>
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              size-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-theme-lime
              text-theme-dark
              transition-transform
              duration-300
              group-hover:rotate-45
              sm:size-9
            "
          >
            <ArrowUpRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
          </div>
        </div>

        {/* Destinations */}
        <div
          className="
            mt-4
            border-t
            border-black/[0.07]
            pt-3.5
            sm:mt-5
            sm:pt-4
          "
        >
          <p
            className="
              line-clamp-2
              text-[11px]
              font-medium
              leading-5
              text-theme-muted
              sm:text-xs
            "
          >
            {agency.destinations}
          </p>
        </div>

        {/* CTA */}
        <div
          className="
            mt-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-theme-green
            sm:mt-5
            sm:text-[11px]
          "
        >
          View agency
          <span className="ml-1 transition-all duration-300 group-hover:ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}
