import { ArrowUpRight, ChevronRight, PlaneTakeoff } from "lucide-react";

import { AutoImageSlider } from "@/components/ui/auto-image-slider";
import { Container, HStack, Section, VStack } from "@/components/layout";
import { Button, Typography } from "@/components/ui";
import { cn } from "@/utils";

import SearchBox from "./components/search-box";
import LineSVG from "./components/line-svg";
import { ScrollingContainer } from "./components/scrolling-container";

import type { HomeHeroData } from "./home-hero.data";
import Link from "next/link";

interface HomeHeroProps {
  data: HomeHeroData;
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        <VStack spacing="lg" className="relative">
          {/* Decorative plane */}
          <PlaneTakeoff
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute right-0 top-0",
              "size-28 sm:size-48 lg:size-72 xl:size-96",
              "fill-theme-lime/10 stroke-0",
            )}
          />

          {/* HERO INTRO */}
          <VStack
            spacing="lg"
            align="center"
            className="mx-auto max-w-155 text-center"
          >
            <Typography variant="display" className="relative font-oswald">
              {data.title.line1}
              <br />
              {data.title.line2}

              <span
                aria-hidden="true"
                className={cn(
                  "absolute",
                  "-bottom-2 right-6.25",
                  "sm:-bottom-3 sm:-right-11.25",
                )}
              >
                <LineSVG />
              </span>
            </Typography>

            <Typography
              variant="body-lg"
              className="max-w-140 text-black/55"
            >
              {data.description}
            </Typography>
          </VStack>

          {/* HERO VISUAL */}
          <VStack
            className={cn(
              "relative overflow-hidden",
              "h-120 sm:h-130 lg:h-152.5",
              "rounded-[26px] sm:rounded-[30px] lg:rounded-[18px]",
            )}
          >
            {/* Background images */}
            <AutoImageSlider
              images={data.images}
              interval={data.slider.interval}
              transitionDuration={data.slider.transitionDuration}
              alt={data.imageAlt}
              showIndicators={data.slider.showIndicators}
            />

            {/* Gradient overlay */}
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 z-20",
                "bg-linear-to-t",
                "from-black/65 via-black/10 to-transparent",
              )}
            />

            {/* Scroll controlled content */}
            <ScrollingContainer>
              {/* Search */}
              <SearchBox />

              {/* Explore CTA */}
              <Link href={'/explore'}
              
                className={cn(
                  "hidden sm:flex items-center transition ",
                  "h-14 gap-3 rounded-2xl",
                  "border-[3px] border-white",
                  "bg-theme-lime pr-2! pl-4",
                  "text-black!",
                  "hover:bg-theme-dark hover:text-theme-white! group",
                )}
              >
                <Typography
                  as="span"
                  variant="body-sm"
                  className="font-semibold"
                >
                  {data.cta.label}
                </Typography>

                <HStack
                  align="center"
                  justify="center"
                  className="size-10 rounded-xl group-hover:rounded-4xl transition transition-all bg-white text-black! group-hover:bg-theme-lime"
                >
                  <ChevronRight className="size-5" />
                </HStack>
              </Link>

              {/* Destination information */}
              <HStack
                align="end"
                justify="between"
                className="mt-auto w-full p-5 sm:p-8 lg:p-10"
              >
                <VStack
                  spacing="xs"
                  align="start"
                  className="min-w-0 text-white"
                >
                  <Typography
                    variant="h3"
                    className={cn(
                      "font-oswald font-semibold",
                      "tracking-[-0.03em]",
                      "text-2xl sm:text-4xl",
                    )}
                  >
                    {data.destination.title}
                  </Typography>

                  <Typography
                    variant="body"
                    className={cn(
                      "max-w-105",
                      "text-sm leading-5",
                      "text-white/75",
                      "sm:text-base sm:leading-6",
                    )}
                  >
                    {data.destination.description}
                  </Typography>
                </VStack>

                {/* Destination link */}
                <HStack
                  align="center"
                  justify="center"
                  className={cn(
                    "mt-auto shrink-0",
                    "size-12 sm:size-14",
                    "rounded-2xl bg-white",
                    "text-black",
                    "transition-transform duration-300",
                    "hover:scale-105",
                  )}
                >
                  <ArrowUpRight className="size-6 sm:size-7" />
                </HStack>
              </HStack>
            </ScrollingContainer>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}