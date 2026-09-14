import { Quote, Star } from "lucide-react";
import Image from "next/image";

import { EntryAnimation } from "@/components/ui/entry-animation";
import { Container, HStack, Section, VStack } from "@/components/layout";
import { Typography } from "@/components/ui";
import { cn } from "@/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  packageName: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I joined the Spiti trip without knowing anyone. Six days later, it genuinely felt like I had travelled with old friends. Everything was well planned, but still felt spontaneous.",
    name: "Shivam Mehta",
    role: "Traveller · Mumbai",
    packageName: "Spiti Valley Autumn Road Trip",
    rating: 4.9,
    image: "/u1.jpg",
  },
  {
    quote:
      "The best part wasn't just seeing Manali in winter. It was meeting people who were just as excited about getting out there. The group, stays and itinerary were all really well managed.",
    name: "Arjun Kapoor",
    role: "Traveller · Delhi",
    packageName: "Manali Winter Escape",
    rating: 4.8,
    image: "/u2.jpg",
  },
  {
    quote:
      "I started hosting trips because I wanted to share the places I love. Finding the right people to join made the experience even better. I'd definitely host another one.",
    name: "Amit Nair",
    role: "Trip Host · Bengaluru",
    packageName: "Goa Beach Weekend",
    rating: 5.0,
    image: "/u3.jpg",
  },
];

const RATING_COUNT = 5;

export function Testimonials() {
  return (
    <Section className="bg-white">
      <Container className="px-0">
        <VStack spacing="lg" className="w-full">
          {/* Header */}
          <EntryAnimation className="w-full px-6 lg:px-0">
            <VStack
              align="center"
              spacing="md"
              className="mx-auto max-w-4xl text-center"
            >
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
                Stories from our{" "}
                <span className="italic text-lime-500">travellers</span>
              </Typography>

              <Typography
                variant="body-lg"
                className={cn(
                  "max-w-xl",
                  "text-sm leading-6",
                  "text-theme-muted",
                  "sm:text-base sm:leading-7",
                  "md:text-lg md:leading-8",
                )}
              >
                Real journeys, new connections, and experiences worth
                remembering.
              </Typography>
            </VStack>
          </EntryAnimation>

          {/* Desktop */}
          <div
            className={cn(
              "hidden w-full",
              "gap-5",
              "px-6",
              "md:grid md:grid-cols-3",
              "lg:px-0",
            )}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <EntryAnimation
                key={testimonial.name}
                delay={index * 100}
                className="h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </EntryAnimation>
            ))}
          </div>

          {/* Mobile */}
          <div
            className={cn(
              "flex w-full",
              "gap-4",
              "overflow-x-auto",
              "overscroll-x-contain",
              "px-6 pb-5",
              "snap-x snap-mandatory",
              "[-ms-overflow-style:none]",
              "[scrollbar-width:none]",
              "[&::-webkit-scrollbar]:hidden",
              "md:hidden",
            )}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-[86%] shrink-0 snap-center"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Mobile hint */}
          <HStack
            align="center"
            spacing="xs"
            className={cn(
              "px-6",
              "text-[10px] font-bold uppercase",
              "tracking-[0.16em]",
              "text-black/35",
              "md:hidden",
            )}
          >
            <span>Swipe to explore</span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-black/20"
            />

            <span>3 stories</span>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col",
        "rounded-[24px]",
        "border border-black/[0.07]",
        "bg-[#fbfcf9]",
        "p-6",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-black/[0.12]",
        "hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)]",
        "sm:rounded-[28px] sm:p-7",
      )}
    >
      {/* Top */}
      <HStack align="start" justify="between" className="w-full">
        <div
          className={cn(
            "flex size-10 items-center justify-center",
            "rounded-xl",
            "bg-theme-lime",
            "text-theme-dark",
          )}
        >
          <Quote
            aria-hidden="true"
            className="size-4"
            strokeWidth={2.5}
          />
        </div>

        <HStack
          align="center"
          spacing="xs"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: RATING_COUNT }).map((_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className={cn(
                "size-3.5",
                index < Math.round(testimonial.rating)
                  ? "fill-current text-theme-dark"
                  : "text-black/15",
              )}
              strokeWidth={1.5}
            />
          ))}

          <Typography
            as="span"
            variant="caption"
            className="ml-1 font-semibold text-theme-dark"
          >
            {testimonial.rating.toFixed(1)}
          </Typography>
        </HStack>
      </HStack>

      {/* Package */}
      <HStack
        align="center"
        spacing="xs"
        className="mt-6"
      >
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-theme-lime"
        />

        <Typography
          as="span"
          variant="caption"
          className={cn(
            "truncate",
            "font-semibold",
            "uppercase",
            "tracking-[0.1em]",
            "text-theme-dark/55",
          )}
        >
          {testimonial.packageName}
        </Typography>
      </HStack>

      {/* Quote */}
      <blockquote
        className={cn(
          "mt-5 flex-1",
          "text-[15px] leading-7",
          "tracking-[-0.01em]",
          "text-theme-dark/75",
          "sm:text-base sm:leading-7",
        )}
      >
        “{testimonial.quote}”
      </blockquote>

      {/* Author */}
      <HStack
        align="center"
        spacing="sm"
        className={cn(
          "mt-8",
          "border-t border-black/[0.07]",
          "pt-5",
        )}
      >
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-theme-dark">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover object-top"
          />
        </div>

        <VStack
          align="start"
          spacing="none"
          className="min-w-0"
        >
          <Typography
            as="span"
            variant="body-sm"
            className="font-semibold text-theme-dark"
          >
            {testimonial.name}
          </Typography>

          <Typography
            as="span"
            variant="caption"
            className="mt-0.5 text-theme-muted"
          >
            {testimonial.role}
          </Typography>
        </VStack>
      </HStack>
    </article>
  );
}