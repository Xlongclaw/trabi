import React from "react";
import { HomeHero, Logo } from "./components";
import { TravelIntentSection } from "./components/travel-intent-section";
import HomeDestinations from "./components/home-destinations";
import { SelectedJourneys } from "./components/selected-journeys";
import WhyUs from "./components/why-us";
import { TravelAgenciesSection } from "./components/travel-agencies-section";
import { Footer } from "./travel/home/components/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { TravelCommunitySection } from "./travel/home/components/travel-community-section";
import { homeHeroData } from "./components/home-hero/home-hero.data";
import { EntryAnimation } from "@/components/ui/entry-animation";
import { Testimonials } from "./components/testimonials";

export default function Page() {
  return (
    <div>
      <EntryAnimation>
        <HomeHero data={homeHeroData} />
      </EntryAnimation>
      <EntryAnimation>
        <TravelIntentSection />
      </EntryAnimation>
      <EntryAnimation>
        <HomeDestinations />
      </EntryAnimation>
      <SelectedJourneys />
      <Testimonials/>
      {/* <WhyUs /> */}
      <TravelAgenciesSection />
      <TravelCommunitySection />
      <FinalCTA
        titleSize="md"
        id="pricing"
        eyebrow="One community. Endless ways to explore."
        title={
          <>
            Your next adventure
            <br />
            <span className="block opacity-40">starts with a journey.</span>
          </>
        }
        description="Discover unforgettable trips, meet fellow travellers, and explore new places with people who love to travel as much as you do."
        primaryAction={{
          label: "Explore trips",
          href: "/trips",
        }}
        secondaryAction={{
          label: "Become a host",
          href: "/host",
        }}
      />
      <Footer
        logo={<Logo text="Trabi" />}
        description="Discover unforgettable journeys, meet like-minded travellers, and explore the world with people who love to travel."
        groups={footerGroups}
        backToTop={{
          label: "Back to top",
          href: "#",
        }}
        copyright={
          <>© {new Date().getFullYear()} Advent. All rights reserved.</>
        }
        bottomText="Made for people who love to explore."
      />
    </div>
  );
}

const footerGroups = [
  {
    title: "Explore",
    links: [
      {
        label: "Discover Trips",
        href: "/trips",
      },
      {
        label: "Travel Community",
        href: "/community",
      },
      {
        label: "Travel Agencies",
        href: "/agencies",
      },
    ],
  },
  {
    title: "For Hosts",
    links: [
      {
        label: "Become a Host",
        href: "/host",
      },
      {
        label: "Host Login",
        href: "/host/login",
      },
      {
        label: "List a Trip",
        href: "/host/trips/new",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/company#about",
      },
      {
        label: "Contact",
        href: "/company#contact",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy",
        href: "/privacy-policy",
      },
      {
        label: "Terms",
        href: "/terms-and-conditions",
      },
    ],
  },
];
