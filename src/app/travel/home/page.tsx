import { Handshake } from 'lucide-react';
import { EntryAnimation } from './components/entry-animation';
import { Footer } from './components/footer';
import HomeDestinations from './components/home-destinations';
import HomeHero from './components/home-hero/home-hero';
import { Logo } from './components/logo';
import { Navbar } from './components/navbar';
import { SelectedJourneys } from './components/selected-journeys';
import { TravelAgenciesSection } from './components/travel-agencies-section';
import { TravelCommunitySection } from './components/travel-community-section';
import { TravelIntentSection } from './components/travel-intent-section';
import WhyUs from './components/why-us';
import { FinalCTA } from '@/components/sections/final-cta';

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#fbfcf9] text-[#111111]">
      <EntryAnimation>
        <HomeHero />
      </EntryAnimation>
      <EntryAnimation>
        <TravelIntentSection />
      </EntryAnimation>
      <EntryAnimation>
        <HomeDestinations />
      </EntryAnimation>
      {/* <Section id="categories" className="bg-[#111111  text-whit py-0!">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Travel your way
                </p>

                <h2 className="text-[44px] font-semibold tracking-[-0.055em] leading-[1.2]  sm:text-6xl lg:text-[40px]">
                  There is a trip for
                  <br />
                  <span className="text-lime-600 italic ml-2">everyone</span>
                </h2>
              </div>

              <button className="flex items-center gap-2 text-sm font-semibold">
                View all destinations
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className="group relative h-[230px] overflow-hidden rounded-[30px]"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="flex absolute top-6 left-6 h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>

                        <p className="mt-2 text-sm text-white/65">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section> */}
      <EntryAnimation>
        <SelectedJourneys />
      </EntryAnimation>
      <EntryAnimation>
        <WhyUs />
      </EntryAnimation>
      <EntryAnimation>
        <TravelAgenciesSection />
      </EntryAnimation>
      <EntryAnimation>
        <TravelCommunitySection />
      </EntryAnimation>
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
          label: 'Explore trips',
          href: '/trips',
        }}
        secondaryAction={{
          label: 'Become a host',
          href: '/host',
        }}
      />
      <Footer
        logo={<Logo text="Trabi" />}
        description="Discover unforgettable journeys, meet like-minded travellers, and explore the world with people who love to travel."

        groups={footerGroups}

        backToTop={{
          label: 'Back to top',
          href: '#',
        }}

        copyright={<>© {new Date().getFullYear()} Advent. All rights reserved.</>}

        bottomText="Made for people who love to explore."
      />
      );
    </div>
  );
}

const footerGroups = [
  {
    title: 'Explore',
    links: [
      {
        label: 'Discover Trips',
        href: '/trips',
      },
      {
        label: 'Travel Community',
        href: '/community',
      },
      {
        label: 'Travel Agencies',
        href: '/agencies',
      },
    ],
  },
  {
    title: 'For Hosts',
    links: [
      {
        label: 'Become a Host',
        href: '/host',
      },
      {
        label: 'Host Login',
        href: '/host/login',
      },
      {
        label: 'List a Trip',
        href: '/host/trips/new',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About',
        href: '/company#about',
      },
      {
        label: 'Contact',
        href: '/company#contact',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        label: 'Privacy',
        href: '/privacy-policy',
      },
      {
        label: 'Terms',
        href: '/terms-and-conditions',
      },
    ],
  },
];
