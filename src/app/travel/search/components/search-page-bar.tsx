'use client';

import { ArrowLeft, CalendarDays, MapPin, Minus, Plus, Search, Users, X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/layout';

const destinations = ['Spiti Valley', 'Manali', 'Goa', 'Rishikesh', 'Ladakh', 'Kerala'];

export default function SearchPageBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(
    searchParams.get('location') || searchParams.get('q') || '',
  );
  const [startDate, setStartDate] = useState(searchParams.get('startDate') || '');
  const [endDate, setEndDate] = useState(searchParams.get('endDate') || '');
  const [travelers, setTravelers] = useState(Number(searchParams.get('travelers')) || 2);

  const [activeField, setActiveField] = useState<'location' | 'dates' | 'travelers' | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState(location);

  useEffect(() => {
    setLocation(searchParams.get('location') || searchParams.get('q') || '');
    setStartDate(searchParams.get('startDate') || '');
    setEndDate(searchParams.get('endDate') || '');
    setTravelers(Number(searchParams.get('travelers')) || 2);
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location.trim()) {
      params.set('q', location.trim());
      params.set('location', location.trim());
    }

    if (startDate) {
      params.set('startDate', startDate);
    }

    if (endDate) {
      params.set('endDate', endDate);
    }

    params.set('travelers', String(travelers));

    router.push(`${pathname}?${params.toString()}`);

    setActiveField(null);
    setMobileSearchOpen(false);
  };

  const handleMobileLocationSelect = (value: string) => {
    setLocation(value);
    setMobileQuery(value);
  };

  const clearSearch = () => {
    setLocation('');
    setStartDate('');
    setEndDate('');
    setTravelers(2);
    setActiveField(null);
    setMobileQuery('');
    setMobileSearchOpen(false);

    router.push(pathname);
  };

  const filteredDestinations = destinations.filter((item) =>
    item.toLowerCase().includes(mobileQuery.toLowerCase()),
  );

  return (
    <>
      {/* MOBILE SEARCH BAR */}
      <div className="sticky top-16 z-40 border-b border-black/[0.06] bg-gray-100/95 px-4 py-3 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={() => {
            setMobileQuery(location);
            setMobileSearchOpen(true);
          }}
          className="flex min-h-[52px] w-full items-center gap-3 rounded-full border border-black/[0.08] bg-white px-4 text-left  transition active:scale-[0.99]"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4f5ef]">
            <Search className="h-4 w-4 text-black/60" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
              Where
            </p>

            <p className="mt-0.5 truncate text-sm font-medium text-theme-dark">
              {location || 'Where are you going?'}
            </p>
          </div>

          {location && (
            <span className="shrink-0 rounded-full bg-theme-lime px-2.5 py-1 text-[10px] font-semibold text-theme-dark">
              Edit
            </span>
          )}
        </button>
      </div>

      {/* DESKTOP SEARCH BAR */}
      <div className="sticky top-16 z-40 hidden border-b border-black/[0.06] bg-white/95 px-4 py-3 backdrop-blur-xl md:block sm:px-6 lg:px-8">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
              <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
                {/* WHERE */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveField(activeField === 'location' ? null : 'location')}
                    className="flex min-h-[54px] w-full items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 text-left transition hover:bg-[#f0f2eb]"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-black/50" />

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                        Where
                      </p>

                      <p className="mt-0.5 truncate text-sm font-medium">
                        {location || 'Anywhere'}
                      </p>
                    </div>
                  </button>

                  {activeField === 'location' && (
                    <div className="absolute left-0 right-0 top-[62px] z-50 rounded-2xl border border-black/[0.06] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                      <div className="flex items-center gap-3 rounded-xl bg-[#f7f8f4] px-3">
                        <MapPin className="h-4 w-4 shrink-0 text-black/40" />

                        <input
                          autoFocus
                          type="text"
                          value={location}
                          onChange={(event) => setLocation(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') handleSearch();
                          }}
                          placeholder="Search destination..."
                          className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-black/40"
                        />
                      </div>

                      <div className="mt-2">
                        {destinations
                          .filter(
                            (item) =>
                              !location || item.toLowerCase().includes(location.toLowerCase()),
                          )
                          .map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setLocation(item);
                                setActiveField(null);
                              }}
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-[#f7f8f4]"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f9c7]">
                                <MapPin className="h-4 w-4" />
                              </div>

                              <span className="text-sm font-medium">{item}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* WHEN */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveField(activeField === 'dates' ? null : 'dates')}
                    className="flex min-h-[54px] w-full items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 text-left transition hover:bg-[#f0f2eb]"
                  >
                    <CalendarDays className="h-5 w-5 shrink-0 text-black/50" />

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                        When
                      </p>

                      <p className="mt-0.5 truncate text-sm font-medium">
                        {startDate
                          ? endDate
                            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                            : formatDate(startDate)
                          : 'Any dates'}
                      </p>
                    </div>
                  </button>

                  {activeField === 'dates' && (
                    <DatePicker
                      startDate={startDate}
                      endDate={endDate}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                      onDone={() => setActiveField(null)}
                    />
                  )}
                </div>

                {/* TRAVELERS */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveField(activeField === 'travelers' ? null : 'travelers')}
                    className="flex min-h-[54px] w-full items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 text-left transition hover:bg-[#f0f2eb]"
                  >
                    <Users className="h-5 w-5 shrink-0 text-black/50" />

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                        Travelers
                      </p>

                      <p className="mt-0.5 truncate text-sm font-medium">
                        {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
                      </p>
                    </div>
                  </button>

                  {activeField === 'travelers' && (
                    <TravelerPicker
                      travelers={travelers}
                      setTravelers={setTravelers}
                      onDone={() => setActiveField(null)}
                    />
                  )}
                </div>

                {/* SEARCH */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-theme-dark px-6 text-sm font-semibold text-white transition hover:bg-theme-green active:scale-[0.98]"
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
              </div>

              {(location || startDate || endDate || travelers !== 2) && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold text-black/50 transition hover:bg-black/[0.04] hover:text-theme-dark"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* MOBILE SEARCH MODAL */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden">
          <div className="flex h-full flex-col">
            {/* HEADER */}
            <div className="flex shrink-0 items-center gap-3 border-b border-black/[0.06] px-4 py-3">
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:bg-black/[0.04]"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-theme-dark">Find your trip</p>

                <p className="text-xs text-black/40">
                  Choose your destination, dates and travelers
                </p>
              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 py-5">
              {/* WHERE */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-black/40">
                  Where
                </p>

                <div className="flex items-center gap-3 rounded-2xl border border-black/[0.1] bg-[#f7f8f4] px-4">
                  <Search className="h-5 w-5 shrink-0 text-black/45" />

                  <input
                    autoFocus
                    type="text"
                    value={mobileQuery}
                    onChange={(event) => setMobileQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && mobileQuery.trim())
                        handleMobileLocationSelect(mobileQuery.trim());
                    }}
                    placeholder="Where do you want to go?"
                    className="h-14 min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-black/35"
                  />

                  {mobileQuery && (
                    <button
                      type="button"
                      onClick={() => setMobileQuery('')}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.06]"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                <div className="mt-3">
                  <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-black/35">
                    Popular destinations
                  </p>

                  <div className="space-y-1">
                    {filteredDestinations.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleMobileLocationSelect(item)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${location === item ? 'bg-[#e8f9c7]' : 'hover:bg-[#f7f8f4]'}`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f9c7]">
                          <MapPin className="h-4 w-4 text-theme-dark" />
                        </div>

                        <span className="text-sm font-medium">{item}</span>

                        {location === item && (
                          <span className="ml-auto text-xs font-semibold text-theme-dark">
                            Selected
                          </span>
                        )}
                      </button>
                    ))}

                    {filteredDestinations.length === 0 && mobileQuery.trim() && (
                      <button
                        type="button"
                        onClick={() => handleMobileLocationSelect(mobileQuery.trim())}
                        className="flex w-full items-center gap-3 rounded-xl bg-[#f7f8f4] px-3 py-3 text-left"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f9c7]">
                          <Search className="h-4 w-4 text-theme-dark" />
                        </div>

                        <span className="text-sm font-medium">Search for "{mobileQuery}"</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* WHEN */}
              <div className="mt-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-black/40">
                  When
                </p>

                <div className="rounded-2xl border border-black/[0.08] bg-[#f7f8f4] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                      <CalendarDays className="h-5 w-5 text-black/55" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">Travel dates</p>

                      <p className="mt-0.5 text-xs text-black/40">
                        {startDate
                          ? endDate
                            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                            : formatDate(startDate)
                          : 'Choose your dates'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-medium text-black/45">
                        Start date
                      </span>

                      <input
                        type="date"
                        value={startDate}
                        min={today()}
                        onChange={(event) => {
                          setStartDate(event.target.value);
                          if (endDate && event.target.value > endDate) setEndDate('');
                        }}
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-3 py-3 text-sm outline-none focus:border-black/20"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-medium text-black/45">
                        End date
                      </span>

                      <input
                        type="date"
                        value={endDate}
                        min={startDate || today()}
                        disabled={!startDate}
                        onChange={(event) => setEndDate(event.target.value)}
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-3 py-3 text-sm outline-none focus:border-black/20 disabled:cursor-not-allowed disabled:opacity-40"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* TRAVELERS */}
              <div className="mt-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-black/40">
                  Travelers
                </p>

                <div className="flex items-center justify-between rounded-2xl border border-black/[0.08] bg-[#f7f8f4] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                      <Users className="h-5 w-5 text-black/55" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Travelers</p>
                      <p className="mt-0.5 text-xs text-black/40">Who's joining you?</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={travelers <= 1}
                      onClick={() => setTravelers((value) => Math.max(1, value - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.1] bg-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="w-6 text-center text-sm font-semibold">{travelers}</span>

                    <button
                      type="button"
                      disabled={travelers >= 20}
                      onClick={() => setTravelers((value) => Math.min(20, value + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.1] bg-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE FOOTER */}
            <div className="shrink-0 border-t border-black/[0.06] bg-white p-4">
              <div className="flex gap-3">
                {(location || startDate || endDate || travelers !== 2) && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="flex h-12 items-center justify-center rounded-xl border border-black/[0.08] px-5 text-sm font-semibold text-black/60 transition hover:bg-black/[0.03]"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-theme-dark px-5 text-sm font-semibold text-white transition hover:bg-theme-green active:scale-[0.98]"
                >
                  <Search className="h-4 w-4" />
                  Search trips
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DatePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onDone,
}: {
  startDate: string;
  endDate: string;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  onDone: () => void;
}) {
  return (
    <div className="absolute left-0 right-0 top-[62px] z-50 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:w-[320px]">
      <p className="text-sm font-semibold">Choose your dates</p>

      <div className="mt-4 grid gap-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-black/45">Start date</span>

          <input
            type="date"
            value={startDate}
            min={today()}
            onChange={(event) => {
              setStartDate(event.target.value);
              if (endDate && event.target.value > endDate) setEndDate('');
            }}
            className="w-full rounded-xl border border-black/[0.08] bg-[#f7f8f4] px-3 py-2.5 text-sm outline-none focus:border-black/20"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-black/45">End date</span>

          <input
            type="date"
            value={endDate}
            min={startDate || today()}
            disabled={!startDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="w-full rounded-xl border border-black/[0.08] bg-[#f7f8f4] px-3 py-2.5 text-sm outline-none focus:border-black/20 disabled:cursor-not-allowed disabled:opacity-40"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={onDone}
        className="mt-4 w-full rounded-xl bg-theme-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-theme-green"
      >
        Done
      </button>
    </div>
  );
}

function TravelerPicker({
  travelers,
  setTravelers,
  onDone,
}: {
  travelers: number;
  setTravelers: React.Dispatch<React.SetStateAction<number>>;
  onDone: () => void;
}) {
  return (
    <div className="absolute right-0 top-[62px] z-50 w-[260px] rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Travelers</p>

          <p className="mt-0.5 text-xs text-black/40">Who's joining you?</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={travelers <= 1}
            onClick={() => setTravelers((value) => Math.max(1, value - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.1] transition hover:bg-black/[0.04] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>

          <span className="w-5 text-center text-sm font-semibold">{travelers}</span>

          <button
            type="button"
            disabled={travelers >= 20}
            onClick={() => setTravelers((value) => Math.min(20, value + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.1] transition hover:bg-black/[0.04] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onDone}
        className="mt-4 w-full rounded-xl bg-theme-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-theme-green"
      >
        Done
      </button>
    </div>
  );
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(value: string) {
  if (!value) return '';

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(`${value}T00:00:00`));
}
