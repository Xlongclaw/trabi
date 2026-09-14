"use client"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { EntryAnimation } from "@/components/ui/entry-animation";
import { cn } from "@/utils";
import { CardCarousel } from "@/components/ui/card-carousel";

interface Trip {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: string;
  rating: string;
  reviews: number;
  host: string;
  hostAvatar: string;
  joined: number;
  slotsLeft: number;
  image: string;
  href: string;
}

const TRIPS: Trip[] = [
  {
    id: "spiti-autumn-01",
    title: "Spiti Valley Autumn Road Trip",
    category: "Road trip",
    location: "Spiti Valley",
    duration: "6 days",
    price: "₹14,999",
    rating: "4.9",
    reviews: 48,
    host: "Arjun Mehta",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    joined: 12,
    slotsLeft: 8,
    image:
      "https://images.unsplash.com/photo-1620398762817-ff3885718863?w=1600&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "manali-winter-02",
    title: "Manali Winter Escape",
    category: "Adventure",
    location: "Manali",
    duration: "4 days",
    price: "₹9,499",
    rating: "4.8",
    reviews: 36,
    host: "Rahul Kumar",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    joined: 8,
    slotsLeft: 2,
    image:
      "https://images.unsplash.com/photo-1597167231350-d057a45dc868?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "goa-beach-03",
    title: "Goa Beach & Beyond",
    category: "Beach",
    location: "Goa",
    duration: "4 days",
    price: "₹6,999",
    rating: "4.7",
    reviews: 62,
    host: "Priya Sharma",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    joined: 15,
    slotsLeft: 5,
    image:
      "https://images.unsplash.com/photo-1698430185884-a88ff520f03e?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "rishikesh-camp-04",
    title: "Rishikesh River Camp",
    category: "Camping",
    location: "Rishikesh",
    duration: "3 days",
    price: "₹7,499",
    rating: "4.8",
    reviews: 54,
    host: "Himalayan Adventures",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=HimAdv",
    joined: 10,
    slotsLeft: 6,
    image:
      "https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "ladakh-bike-05",
    title: "Ladakh Bike Expedition",
    category: "Road trip",
    location: "Ladakh",
    duration: "10 days",
    price: "₹22,999",
    rating: "5.0",
    reviews: 29,
    host: "Dev Patel",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
    joined: 6,
    slotsLeft: 4,
    image:
      "https://images.unsplash.com/photo-1643368214091-6af1a029aee0?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "meghalaya-clouds-06",
    title: "Meghalaya in the Clouds",
    category: "Nature",
    location: "Meghalaya",
    duration: "5 days",
    price: "₹12,499",
    rating: "4.9",
    reviews: 41,
    host: "Aarav Singh",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
    joined: 14,
    slotsLeft: 6,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "kashmir-great-lakes-07",
    title: "Kashmir Great Lakes Trek",
    category: "Trekking",
    location: "Kashmir",
    duration: "7 days",
    price: "₹16,999",
    rating: "4.9",
    reviews: 73,
    host: "Mountain Trails",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=MountainTrails",
    joined: 18,
    slotsLeft: 4,
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "kerala-backwaters-08",
    title: "Kerala Backwaters Escape",
    category: "Slow travel",
    location: "Alappuzha",
    duration: "5 days",
    price: "₹11,499",
    rating: "4.8",
    reviews: 57,
    host: "Neha Kapoor",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    joined: 11,
    slotsLeft: 7,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "uttarakhand-hike-09",
    title: "Uttarakhand Mountain Escape",
    category: "Hiking",
    location: "Uttarakhand",
    duration: "5 days",
    price: "₹8,999",
    rating: "4.7",
    reviews: 32,
    host: "Kunal Rawat",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal",
    joined: 9,
    slotsLeft: 3,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
  {
    id: "jaisalmer-desert-10",
    title: "Jaisalmer Desert Nights",
    category: "Culture",
    location: "Jaisalmer",
    duration: "3 days",
    price: "₹7,999",
    rating: "4.8",
    reviews: 45,
    host: "Rajasthan Routes",
    hostAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=RajasthanRoutes",
    joined: 13,
    slotsLeft: 5,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=85&fit=crop",
    href: "/travel/trip-details/spiti-autumn-01",
  },
];

export function SelectedJourneys() {
  return (
    <Section className="overflow-hidden">
      <Container>
        {/* Header */}
        <EntryAnimation>
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p
                className={cn(
                  "mb-3 text-[10px] font-semibold uppercase",
                  "tracking-[0.2em] text-black/40 sm:text-xs",
                )}
              >
                Selected journeys
              </p>

              <h2
                className={cn(
                  "font-oswald font-semibold",
                  "text-[34px] leading-[1.04]",
                  "tracking-[-0.055em]",
                  "text-theme-dark",
                  "sm:text-5xl sm:leading-[1.05]",
                  "md:text-6xl",
                  "lg:text-[42px]",
                )}
              >
                Trips worth leaving{" "}
                <span className="italic text-lime-600">
                  home for.
                </span>
              </h2>
            </div>

            <Link
              href="/travel/destinations"
              className={cn(
                "group inline-flex w-fit items-center gap-2",
                "text-sm font-semibold text-theme-dark",
                "transition-colors hover:text-lime-600",
              )}
            >
              Explore all trips

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </EntryAnimation>

        {/* Carousel */}
        <EntryAnimation delay={100}>
          <CardCarousel
            items={TRIPS}
            desktopItems={3}
            tabletItems={2}
            mobileItems={1}
            gap={14}
            autoplay
            autoplayInterval={4000}
            pauseOnHover
            showArrows
            showDots
            renderCard={(trip) => (
              <TripCard trip={trip} />
            )}
          />
        </EntryAnimation>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Trip Card                                                                   */
/* -------------------------------------------------------------------------- */

function TripCard({ trip }: { trip: Trip }) {
  const availability = Math.round(
    (trip.joined / (trip.joined + trip.slotsLeft)) * 100,
  );

  const isAlmostFull = trip.slotsLeft <= 3;

  return (
    <Link
      href={trip.href}
      className="group block h-full"
      aria-label={`View ${trip.title}`}
    >
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-[16px] p-1.5",
          "border border-black/[0.07] bg-white",
          "transition-all duration-500 ease-out",
          "hover:-translate-y-1.5 hover:border-black/[0.12]",
          "hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)]",
        )}
      >
        {/* Image */}
        <div className="relative aspect-[1.5/1] overflow-hidden rounded-xl">
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          {/* Image gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/10" />

          {/* Top badges */}
          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-theme-dark backdrop-blur-md">
              {trip.category}
            </span>

            <div className="flex items-center gap-1 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-current text-theme-lime" />
              <span>{trip.rating}</span>
              <span className="text-white/60">({trip.reviews})</span>
            </div>
          </div>

          {/* Bottom image info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <div className="flex items-center gap-1.5 text-sm font-medium text-white">
              <MapPin className="h-4 w-4" />
              {trip.location}
            </div>

            {isAlmostFull && (
              <span className="rounded-full bg-theme-lime px-3 py-1.5 text-[11px] font-bold text-theme-dark">
                Few spots left
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title */}
          <div>
            <h3 className="max-w-[90%] font-oswald text-[20px] font-medium leading-[1.08] tracking-[-0.02em] text-theme-dark transition-colors group-hover:text-black">
              {trip.title}
            </h3>

            {/* Trip meta */}
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-black/50">
              <span>{trip.duration}</span>
              <span className="h-1 w-1 rounded-full bg-black/20" />
              <span>{trip.joined} travellers joined</span>
            </div>
          </div>

          {/* Host */}
          {/* <div className="mt-5 flex items-center gap-3">
            <Image
              src={trip.hostAvatar}
              alt={trip.host}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-black/[0.05]"
            />

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/35">
                Hosted by
              </p>

              <p className="truncate text-sm font-medium text-theme-dark">
                {trip.host}
              </p>
            </div>
          </div> */}

          {/* Availability */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-black/45">Trip availability</span>

              <span
                className={cn(
                  "font-semibold",
                  isAlmostFull ? "text-orange-600" : "text-theme-dark",
                )}
              >
                {trip.slotsLeft} {trip.slotsLeft === 1 ? "spot" : "spots"} left
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-black/[0.07]">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  isAlmostFull ? "bg-orange-400" : "bg-theme-lime",
                )}
                style={{
                  width: `${Math.min(Math.max(availability, 8), 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-end justify-between gap-4 border-t border-black/[0.07] pt-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/35">
                Starting from
              </p>

              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="font-oswald text-[27px] font-medium tracking-[-0.02em] text-theme-dark">
                  {trip.price}
                </span>

                <span className="text-xs text-black/40">/ person</span>
              </div>
            </div>

            {/* Arrow */}
            <span
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                "bg-theme-dark text-white",
                "transition-all duration-300",
                "group-hover:bg-theme-lime group-hover:text-theme-dark",
                "group-hover:rotate-[-8deg]",
              )}
            >
              <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
