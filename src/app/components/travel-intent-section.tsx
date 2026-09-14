import {
  ArrowUpRight,
  Building2,
  Compass,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container, HStack, VStack } from "@/components/layout";
import { Typography } from "@/components/ui";
import { cn } from "@/utils";

import { EntryAnimation } from "@/components/ui/entry-animation";
import ti1 from "./home-travel-intent/images/ti1.jpg";
import ti2 from "./home-travel-intent/images/ti2.jpg";
import ti3 from "./home-travel-intent/images/ti3.jpg";
import Image from "next/image";

export interface TravelIntentCard {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  icon?: ReactNode;
}

export interface TravelIntentSectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  cards?: TravelIntentCard[];
}

const DEFAULT_CARDS: TravelIntentCard[] = [
  {
    eyebrow: "For travellers",
    title: "Join a Trip",
    description:
      "Find your people, discover new places, and join a journey already worth taking.",
    ctaLabel: "Explore trips",
    href: "/travel/destinations",
    image: ti2,
    icon: <Users className="size-5" strokeWidth={2} />,
  },
  {
    eyebrow: "For hosts",
    title: "Host a Trip",
    description:
      "Have a destination in mind? Bring people together and create an experience they'll remember.",
    ctaLabel: "Start hosting",
    href: "/travel/host-a-trip",
    image:ti1,
    icon: <Compass className="size-5" strokeWidth={2} />,
  },
  {
    eyebrow: "For agencies",
    title: "Grow Your Agency",
    description:
      "Showcase your experiences, reach more travellers, and grow your travel business with us.",
    ctaLabel: "Become a partner",
    href: "/agencies",
    image: ti3,
    icon: <Building2 className="size-5" strokeWidth={2} />,
  },
];

const DEFAULT_TITLE = (
  <>
    Some people travel for the destination.
    <br className="hidden sm:block" />
    Some travel <span>for the people.</span>
    <br className="hidden sm:block" />
    <span className="italic text-lime-600">We built this for both.</span>
  </>
);

const DEFAULT_DESCRIPTION =
  "Discover trips hosted by real travellers and verified agencies. Find people going where you’re going. Or create a journey of your own.";

export function TravelIntentSection({
  eyebrow = "",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  cards = DEFAULT_CARDS,
}: TravelIntentSectionProps) {
  return (
    <section className="bg-theme-white pt-10">
      <Container>
        <VStack spacing="xl" className="w-full">
          {/* Heading */}
          <EntryAnimation className="w-full">
            <VStack
              align="center"
              spacing="md"
              className="mx-auto max-w-4xl text-center"
            >
              {eyebrow && (
                <Typography
                  variant="body-sm"
                  className={cn(
                    "text-[10px] font-bold uppercase",
                    "tracking-[0.18em] text-theme-green",
                    "sm:text-xs sm:tracking-[0.2em]",
                  )}
                >
                  {eyebrow}
                </Typography>
              )}

              <Typography
                variant="h2"
                className={cn(
                  "font-oswald font-semibold",
                  "text-[34px] leading-[1.08]",
                  "tracking-[-0.055em]",
                  "text-theme-dark",
                  "sm:text-5xl sm:leading-[1.1]",
                  "md:text-6xl",
                  "lg:text-[40px]",
                )}
              >
                {title}
              </Typography>

              {/* <Typography
                variant="body-lg"
                className={cn(
                  "max-w-2xl",
                  "text-sm leading-6",
                  "text-theme-muted",
                  "sm:text-base sm:leading-7",
                  "md:text-lg md:leading-8",
                )}
              >
                {description}
              </Typography> */}
            </VStack>
          </EntryAnimation>

          {/* Cards */}
          <div
            className={cn("grid w-full", "gap-4", "sm:gap-5", "sm:grid-cols-2 lg:grid-cols-7")}
          >
            {cards.map((card, index) => (
              <EntryAnimation
                className={cn("lg:col-span-2 col-span-1",{
                  "lg:col-span-3 sm:col-span-2 col-span-1": index === 0,
                })}
                key={card.href}
                delay={index * 100}
              >
                <TravelIntentCardComponent card={card} />
              </EntryAnimation>
            ))}
          </div>
        </VStack>
      </Container>
    </section>
  );
}

interface TravelIntentCardComponentProps {
  card: TravelIntentCard;
}

function TravelIntentCardComponent({ card }: TravelIntentCardComponentProps) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group relative block overflow-hidden",
        "min-h-[200px]",
        "rounded-[16px]",
        "bg-theme-dark",
        "isolate",
        "sm:min-h-[300px] sm:rounded-[16px]",
        "lg:min-h-[390px] lg:rounded-[16px]",
      )}
    >
      {/* Background image */}
      <Image
        src={card.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={cn(
          "absolute inset-0",
          "h-full w-full",
          "object-cover object-bottom object-right",
          "transition-transform duration-700 ease-out",
          "group-hover:scale-105",
        )}
      />

      {/* Image overlay */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bottom-0 mt-auto",
          "bg-gradient-to-t",
          "from-black/85 via-black/75 to-black/0 h-50",
        )}
      />

      {/* Content */}
      <VStack
        justify="between"
        className={cn(
          "relative z-10",
          "min-h-[200px]",
          "p-5",
          "sm:min-h-[300px] sm:p-7",
          "md:p-8",
          "lg:min-h-[390px] lg:p-5",
        )}
      >
        {/* Top */}
        <HStack align="start" justify="between" spacing="sm" className="w-full">
          {/* Eyebrow */}
          {card.eyebrow ? (
            <HStack
              align="center"
              spacing="xs"
              className={cn(
                "min-w-0 max-w-[calc(100%-52px)]",
                "rounded-full",
                "bg-white/90",
                "px-3 py-1.5",
                "text-theme-dark",
                "backdrop-blur-sm",
                "sm:gap-2 sm:px-2 sm:py-2",
              )}
            >
              {card.icon && (
                <span className="shrink-0 [&>svg]:size-4 sm:[&>svg]:size-4">
                  {card.icon}
                </span>
              )}

              <Typography
                as="span"
                variant="caption"
                className={cn(
                  "truncate",
                  "text-[9px] font-bold uppercase",
                  "tracking-[0.12em]",
                  "sm:text-[9px] sm:tracking-[0.14em]",
                )}
              >
                {card.eyebrow}
              </Typography>
            </HStack>
          ) : (
            <span />
          )}

          {/* Arrow */}
          <HStack
            align="center"
            justify="center"
            className={cn(
              "size-10 shrink-0",
              "rounded-full",
              "bg-white/15",
              "text-white",
              "backdrop-blur-md",
              "transition-all duration-300",
              "group-hover:bg-theme-lime",
              "group-hover:text-theme-dark",
              "sm:size-11",
            )}
          >
            <ArrowUpRight
              className={cn(
                "size-4",
                "transition-transform duration-300",
                "group-hover:rotate-45",
                "sm:size-5",
              )}
              strokeWidth={2}
            />
          </HStack>
        </HStack>

        {/* Bottom */}
        <VStack align="start" spacing="sm" className="max-w-xl">
          <Typography
            variant="h3"
            className={cn(
              "font-oswald font-medium",
              "leading-none",
              "",
              "text-white",
            )}
          >
            {card.title}
          </Typography>
{/* 
          <Typography
            variant="body-lg"
            className={cn(
              "max-w-2xs ",
              "text-sm leading-5",
              "text-white/75",
              "sm:text-base sm:leading-6",
              "md:text-lg md:leading-7",
              "lg:text-base md:leading-6",
            )}
          >
            {card.description}
          </Typography> */}

          <HStack
            align="center"
            spacing="xs"
            className={cn(
              "mt-0",
              "text-[10px] font-bold uppercase",
              "tracking-[0.14em]",
              "text-theme-lime",
              "sm:mt-0 sm:gap-2",
              "sm:text-xs sm:tracking-[0.16em]",
            )}
          >
            <Typography
              as="span"
              variant="caption"
              className="font-bold uppercase tracking-inherit text-theme-lime"
            >
              {card.ctaLabel}
            </Typography>

            <ArrowUpRight
              className={cn(
                "size-3.5",
                "transition-transform duration-300",
                "group-hover:translate-x-1",
                "group-hover:-translate-y-1",
                "sm:size-4",
              )}
              strokeWidth={2.5}
            />
          </HStack>
        </VStack>
      </VStack>
    </Link>
  );
}
