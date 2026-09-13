'use client';

import { CalendarDays, MapPin, Minus, Plus, Search, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(2);

  const [activeField, setActiveField] = useState<'location' | 'dates' | 'travelers' | null>(null);

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

    router.push(`./search?${params.toString()}`);
  };

  const handleLocationKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="absolute left-4 right-4 top-4 z-30 rounded-[22px] bg-white p-2.5 shadow-[0_20px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.04] sm:left-6 sm:right-auto sm:top-6 sm:max-w-[850px] sm:rounded-[26px] sm:p-3 lg:left-8 lg:top-8 lg:max-w-[1050px]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
        {/* WHERE */}
        <div className="relative">
          <div className="flex min-h-[60px] items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 py-3 sm:px-5 sm:py-4">
            <MapPin className="h-5 w-5 shrink-0 text-black/50" />

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40 sm:text-[11px]">
                Where
              </p>

              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onFocus={() => setActiveField('location')}
                onKeyDown={handleLocationKeyDown}
                placeholder="Where do you want to go?"
                className="mt-0.5 w-full truncate bg-transparent text-xs font-medium outline-none placeholder:text-black/45 sm:text-sm"
              />
            </div>
          </div>

          {/* Location suggestions */}
          {activeField === 'location' && (
            <div className="absolute left-0 right-0 top-[68px] z-50 rounded-2xl border border-black/[0.06] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              {['Spiti Valley', 'Manali', 'Goa', 'Rishikesh', 'Ladakh', 'Kerala']
                .filter((item) => !location || item.toLowerCase().includes(location.toLowerCase()))
                .map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLocation(item);
                      setActiveField(null);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition hover:bg-[#f7f8f4]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f9c7]">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-xs text-black/40">Explore trips in {item}</p>
                    </div>
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* WHEN */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveField(activeField === 'dates' ? null : 'dates')}
            className="flex min-h-[60px] w-full items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 py-3 text-left sm:px-5 sm:py-4"
          >
            <CalendarDays className="h-5 w-5 shrink-0 text-black/50" />

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40 sm:text-[11px]">
                When
              </p>

              <p className="mt-0.5 truncate text-xs font-medium sm:text-sm">
                {startDate
                  ? endDate
                    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                    : formatDate(startDate)
                  : 'Choose dates'}
              </p>
            </div>
          </button>

          {/* Date picker */}
          {activeField === 'dates' && (
            <div className="absolute left-0 right-0 top-[68px] z-50 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:w-[320px]">
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

                      if (endDate && event.target.value > endDate) {
                        setEndDate('');
                      }
                    }}
                    className="w-full rounded-xl border border-black/[0.08] bg-[#f7f8f4] px-3 py-3 text-sm outline-none focus:border-black/20"
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
                    className="w-full rounded-xl border border-black/[0.08] bg-[#f7f8f4] px-3 py-3 text-sm outline-none focus:border-black/20 disabled:cursor-not-allowed disabled:opacity-40"
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={() => setActiveField(null)}
                className="mt-4 w-full rounded-xl bg-theme-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-theme-green"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* TRAVELERS */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveField(activeField === 'travelers' ? null : 'travelers')}
            className="flex min-h-[60px] w-full items-center gap-3 rounded-2xl bg-[#f7f8f4] px-4 py-3 text-left sm:px-5 sm:py-4"
          >
            <Users className="h-5 w-5 shrink-0 text-black/50" />

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40 sm:text-[11px]">
                Travelers
              </p>

              <p className="mt-0.5 truncate text-xs font-medium sm:text-sm">
                {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
              </p>
            </div>
          </button>

          {/* Travelers dropdown */}
          {activeField === 'travelers' && (
            <div className="absolute right-0 top-[68px] z-50 w-[260px] rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.1] transition hover:bg-black/[0.04] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <span className="w-5 text-center text-sm font-semibold">{travelers}</span>

                  <button
                    type="button"
                    disabled={travelers >= 20}
                    onClick={() => setTravelers((value) => Math.min(20, value + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.1] transition hover:bg-black/[0.04] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveField(null)}
                className="mt-5 w-full rounded-xl bg-theme-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-theme-green"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* SEARCH */}
        <button
          type="button"
          onClick={handleSearch}
          className="flex min-h-[60px] items-center justify-center gap-2 rounded-2xl bg-[#111111] px-6 text-sm font-semibold text-white transition hover:bg-black/80 active:scale-[0.98] sm:px-7"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </div>
  );
}

/* Helpers */

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
