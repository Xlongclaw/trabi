'use client';

import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import SearchPageBar from './components/search-page-bar';
import { Container, Section } from '@/components/layout';

interface Trip {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  duration: string;
  price: string;
  host: string;
  joined: number;
  left: number;
  avatar: string;
  image: string;
  href: string;
}

const trips: Trip[] = [
  {
    id: 'spiti-autumn-01',
    title: 'Spiti in Autumn',
    category: 'Road Trip',
    rating: 4.9,
    reviews: 48,
    location: 'Spiti Valley',
    duration: '6 days',
    price: '₹14,999',
    host: 'Arjun Mehta',
    joined: 12,
    left: 8,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    image: 'https://images.unsplash.com/photo-1620398762817-ff3885718863?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/spiti-autumn-01',
  },
  {
    id: 'manali-winter-02',
    title: 'Manali Winter Escape',
    category: 'Adventure',
    rating: 4.8,
    reviews: 36,
    location: 'Manali',
    duration: '4 days',
    price: '₹9,499',
    host: 'Rahul Kumar',
    joined: 8,
    left: 2,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/manali-winter-02',
  },
  {
    id: 'goa-beach-03',
    title: 'Goa Beach Weekend',
    category: 'Beach',
    rating: 4.7,
    reviews: 62,
    location: 'Goa',
    duration: '4 days',
    price: '₹6,999',
    host: 'Priya Sharma',
    joined: 15,
    left: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    image: 'https://images.unsplash.com/photo-1698430185884-a88ff520f03e?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/goa-beach-03',
  },
  {
    id: 'rishikesh-camp-04',
    title: 'Rishikesh River Camp',
    category: 'Camping',
    rating: 4.8,
    reviews: 54,
    location: 'Rishikesh',
    duration: '3 days',
    price: '₹7,499',
    host: 'Himalayan Adventures',
    joined: 10,
    left: 6,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HimAdv',
    image: 'https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/rishikesh-camp-04',
  },
  {
    id: 'ladakh-bike-05',
    title: 'Ladakh Bike Expedition',
    category: 'Road Trip',
    rating: 5,
    reviews: 29,
    location: 'Ladakh',
    duration: '10 days',
    price: '₹22,999',
    host: 'Dev Patel',
    joined: 6,
    left: 4,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
    image: 'https://images.unsplash.com/photo-1643368214091-6af1a029aee0?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/ladakh-bike-05',
  },
  {
    id: 'kerala-backwaters-06',
    title: 'Kerala Backwaters',
    category: 'Nature',
    rating: 4.9,
    reviews: 41,
    location: 'Kerala',
    duration: '5 days',
    price: '₹12,499',
    host: 'Ananya Nair',
    joined: 11,
    left: 4,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000&q=85&fit=crop',
    href: '/travel/trip-details/kerala-backwaters-06',
  },
];

const categories = ['All', 'Road Trip', 'Adventure', 'Beach', 'Camping', 'Nature', 'Backpacking'];

function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className="group min-w-0">
      <Link href={trip.href} className="block">
        <div className="relative h-[260px] overflow-hidden rounded-[24px] sm:h-[290px]">
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide">
            {trip.category}
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold">
            <Star className="h-3.5 w-3.5 fill-current" />
            {trip.rating}
            <span className="font-normal text-black/45">({trip.reviews})</span>
          </div>

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link href={trip.href}>
              <h3 className="truncate text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-theme-green">
                {trip.title}
              </h3>
            </Link>

            <div className="mt-1.5 flex items-center gap-1.5 text-sm text-black/45">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>{trip.location}</span>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-lg font-semibold">{trip.price}</p>
            <p className="text-[11px] text-black/40">/ person</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-black/[0.07] pt-4">
          <div className="flex items-center gap-4 text-xs text-black/50">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {trip.duration}
            </span>

            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {trip.left} spots left
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={trip.avatar}
              alt={trip.host}
              width={26}
              height={26}
              className="h-6 w-6 rounded-full bg-[#f0f0ed]"
            />
            <span className="hidden text-xs font-medium text-black/60 sm:inline">{trip.host}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SearchPageContent() {
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('q') ?? '';
  const initialCategory = searchParams.get('category') ?? 'All';
  const initialLocation = searchParams.get('location') ?? '';

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState(initialLocation);
  const [sort, setSort] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    let filtered = trips.filter((trip) => {
      const matchesQuery =
        !normalizedQuery ||
        trip.title.toLowerCase().includes(normalizedQuery) ||
        trip.location.toLowerCase().includes(normalizedQuery) ||
        trip.category.toLowerCase().includes(normalizedQuery) ||
        trip.host.toLowerCase().includes(normalizedQuery);

      const matchesCategory = category === 'All' || trip.category === category;

      const matchesLocation =
        !normalizedLocation || trip.location.toLowerCase().includes(normalizedLocation);

      return matchesQuery && matchesCategory && matchesLocation;
    });

    if (sort === 'price-low') {
      filtered = [...filtered].sort(
        (a, b) => Number(a.price.replace(/[₹,]/g, '')) - Number(b.price.replace(/[₹,]/g, '')),
      );
    }

    if (sort === 'price-high') {
      filtered = [...filtered].sort(
        (a, b) => Number(b.price.replace(/[₹,]/g, '')) - Number(a.price.replace(/[₹,]/g, '')),
      );
    }

    if (sort === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [query, category, location, sort]);

  const clearFilters = () => {
    setQuery('');
    setCategory('All');
    setLocation('');
  };

  return (
    <main className="min-h-screen bg-[#fbfcf9] text-theme-dark">
      <SearchPageBar />
      {/* Search Hero */}
      {/* <Section className="border-b border-black/[0.06]">
        <Container>
          <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-12 sm:px-8 lg:px-10 lg:pb-16 lg:pt-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Explore journeys
              </p>

              <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
                Find somewhere
                <br />
                <span className="italic text-theme-green">worth going.</span>
              </h1>
            </div>

       
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-10 flex max-w-[1050px] flex-col gap-2 rounded-[24px] bg-white p-2 shadow-[0_12px_50px_rgba(0,0,0,0.08)] sm:flex-row"
            >
              <div className="flex min-h-14 flex-1 items-center gap-3 rounded-[18px] px-4">
                <Search className="h-5 w-5 shrink-0 text-black/35" />

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search trips, destinations, experiences..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-black/35 sm:text-base"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.06]"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <div className="hidden h-8 self-center border-l border-black/[0.08] sm:block" />

              <div className="flex min-h-14 items-center gap-3 rounded-[18px] px-4 sm:w-[240px]">
                <MapPin className="h-5 w-5 shrink-0 text-black/35" />

                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Where to?"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
                />
              </div>

              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-[18px] bg-theme-dark px-7 text-sm font-bold text-white transition hover:bg-theme-green"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </form>
          </div>
        </Container>
      </Section> */}

      {/* Results */}
      <Section className="mx-auto max-w-[1400px] py-10!">
        <Container>
          {/* Mobile filter button */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="mb-6 flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-4 py-2.5 text-sm font-semibold lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-40">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold">Filter by</h2>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-medium text-theme-green"
                  >
                    Clear all
                  </button>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-black/35">
                    Trip type
                  </p>

                  <div className="space-y-1">
                    {categories.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                          category === item
                            ? 'bg-theme-lime font-semibold'
                            : 'text-black/60 hover:bg-black/[0.04] hover:text-theme-dark'
                        }`}
                      >
                        {item}

                        {category === item && (
                          <span className="h-1.5 w-1.5 rounded-full bg-theme-dark" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-7 border-t border-black/[0.07]" />

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-black/35">
                    Popular destinations
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Himachal', 'Goa', 'Ladakh', 'Kerala', 'Rajasthan'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setLocation(item)}
                        className={`rounded-full border px-3 py-2 text-xs transition ${
                          location === item
                            ? 'border-theme-dark bg-theme-dark text-white'
                            : 'border-black/[0.09] bg-white hover:border-black/20'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Results */}
            <div className="min-w-0">
              {/* Results header */}
              <div className="mb-7 flex flex-col gap-4 border-b border-black/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-black/45">
                    <span className="font-semibold text-theme-dark">{results.length}</span>{' '}
                    {results.length === 1 ? 'journey' : 'journeys'} found
                  </p>

                  {(query || location || category !== 'All') && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {query && (
                        <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs">
                          “{query}”
                        </span>
                      )}

                      {location && (
                        <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs">
                          {location}
                        </span>
                      )}

                      {category !== 'All' && (
                        <span className="rounded-full bg-theme-lime px-3 py-1 text-xs font-medium">
                          {category}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="relative flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-xs text-black/40">Sort:</span>

                  <div className="relative">
                    <select
                      value={sort}
                      onChange={(event) => setSort(event.target.value)}
                      className="appearance-none rounded-full border border-black/[0.09] bg-white py-2 pl-3 pr-9 text-xs font-semibold outline-none"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="rating">Top rated</option>
                      <option value="price-low">Price: Low to high</option>
                      <option value="price-high">Price: High to low</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Cards */}
              {results.length > 0 ? (
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[28px] border border-black/[0.07] bg-white px-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f9c7]">
                    <Search className="h-6 w-6" />
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">No journeys found</h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-black/45">
                    We couldn't find trips matching your search. Try another destination or remove
                    some filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 rounded-full bg-theme-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-theme-green"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination placeholder */}
              {results.length > 0 && (
                <div className="mt-14 flex justify-center">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-6 py-3 text-sm font-semibold transition hover:bg-theme-dark hover:text-white"
                  >
                    Load more journeys
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


export default function SearchPage(){
  return <Suspense>
    <SearchPageContent/>
  </Suspense>
}