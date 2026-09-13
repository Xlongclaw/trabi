'use client';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Container, Section } from '@/components/layout';

const agencies = [
  {
    name: 'Wanderlust Travels',
    location: 'New Delhi, India',
    specialty: 'International & Luxury Travel',
    rating: 4.9,
    reviews: 284,
    trips: 128,
    travelers: '2.4K+',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85',
    logo: 'WT',
    verified: true,
    popular: true,
  },
  {
    name: 'Nomad Trails',
    location: 'Mumbai, India',
    specialty: 'Adventure & Group Tours',
    rating: 4.8,
    reviews: 192,
    trips: 94,
    travelers: '1.8K+',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85',
    logo: 'NT',
    verified: true,
    popular: true,
  },
  {
    name: 'The Travel Circle',
    location: 'Bengaluru, India',
    specialty: 'Family & Holiday Packages',
    rating: 4.8,
    reviews: 156,
    trips: 86,
    travelers: '1.5K+',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    logo: 'TC',
    verified: true,
    popular: false,
  },
  {
    name: 'Roam & Beyond',
    location: 'Pune, India',
    specialty: 'Backpacking & Experiences',
    rating: 4.7,
    reviews: 121,
    trips: 72,
    travelers: '1.1K+',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85',
    logo: 'RB',
    verified: true,
    popular: false,
  },
  {
    name: 'Blue Horizon',
    location: 'Goa, India',
    specialty: 'Beach & Leisure Travel',
    rating: 4.9,
    reviews: 208,
    trips: 113,
    travelers: '2.1K+',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85',
    logo: 'BH',
    verified: true,
    popular: true,
  },
  {
    name: 'Explore More',
    location: 'Jaipur, India',
    specialty: 'Cultural & Heritage Tours',
    rating: 4.7,
    reviews: 97,
    trips: 65,
    travelers: '890+',
    image:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85',
    logo: 'EM',
    verified: true,
    popular: false,
  },
];

const categories = [
  'All agencies',
  'Luxury',
  'Adventure',
  'Family',
  'Backpacking',
  'Cultural',
  'Beach',
];

export default function TravelAgencies() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All agencies');
  const [sort, setSort] = useState('Recommended');

  const filteredAgencies = useMemo(() => {
    let result = agencies.filter((agency) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        agency.name.toLowerCase().includes(searchTerm) ||
        agency.location.toLowerCase().includes(searchTerm) ||
        agency.specialty.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === 'All agencies' ||
        agency.specialty.toLowerCase().includes(category.toLowerCase());

      return matchesSearch && matchesCategory;
    });

    if (sort === 'Rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === 'Reviews') {
      result = [...result].sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, category, sort]);

  return (
    <Section className="min-h-screen bg-[#fbfcf9] text-[#111111]">
      {/* ================================================================
          HERO
      ================================================================= */}
      {/* <Section className="relative overflow-hidden px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
        <Container>
         
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#e9fbc7] blur-3xl" />

          <div className="absolute right-[-160px] top-0 h-[450px] w-[450px] rounded-full bg-[#f0fbdc] blur-3xl" />

          <div className="relative mx-auto max-w-[1400px]">
            <div className="max-w-[900px]">
          
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaf9d0] px-4 py-2">
                <BadgeCheck className="h-3.5 w-3.5" />

                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Trusted travel partners
                </span>
              </div>

              <h1 className="text-[52px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
                Travel with
                <br />
                <span className="text-black/45">people you trust.</span>
              </h1>

              <p className="mt-7 max-w-[680px] text-base leading-7 text-black/55 sm:text-lg">
                Discover verified travel agencies that create unforgettable journeys. Compare their
                expertise, experiences and reviews — then find the right partner for your next
                adventure.
              </p>
            </div>

         
            <div className="mt-10 flex max-w-[900px] flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search agencies, destinations or experiences..."
                  className="
                  h-[60px]
                  w-full
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  pl-14
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

              <button className="flex h-[60px] items-center justify-center gap-2 rounded-full bg-[#111111] px-7 text-sm font-semibold text-white transition hover:bg-black/80">
                <Search className="h-4 w-4" />
                Find an agency
              </button>
            </div>

          
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-black/50">
                <BadgeCheck className="h-4 w-4 text-[#7ba52e]" />
                120+ verified agencies
              </div>

              <div className="flex items-center gap-2 text-sm text-black/50">
                <Star className="h-4 w-4 fill-current text-[#7ba52e]" />
                4.8 average rating
              </div>

              <div className="flex items-center gap-2 text-sm text-black/50">
                <Users className="h-4 w-4 text-[#7ba52e]" />
                50K+ travelers
              </div>
            </div>
          </div>
        </Container>
      </Section> */}

      {/* ================================================================
          FEATURED AGENCIES
      ================================================================= */}
      <Section className="py-0!">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Handpicked for you
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Trusted <span className="text-lime-600 italic">agencies</span>
                </h2>
              </div>

              <p className="max-w-[370px] text-sm leading-6 text-black/45">
                Explore highly rated agencies trusted by travelers for their expertise, service and
                unforgettable experiences.
              </p>
            </div>

            {/* Featured cards */}
            <div className="grid gap-5 lg:grid-cols-3">
              {agencies
                .filter((agency) => agency.popular)
                .map((agency) => (
                  <article
                    key={agency.name}
                    className="group overflow-hidden rounded-[30px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                  >
                    {/* Image */}
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={agency.image}
                        alt={agency.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Verified */}
                      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold">
                        <BadgeCheck className="h-3.5 w-3.5 text-[#719d28]" />
                        Verified
                      </div>

                      {/* Logo */}
                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8f45a] text-sm font-black">
                        {agency.logo}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight">{agency.name}</h3>

                          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-black/45">
                            <MapPin className="h-3.5 w-3.5" />
                            {agency.location}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 rounded-full bg-[#f1f8e5] px-2.5 py-1.5 text-xs font-bold">
                          <Star className="h-3 w-3 fill-current" />
                          {agency.rating}
                        </div>
                      </div>

                      <p className="mt-4 text-sm font-medium text-black/55">{agency.specialty}</p>

                      <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-5">
                        <div>
                          <p className="text-sm font-semibold">{agency.trips} trips</p>

                          <p className="mt-0.5 text-xs text-black/40">
                            {agency.travelers} travelers
                          </p>
                        </div>

                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white transition group-hover:bg-[#b8f45a] group-hover:text-black">
                          <ArrowRight className="h-4 w-4" />
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
          ALL AGENCIES
      ================================================================= */}
      <Section className="border-y border-black/[0.06] bg-white  py-0!">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Browse the network
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Find your travel partner
                </h2>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-11 appearance-none rounded-full border border-black/[0.08] bg-white pl-4 pr-10 text-sm font-medium outline-none"
                >
                  <option>Recommended</option>
                  <option>Rating</option>
                  <option>Reviews</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Categories */}
            <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    category === item
                      ? 'bg-[#111111] text-white'
                      : 'border border-black/[0.08] text-black/50 hover:border-black/20 hover:text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Agency list */}
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredAgencies.map((agency) => (
                <article
                  key={agency.name}
                  className="group overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#fbfcf9] transition hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(0,0,0,0.07)]"
                >
                  {/* Image */}
                  <div className="relative h-[210px] overflow-hidden">
                    <img
                      src={agency.image}
                      alt={agency.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#719d28]" />
                      Verified
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Agency identity */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b8f45a] text-xs font-black">
                        {agency.logo}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold">{agency.name}</h3>

                        <div className="mt-0.5 flex items-center gap-1 text-xs text-black/40">
                          <MapPin className="h-3 w-3" />
                          {agency.location}
                        </div>
                      </div>
                    </div>

                    {/* Specialty */}
                    <p className="mt-4 text-sm text-black/50">{agency.specialty}</p>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-[#edf7dc] px-2.5 py-1.5 text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        {agency.rating}
                      </div>

                      <span className="text-xs text-black/40">{agency.reviews} reviews</span>
                    </div>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/[0.07] pt-5">
                      <div>
                        <p className="text-sm font-semibold">{agency.trips}</p>

                        <p className="mt-0.5 text-xs text-black/40">Trips available</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold">{agency.travelers}</p>

                        <p className="mt-0.5 text-xs text-black/40">Travelers</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] py-3 text-sm font-semibold text-white transition hover:bg-black/80">
                      View agency
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty */}
            {filteredAgencies.length === 0 && (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf9d0]">
                  <Search className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">No agencies found</h3>

                <p className="mt-2 text-sm text-black/45">Try a different search or category.</p>

                <button
                  onClick={() => {
                    setSearch('');
                    setCategory('All agencies');
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
          WHY TRUST BRACKET
      ================================================================= */}
      <Section className="">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              {/* Heading */}
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Travel with confidence
                </p>

                <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                  Every agency,
                  <br />
                  <span className="text-black/40">worth trusting.</span>
                </h2>

                <p className="mt-6 max-w-[480px] text-base leading-7 text-black/50">
                  We make it easier to discover legitimate, experienced travel partners so you can
                  focus on planning the journey.
                </p>
              </div>

              {/* Features */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-[#e9f9c8] p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b8f45a]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">Verified partners</h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Every agency goes through our verification process before joining the network.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f5eb]">
                    <Star className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">Real traveler reviews</h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    See what other travelers experienced before choosing your travel partner.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f5eb]">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">Local expertise</h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Find agencies with genuine destination knowledge and local connections.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#111111] p-7 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                    <Users className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">Built for travelers</h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Compare, discover and connect with the right agency for your style of travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          AGENCY CTA
      ================================================================= */}
      <Section className="py-0!">
        <Container>
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#b8f45a]">
            <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              <div className="px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">
                  Are you a travel agency?
                </p>

                <h2 className="max-w-[650px] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                  Put your journeys
                  <br />
                  in front of more travelers.
                </h2>

                <p className="mt-6 max-w-[540px] text-base leading-7 text-black/55">
                  Join Bracket and showcase your trips, experiences and expertise to travelers
                  looking for their next adventure.
                </p>

                <button className="mt-8 flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80">
                  Become a partner
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <div className="relative hidden h-full min-h-[430px] lg:block">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=85"
                  alt="Travelers exploring a destination"
                  className="absolute inset-5 h-[calc(100%-40px)] w-[calc(100%-40px)] rounded-[28px] object-cover"
                />
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
    </Section>
  );
}
