'use client';
import {
  ArrowRight,
  ChevronDown,
  Heart,
  MapPin,
  Palmtree,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import React, { useState } from 'react';
import { Container, Section } from '@/components/layout';

const destinations = [
  {
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    type: 'Beach',
    description: 'Tropical beaches, lush rice terraces, vibrant culture and unforgettable sunsets.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
    trips: 42,
    featured: true,
  },
  {
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    type: 'Beach',
    description: 'Whitewashed villages, blue domes and breathtaking views across the Aegean.',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
    trips: 28,
    featured: true,
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    type: 'Adventure',
    description: 'Snow-covered peaks, alpine villages and some of the world’s most scenic trails.',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85',
    trips: 35,
    featured: true,
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    type: 'Culture',
    description: 'Ancient temples, peaceful gardens and timeless Japanese traditions.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
    trips: 24,
    featured: false,
  },
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    type: 'Beach',
    description: 'Cliffside towns, Mediterranean waters and unforgettable coastal drives.',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    trips: 31,
    featured: false,
  },
  {
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'Oceania',
    type: 'Adventure',
    description: 'Epic landscapes and adrenaline-filled experiences surrounded by mountains.',
    image:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=85',
    trips: 19,
    featured: false,
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    type: 'Culture',
    description: 'Colorful souks, incredible food and centuries of history around every corner.',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=85',
    trips: 17,
    featured: false,
  },
  {
    name: 'Patagonia',
    country: 'Argentina',
    region: 'South America',
    type: 'Adventure',
    description: 'Wild landscapes, dramatic mountains and some of the planet’s best hiking.',
    image:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85',
    trips: 14,
    featured: false,
  },
  {
    name: 'Amalfi',
    country: 'Italy',
    region: 'Europe',
    type: 'Relax',
    description: 'Slow mornings, coastal villages and long evenings beside the Mediterranean.',
    image:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85',
    trips: 22,
    featured: false,
  },
];

const regions = [
  {
    name: 'Europe',
    destinations: '38 destinations',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Asia',
    destinations: '31 destinations',
    image:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Africa',
    destinations: '19 destinations',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Americas',
    destinations: '27 destinations',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85',
  },
];

const filters = ['All', 'Beach', 'Adventure', 'Culture', 'Relax'];

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesFilter = activeFilter === 'All' || destination.type === activeFilter;

    const searchValue = search.toLowerCase();

    const matchesSearch =
      destination.name.toLowerCase().includes(searchValue) ||
      destination.country.toLowerCase().includes(searchValue) ||
      destination.region.toLowerCase().includes(searchValue);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fbfcf9] text-[#111111]">
      {/* ================================================================
          HERO
      ================================================================= */}
      <Section className="relative overflow-hidden bg-theme-green">
        <Container>
          {/* <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#e5f9bc] blur-3xl" /> */}

          {/* <div className="absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-[#edfbd8] blur-3xl" /> */}

          <div className="relative mx-auto max-w-[1400px]">
            <div className="max-w-[850px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full ">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                  Explore the world
                </span>
              </div>

              <h1 className="text-[54px] font-semibold text-white leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[70px]">
                Where are you
                <br />
                <span className="text-theme-lime">going.</span>
              </h1>

              <p className="mt-7 max-w-[650px] text-base leading-7 text-white/70 sm:text-lg">
                From hidden beaches to mountain escapes, discover destinations that turn ordinary
                trips into unforgettable stories.
              </p>
            </div>
            {/* <Palmtree
              strokeWidth={0.3}
              className="size-100 fill-theme-dark absolute right-0 top-0 stroke-white"
            /> */}

            {/* <div className="mt-10 flex max-w-[900px] flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search destinations, countries..."
                  className="
                  h-[58px]
                  w-full
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  pl-13
                  pr-5
                  text-sm
                  outline-none
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  transition
                  placeholder:text-black/35
                  focus:border-[#a8db55]
                  focus:ring-4
                  focus:ring-[#b8f45a]/20
                "
                />
              </div>

              <button className="flex h-[58px] items-center justify-center gap-2 rounded-full bg-[#111111] px-7 text-sm font-semibold text-white transition hover:bg-black/80">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div> */}
          </div>
        </Container>
      </Section>

      {/* ================================================================
          FEATURED DESTINATIONS
      ================================================================= */}
      <Section className="">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Start exploring
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Popular right <span className="text-lime-600 italic">now</span>
                </h2>
              </div>

              <p className="max-w-[340px] text-sm leading-6 text-black/45">
                The places our travelers are dreaming about, booking and exploring right now.
              </p>
            </div>

            {/* Featured grid */}
            <div className="grid gap-4 lg:grid-cols-2">
              {destinations
                .filter((destination) => destination.featured)
                .slice(0, 2)
                .map((destination, index) => (
                  <article
                    key={destination.name}
                    className={`group relative overflow-hidden rounded-[30px] ${
                      index === 0 ? 'h-[520px]' : 'h-[520px]'
                    }`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Favorite */}
                    <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur transition hover:scale-105">
                      <Heart className="h-4 w-4" />
                    </button>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                        <MapPin className="h-3 w-3" />
                        {destination.country}
                      </div>

                      <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        {destination.name}
                      </h3>

                      <p className="mt-3 max-w-[450px] text-sm leading-6 text-white/70">
                        {destination.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs text-white/60">
                          {destination.trips} trips available
                        </span>

                        <button className="flex items-center gap-2 rounded-full bg-[#b8f45a] px-4 py-2.5 text-xs font-bold text-black">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          ALL DESTINATIONS
      ================================================================= */}
      <Section className=" ">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            {/* Header */}
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  The collection
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Explore <span className="text-lime-600 italic">destinations</span>
                </h2>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex w-fit items-center gap-2 rounded-full border border-black/[0.08] px-4 py-2.5 text-sm font-semibold transition hover:bg-black/[0.03]"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Filters */}
            <div
              className={`mt-8 flex flex-wrap gap-2 transition-all ${
                showFilters ? 'max-h-40 opacity-100' : 'max-h-20 opacity-100'
              }`}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                      ? 'bg-[#111111] text-white'
                      : 'border border-black/[0.08] bg-white text-black/55 hover:border-black/20 hover:text-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((destination) => (
                <article key={destination.name} className="group">
                  {/* Image */}
                  <div className="relative h-[300px] overflow-hidden rounded-[26px]">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Favorite */}
                    <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 transition hover:scale-105">
                      <Heart className="h-4 w-4" />
                    </button>

                    {/* Type */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold">
                      {destination.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{destination.name}</h3>

                        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-black/45">
                          <MapPin className="h-3.5 w-3.5" />
                          {destination.country}
                        </div>
                      </div>

                      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] transition group-hover:bg-[#b8f45a]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/45">
                      {destination.description}
                    </p>

                    <p className="mt-4 text-xs font-medium text-black/40">
                      {destination.trips} trips available
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {filteredDestinations.length === 0 && (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf9d0]">
                  <Search className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">No destinations found</h3>

                <p className="mt-2 text-sm text-black/45">
                  Try searching for another destination or category.
                </p>

                <button
                  onClick={() => {
                    setSearch('');
                    setActiveFilter('All');
                  }}
                  className="mt-5 text-sm font-semibold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ================================================================
          REGIONS
      ================================================================= */}
      <Section className="">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[650px]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Go further
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                <span className="text-lime-600 italic">Explore</span> by region
              </h2>

              <p className="mt-5 text-base leading-7 text-black/50">
                Not sure where to begin? Pick a part of the world and see where it takes you.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {regions.map((region) => (
                <article
                  key={region.name}
                  className="group relative h-[330px] overflow-hidden rounded-[28px]"
                >
                  <img
                    src={region.image}
                    alt={region.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-2xl font-semibold">{region.name}</h3>

                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm text-white/60">{region.destinations}</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          INSPIRATION CTA
      ================================================================= */}
      <Section className="py-0!">
        <Container>
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#e8f9c7]">
            <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              {/* Text */}
              <div className="px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#b8f45a]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h2 className="max-w-[600px] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                  Don't know where
                  <br />
                  to go yet?
                </h2>

                <p className="mt-6 max-w-[500px] text-base leading-7 text-black/50">
                  That's okay. Tell us what kind of experience you're looking for and discover
                  destinations made for you.
                </p>

                <button className="mt-8 flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80">
                  Find my destination
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

              {/* Image */}
              <div className="relative h-[400px] lg:h-full lg:min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                  alt="Mountain destination"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-[20px] bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf9d0]">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">120+ destinations</p>

                      <p className="mt-0.5 text-xs text-black/45">waiting to be explored</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          FOOTER
      ================================================================= */}
      <footer className="px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b8f45a]">
              <span className="text-xs font-black">B</span>
            </div>

            <span className="font-semibold">Bracket.</span>
          </div>

          <p className="text-xs text-black/40">© 2026 Bracket Travel. Explore more. Live more.</p>

          <div className="flex gap-5 text-xs font-medium text-black/50">
            <a href="#" className="transition hover:text-black">
              Privacy
            </a>

            <a href="#" className="transition hover:text-black">
              Terms
            </a>

            <a href="#" className="transition hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
