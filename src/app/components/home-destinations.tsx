import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { Container, HStack, Section, VStack } from "@/components/layout";
import { Typography } from "@/components/ui";
import { cn } from "@/utils";

interface Destination {
  name: string;
  state: string;
  image: string;
  href: string;
}

const DESTINATIONS: Destination[] = [
  {
    name: "Ladakh",
    state: "Jammu & Kashmir",
    href: "/travel/destinations",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    href: "/travel/destinations",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Goa",
    state: "Goa",
    href: "/travel/destinations",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Meghalaya",
    state: "Northeast India",
    href: "/travel/destinations",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=85",
  },
];

const SECTION_TITLE = (
  <>
    Check out destinations popular
    <br className="hidden sm:block" /> among{" "}
    <span className="italic text-lime-600">travellers</span>
  </>
);

export default function HomeDestinations() {
  return (
    <Section
      id="destinations"
      className="overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <VStack spacing="lg" className="w-full">
          {/* Header */}
          <HStack
            align="end"
            justify="between"
            spacing="lg"
            className="w-full flex-col sm:flex-row"
          >
            <VStack align="start" spacing="sm" className="max-w-3xl">
              <Typography
                variant="body-sm"
                className={cn(
                  "text-[10px] font-bold uppercase",
                  "tracking-[0.18em]",
                  "text-black/40",
                  "sm:text-xs sm:tracking-[0.2em]",
                )}
              >
                Find your place
              </Typography>

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
                {SECTION_TITLE}
              </Typography>
            </VStack>

            <Link
              href="/travel/destinations"
              className={cn(
                "group inline-flex shrink-0 items-center gap-2",
                "text-sm font-semibold",
                "text-theme-dark transition-colors",
                "hover:text-lime-600",
              )}
            >
              <span>View all destinations</span>

              <ArrowRight
                aria-hidden="true"
                className={cn(
                  "size-4",
                  "transition-transform duration-300",
                  "group-hover:translate-x-1",
                )}
              />
            </Link>
          </HStack>

          {/* Destination cards */}
          <div
            className={cn(
              "flex w-full",
              "snap-x snap-mandatory",
              "gap-4 overflow-x-auto pb-4",
              "[-ms-overflow-style:none]",
              "[scrollbar-width:none]",
              "[&::-webkit-scrollbar]:hidden",
              "sm:gap-5",
              "lg:grid lg:grid-cols-4 lg:gap-5",
              "lg:overflow-visible lg:pb-0",
            )}
          >
            {DESTINATIONS.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>

          {/* Mobile hint */}
          <HStack
            align="center"
            spacing="xs"
            className={cn(
              "lg:hidden",
              "text-[10px] font-bold uppercase",
              "tracking-[0.16em]",
              "text-black/35",
            )}
          >
            <span>Swipe to explore</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={destination.href}
      className={cn(
        "group relative block shrink-0",
        "h-[400px] w-[82vw]",
        "snap-start overflow-hidden",
        "rounded-[24px]",
        "bg-theme-dark",
        "sm:h-[440px] sm:w-[45vw] sm:rounded-[28px]",
        "lg:h-[390px] lg:w-auto lg:rounded-[18px]",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-theme-lime",
        "focus-visible:ring-offset-2",
      )}
    >
      {/* Image */}
      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.state}`}
        loading="lazy"
        decoding="async"
        className={cn(
          "absolute inset-0",
          "h-full w-full object-cover",
          "transition-transform duration-700 ease-out",
          "group-hover:scale-105",
          "group-focus-visible:scale-105",
        )}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-t",
          "from-black/75 via-black/15 to-transparent",
          "transition-opacity duration-300",
          "group-hover:from-black/80",
        )}
      />

      {/* Arrow */}
      <div
        className={cn(
          "absolute right-4 top-4",
          "flex size-10 items-center justify-center",
          "rounded-full bg-white",
          "transition-all duration-300",
          "sm:right-5 sm:top-5",
          "lg:translate-y-1 lg:opacity-0",
          "lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
          "lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100",
        )}
      >
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </div>

      {/* Content */}
      <VStack
        align="start"
        spacing="xs"
        className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
      >
        <Typography
          as="span"
          variant="h3"
          className={cn(
            "font-oswald font-semibold",
            "text-[28px] leading-none",
            "tracking-[-0.04em]",
            "text-white",
            "sm:text-3xl",
          )}
        >
          {destination.name}
        </Typography>

        <HStack
          align="center"
          spacing="xs"
          className="text-sm text-white/70"
        >
          {/* <MapPin aria-hidden="true" className="size-3.5 shrink-0" /> */}

          <Typography
            as="span"
            variant="body-sm"
            className="text-white/70"
          >
            {destination.state}
          </Typography>
        </HStack>
      </VStack>
    </Link>
  );
}