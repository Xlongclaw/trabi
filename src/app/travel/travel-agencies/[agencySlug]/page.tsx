'use client';

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';

interface AgencyPackagesPageProps {
  agencySlug?: string;
}

interface Package {
  id: number;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  featured?: boolean;
  tags: string[];
}

const packages: Package[] = [
  {
    id: 1,
    title: 'Spiti Valley Adventure',
    destination: 'Himachal Pradesh, India',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 12 people',
    price: 28999,
    oldPrice: 32999,
    rating: 4.9,
    reviews: 86,
    category: 'Adventure',
    featured: true,
    tags: ['Road Trip', 'Mountains'],
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 2,
    title: 'Kerala Backwaters Escape',
    destination: 'Kerala, India',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 10 people',
    price: 24999,
    oldPrice: 28999,
    rating: 4.8,
    reviews: 64,
    category: 'Leisure',
    tags: ['Backwaters', 'Relaxation'],
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 3,
    title: 'Rajasthan Heritage Trail',
    destination: 'Rajasthan, India',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 14 people',
    price: 21999,
    rating: 4.8,
    reviews: 52,
    category: 'Cultural',
    tags: ['Heritage', 'Culture'],
    image:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 4,
    title: 'Ladakh Motorcycle Expedition',
    destination: 'Ladakh, India',
    duration: '10 Days / 9 Nights',
    groupSize: 'Up to 8 people',
    price: 39999,
    oldPrice: 44999,
    rating: 4.9,
    reviews: 91,
    category: 'Adventure',
    featured: true,
    tags: ['Motorcycle', 'Adventure'],
    image:
      'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 5,
    title: 'Goa Slow Travel',
    destination: 'Goa, India',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 10 people',
    price: 16999,
    rating: 4.7,
    reviews: 43,
    category: 'Beach',
    tags: ['Beach', 'Food'],
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 6,
    title: 'Meghalaya Hidden Trails',
    destination: 'Meghalaya, India',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 10 people',
    price: 25999,
    rating: 4.9,
    reviews: 38,
    category: 'Adventure',
    tags: ['Waterfalls', 'Nature'],
    image:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85',
  },
];

const categories = ['All packages', 'Adventure', 'Cultural', 'Leisure', 'Beach'];

const formatPrice = (price: number) => new Intl.NumberFormat('en-IN').format(price);

export default function AgencyPackagesPage({ agencySlug }: AgencyPackagesPageProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All packages');
  const [sort, setSort] = useState('Recommended');

  /*
   * Replace this static object with:
   *
   * const agency = await getAgency(agencySlug)
   *
   * once the API is connected.
   */
  const agency = {
    name: 'Wanderlust Travels',
    slug: agencySlug ?? 'wanderlust-travels',
    location: 'New Delhi, India',
    specialty: 'International & Luxury Travel',
    rating: 4.9,
    reviews: 284,
    trips: 128,
    travelers: '2.4K+',
    years: 8,
    verified: true,
    logo: 'WT',
    coverImage:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85',
  };

  const filteredPackages = useMemo(() => {
    let result = packages.filter((item) => {
      const term = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(term) ||
        item.destination.toLowerCase().includes(term) ||
        item.tags.some((tag) => tag.toLowerCase().includes(term));

      const matchesCategory = category === 'All packages' || item.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === 'Top Rated') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <div className="min-h-screen bg-[#fbfcf9] text-[#111111]">
      {/* ================================================================
          NAVBAR
      ================================================================= */}
      <header className="border-b border-black/[0.06] bg-[#fbfcf9]">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8f45a]">
              <span className="text-sm font-black">B</span>
            </div>

            <span className="text-xl font-semibold tracking-[-0.03em]">Bracket.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/destinations"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Destinations
            </a>

            <a
              href="/trips"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Trips
            </a>

            <a
              href="/travel-agencies"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              Travel agencies
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-black/50 transition hover:text-black"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm font-semibold sm:block">Log in</button>

            <button className="flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black/80">
              Join us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ================================================================
          AGENCY HEADER
      ================================================================= */}
      <section className="px-5 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-black/40">
            <a href="/travel-agencies" className="hover:text-black">
              Travel agencies
            </a>

            <span>/</span>

            <span className="text-black/70">{agency.name}</span>
          </div>

          {/* Cover */}
          <div className="relative h-[280px] overflow-hidden rounded-[32px] sm:h-[360px] lg:h-[420px]">
            <img src={agency.coverImage} alt={agency.name} className="h-full w-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Agency identity */}
            <div className="absolute bottom-7 left-6 right-6 flex flex-col gap-5 sm:bottom-9 sm:left-9 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4 text-white">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#b8f45a] text-lg font-black text-black shadow-xl sm:h-20 sm:w-20">
                  {agency.logo}
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {agency.name}
                    </h1>

                    {agency.verified && (
                      <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-black">
                        <BadgeCheck className="h-3.5 w-3.5 text-[#719d28]" />
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {agency.location}
                    </span>

                    <span>•</span>

                    <span>{agency.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-black">
                <Star className="h-4 w-4 fill-current" />
                {agency.rating}
                <span className="font-normal text-black/40">({agency.reviews})</span>
              </div>
            </div>
          </div>

          {/* Agency stats */}
          <div className="grid grid-cols-2 divide-x divide-black/[0.08] rounded-b-[24px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:grid-cols-4">
            <div className="p-5 text-center sm:p-6">
              <p className="text-xl font-semibold">{agency.trips}</p>
              <p className="mt-1 text-xs text-black/40">Trips created</p>
            </div>

            <div className="p-5 text-center sm:p-6">
              <p className="text-xl font-semibold">{agency.travelers}</p>
              <p className="mt-1 text-xs text-black/40">Happy travelers</p>
            </div>

            <div className="p-5 text-center sm:p-6">
              <p className="text-xl font-semibold">{agency.years}+</p>
              <p className="mt-1 text-xs text-black/40">Years experience</p>
            </div>

            <div className="p-5 text-center sm:p-6">
              <p className="flex items-center justify-center gap-1 text-xl font-semibold">
                <Star className="h-4 w-4 fill-current" />
                {agency.rating}
              </p>
              <p className="mt-1 text-xs text-black/40">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PACKAGES
      ================================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Explore their journeys
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Trips by {agency.name}
              </h2>

              <p className="mt-4 max-w-[620px] text-sm leading-6 text-black/45 sm:text-base">
                Choose from carefully designed experiences and discover your next unforgettable
                journey.
              </p>
            </div>

            <div className="text-sm text-black/40">
              <span className="font-semibold text-black">{filteredPackages.length}</span> packages
              available
            </div>
          </div>

          {/* Search */}
          <div className="mt-9 flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/30" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search trips, destinations or experiences..."
                className="
                  h-14
                  w-full
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  pl-14
                  pr-5
                  text-sm
                  outline-none
                  transition
                  placeholder:text-black/30
                  focus:border-[#a8db55]
                  focus:ring-4
                  focus:ring-[#b8f45a]/20
                "
              />
            </div>

            <div className="relative">
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="
                  h-14
                  w-full
                  appearance-none
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  pl-11
                  pr-11
                  text-sm
                  font-medium
                  outline-none
                  lg:w-[210px]
                "
              >
                <option>Recommended</option>
                <option>Top Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  category === item
                    ? 'bg-[#111111] text-white'
                    : 'border border-black/[0.08] bg-white text-black/50 hover:border-black/20 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Package grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[30px] bg-white shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]"
              >
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                  {item.featured && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#b8f45a] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide">
                      Popular
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold">
                    <Star className="h-3 w-3 fill-current" />
                    {item.rating}
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em]">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5 text-xs text-black/40">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.destination}
                      </div>
                    </div>
                  </div>

                  {/* Package info */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 rounded-xl bg-[#f6f7f3] p-3">
                      <Clock3 className="h-4 w-4 text-black/45" />

                      <div>
                        <p className="text-[10px] text-black/35">Duration</p>
                        <p className="mt-0.5 text-xs font-semibold">{item.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl bg-[#f6f7f3] p-3">
                      <Users className="h-4 w-4 text-black/45" />

                      <div>
                        <p className="text-[10px] text-black/35">Group</p>
                        <p className="mt-0.5 text-xs font-semibold">{item.groupSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-black/40">
                    <div className="flex items-center gap-1 text-black">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="font-semibold">{item.rating}</span>
                    </div>

                    <span>•</span>

                    <span>{item.reviews} reviews</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-6 flex items-end justify-between border-t border-black/[0.07] pt-5">
                    <div>
                      <p className="text-[11px] text-black/35">Starting from</p>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xl font-semibold">₹{formatPrice(item.price)}</span>

                        {item.oldPrice && (
                          <span className="text-xs text-black/30 line-through">
                            ₹{formatPrice(item.oldPrice)}
                          </span>
                        )}
                      </div>

                      <p className="mt-0.5 text-[11px] text-black/35">per person</p>
                    </div>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white transition group-hover:bg-[#b8f45a] group-hover:text-black">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredPackages.length === 0 && (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf9d0]">
                <Search className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">No packages found</h3>

              <p className="mt-2 text-sm text-black/45">Try changing your search or category.</p>

              <button
                onClick={() => {
                  setSearch('');
                  setCategory('All packages');
                }}
                className="mt-5 text-sm font-semibold underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================
          ABOUT AGENCY
      ================================================================= */}
      <section className="border-y border-black/[0.06] bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Why travel with them
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
              Experience
              <br />
              <span className="text-black/40">that matters.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-[#e9f9c8] p-7">
              <BadgeCheck className="h-6 w-6" />

              <h3 className="mt-6 text-xl font-semibold">Verified agency</h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                This agency has been reviewed and verified by the Bracket travel network.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f6f7f3] p-7">
              <Star className="h-6 w-6" />

              <h3 className="mt-6 text-xl font-semibold">Highly rated</h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Consistently rated highly by travelers who have experienced their trips.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f6f7f3] p-7">
              <Users className="h-6 w-6" />

              <h3 className="mt-6 text-xl font-semibold">Experienced team</h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Years of experience helping travelers discover new places and meaningful
                experiences.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#111111] p-7 text-white">
              <CalendarDays className="h-6 w-6 text-[#b8f45a]" />

              <h3 className="mt-6 text-xl font-semibold">Curated journeys</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Carefully planned itineraries designed around the destination, not just a checklist
                of attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================= */}
      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-[#b8f45a] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">
                Ready to explore?
              </p>

              <h2 className="max-w-[720px] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                Your next story
                <br />
                starts here.
              </h2>

              <p className="mt-6 max-w-[560px] text-base leading-7 text-black/55">
                Find a journey that feels like you and start planning your next adventure with{' '}
                {agency.name}.
              </p>
            </div>

            <button className="flex w-fit items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80">
              Explore packages
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
      ================================================================= */}
      <footer className="px-5 pb-8 pt-4 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b8f45a]">
              <span className="text-xs font-black">B</span>
            </div>

            <span className="font-semibold">Bracket.</span>
          </div>

          <p className="text-xs text-black/40">© 2026 Bracket Travel. Explore more. Live more.</p>

          <div className="flex gap-5 text-xs font-medium text-black/50">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>

            <a href="#" className="hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
