import { Users, Compass, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { EntryAnimation } from './entry-animation';
import { Container } from '@/components/layout';
import { Typography } from '@/components/ui';

export interface TravelIntentCard {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  icon?: React.ReactNode;
}

export interface TravelIntentSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  cards?: TravelIntentCard[];
}

const defaultCards: TravelIntentCard[] = [
  {
    eyebrow: '',
    title: 'Join a Trip',
    description: 'Someone is already going. You could go too.',
    ctaLabel: 'Explore trips',
    href: '/trips',
    image: 'https://i.postimg.cc/9FtZm3yW/tt4.jpg',
    icon: <Users className="size-5" strokeWidth={2} />,
  },
  {
    eyebrow: '',
    title: 'For Hosts',
    description: 'Have a plan? Bring people along.',
    ctaLabel: 'Host your trip',
    href: '/host',
    image: 'https://i.postimg.cc/DZj1K1GC/tt1.jpg',
    icon: <Compass className="size-5" strokeWidth={2} />,
  },
];

export function TravelIntentSection({
  eyebrow = '',
  title = (
    <>
      Some people travel for the destination.
      <br className="hidden sm:block" />
      Some travel <span>for the people.</span>
      <br className="hidden sm:block" />
      <span className="italic text-lime-600">We built this for both.</span>
    </>
  ),
  description = `Discover trips hosted by real travellers and verified agencies. Find people going where you’re going. Or create a journey of your own.`,
  cards = defaultCards,
}: TravelIntentSectionProps) {
  return (
    <section className="bg-theme-white">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-4xl px-1 text-center sm:px-0">
          <Typography
            variant="body-sm"
            className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-theme-green sm:mb-5 sm:text-xs sm:tracking-[0.2em]"
          >
            {eyebrow}
          </Typography>

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
            {title}
          </h2>

          <Typography
            variant="body-lg"
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-theme-muted
              sm:mt-7
              sm:text-base
              sm:leading-7
              md:text-lg
              md:leading-8
            "
          >
            {description}
          </Typography>
        </div>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            gap-4
            sm:mt-12
            sm:gap-5
            lg:mt-20
            lg:grid-cols-2
          "
        >
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="
                group
                relative
                min-h-[440px]
                overflow-hidden
                rounded-[24px]
                bg-theme-dark
                sm:min-h-[500px]
                sm:rounded-[28px]
                lg:min-h-[520px]
                lg:rounded-[32px]
              "
            >
              {/* Image */}
              <img
                src={card.image}
                alt=""
                className="
                  absolute
                  inset-0
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

              {/* Content */}
              <div
                className="
                  relative
                  flex
                  min-h-[440px]
                  flex-col
                  justify-between
                  p-5
                  sm:min-h-[500px]
                  sm:p-7
                  md:p-8
                  lg:min-h-[520px]
                  lg:p-10
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  {/* Eyebrow */}
                  <div
                    className="
                      flex
                      min-w-0
                      max-w-[calc(100%-52px)]
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white/90
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-theme-dark
                      backdrop-blur-sm
                      sm:gap-2
                      sm:px-4
                      sm:py-2
                      sm:text-xs
                      sm:tracking-[0.14em]
                    "
                  >
                    {card.icon}

                    <span className="truncate">{card.eyebrow}</span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:bg-theme-lime
                      group-hover:text-theme-dark
                      sm:size-11
                    "
                  >
                    <ArrowUpRight
                      className="
                        size-4
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                        sm:size-5
                      "
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Bottom */}
                <div className="max-w-xl">
                  <h3
                    className="
                      text-[30px]
                      font-semibold
                      leading-[1]
                      tracking-[-0.045em]
                      text-white
                      sm:text-4xl
                      md:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-lg
                      text-sm
                      leading-5
                      text-white/75
                      sm:mt-5
                      sm:text-base
                      sm:leading-6
                      md:text-lg
                      md:leading-7
                      lg:text-xl
                    "
                  >
                    {card.description}
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-theme-lime
                      sm:mt-7
                      sm:gap-2
                      sm:text-xs
                      sm:tracking-[0.16em]
                    "
                  >
                    {card.ctaLabel}

                    <ArrowUpRight
                      className="
                        size-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        sm:size-4
                      "
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
