'use client';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Heart,
  MapPin,
  Minus,
  Plus,
  Share2,
  ShieldCheck,
  Star,
  Users,
  X,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Container } from '@/components/layout';

const trip = {
  title: 'Spiti Valley Adventure',
  subtitle:
    'A breathtaking journey through remote villages, high mountain passes, ancient monasteries and unforgettable Himalayan landscapes.',
  destination: 'Spiti Valley, Himachal Pradesh',
  duration: '8 Days / 7 Nights',
  groupSize: '4–12 travelers',
  rating: 4.9,
  reviews: 126,
  price: 24999,
  oldPrice: 28999,
  category: 'Adventure',
  difficulty: 'Moderate',
  coverImage:
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85',
  ],
  agency: {
    name: 'Wanderlust Travels',
    initials: 'WT',
    rating: 4.9,
    trips: 128,
    verified: true,
  },
};

const itinerary = [
  {
    day: '01',
    title: 'Manali to Kaza',
    description:
      'Begin your Himalayan adventure with a scenic drive towards Kaza through dramatic mountain landscapes.',
    places: ['Rohtang Pass', 'Kunzum Pass', 'Losar'],
  },
  {
    day: '02',
    title: 'Explore Kaza',
    description:
      'Spend the day discovering Kaza and its surrounding villages while adjusting to the high altitude.',
    places: ['Kaza', 'Key Monastery', 'Kibber'],
  },
  {
    day: '03',
    title: 'Dhankar & Pin Valley',
    description: 'Visit ancient monasteries and experience the stark beauty of Pin Valley.',
    places: ['Dhankar Monastery', 'Pin Valley', 'Tabo'],
  },
  {
    day: '04',
    title: 'Tabo Monastery',
    description:
      'Explore one of the oldest continuously functioning Buddhist monasteries in India.',
    places: ['Tabo', 'Tabo Caves', 'Nako'],
  },
  {
    day: '05',
    title: 'Nako to Kaza',
    description:
      'Journey back towards Kaza through beautiful villages, lakes and remote mountain roads.',
    places: ['Nako Lake', 'Sumdo', 'Kaza'],
  },
  {
    day: '06',
    title: 'Kibber & Chicham',
    description:
      'Explore high-altitude villages and cross one of the world’s highest motorable bridges.',
    places: ['Kibber', 'Chicham Bridge', 'Hikkim'],
  },
  {
    day: '07',
    title: 'Kaza Free Day',
    description:
      'Enjoy a relaxed day in Kaza to shop, explore cafes or simply take in the mountain views.',
    places: ['Kaza Market', 'Local Cafes'],
  },
  {
    day: '08',
    title: 'Return Journey',
    description: 'End the adventure with a scenic drive back from Spiti towards Manali.',
    places: ['Kunzum Pass', 'Chandratal Route', 'Manali'],
  },
];

const included = [
  '7 nights accommodation',
  'Daily breakfast and dinner',
  'Private transportation',
  'Experienced local trip leader',
  'All sightseeing mentioned in itinerary',
  'Driver and fuel charges',
];

const excluded = [
  'Flights or train tickets',
  'Personal expenses',
  'Travel insurance',
  'Lunches',
  'Activities not mentioned in the itinerary',
];

const reviews = [
  {
    name: 'Riya Sharma',
    rating: 5,
    date: '2 weeks ago',
    text: 'One of the most memorable trips I have ever taken. The itinerary was perfectly paced and the team was incredibly helpful.',
  },
  {
    name: 'Arjun Mehta',
    rating: 5,
    date: '1 month ago',
    text: 'Beautiful locations, great accommodation and an amazing group. Everything was handled smoothly from start to finish.',
  },
  {
    name: 'Neha Kapoor',
    rating: 4,
    date: '2 months ago',
    text: 'The landscapes are unreal. The agency team was responsive and made the whole experience feel effortless.',
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star className="h-4 w-4 fill-current text-slate-950" />
      <span className="font-semibold text-slate-950">{rating}</span>
    </div>
  );
}

export default function TripDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [openDay, setOpenDay] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const discount = useMemo(
    () => Math.round(((trip.oldPrice - trip.price) / trip.oldPrice) * 100),
    [],
  );

  const total = trip.price * travelers;

  return (
    <main className="min-h-screen bg-[#fafaf7] text-slate-950">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 sm:px-8 lg:px-10">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <a href="/trips" className="flex items-center gap-2 transition hover:text-slate-950">
              <ArrowLeft className="h-4 w-4" />
              Trips
            </a>
            <span>/</span>
            <span className="text-slate-950">{trip.title}</span>
          </div>

          {/* Gallery */}
          <section className="relative">
            <div className="grid h-[420px] grid-cols-1 gap-2 overflow-hidden rounded-[30px] sm:h-[560px] lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
              <button
                type="button"
                onClick={() => {
                  setSelectedImage(0);
                  setShowGallery(true);
                }}
                className="group relative min-h-[300px] overflow-hidden lg:row-span-2"
              >
                <img
                  src={trip.coverImage}
                  alt={trip.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </button>

              {trip.gallery.slice(0, 4).map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => {
                    setSelectedImage(index + 1);
                    setShowGallery(true);
                  }}
                  className="group relative hidden overflow-hidden sm:block"
                >
                  <img
                    src={image}
                    alt={`${trip.title} ${index + 2}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {index === 3 && (
                    <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 to-transparent p-5">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                        View all photos
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Main layout */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_390px]">
            {/* Left */}
            <div>
              {/* Heading */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#b8f45a] px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                    {trip.category}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-black/[0.06]">
                    {trip.difficulty}
                  </span>

                  {trip.agency.verified && (
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold ring-1 ring-black/[0.06]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified agency
                    </span>
                  )}
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                  {trip.title}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {trip.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trip.destination}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    <span>{trip.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{trip.groupSize}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Rating rating={trip.rating} />
                    <span className="text-slate-500">({trip.reviews} reviews)</span>
                  </div>
                </div>
              </section>

              {/* Highlights */}
              <section className="mt-14 border-y border-black/[0.07] py-8">
                <div className="grid grid-cols-2 gap-7 sm:grid-cols-4">
                  <div>
                    <MapPin className="mb-3 h-5 w-5" />
                    <p className="text-xs text-slate-500">Destination</p>
                    <p className="mt-1 text-sm font-semibold">Spiti Valley</p>
                  </div>

                  <div>
                    <CalendarDays className="mb-3 h-5 w-5" />
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="mt-1 text-sm font-semibold">8 Days</p>
                  </div>

                  <div>
                    <Users className="mb-3 h-5 w-5" />
                    <p className="text-xs text-slate-500">Group size</p>
                    <p className="mt-1 text-sm font-semibold">4–12 people</p>
                  </div>

                  <div>
                    <Globe2 className="mb-3 h-5 w-5" />
                    <p className="text-xs text-slate-500">Language</p>
                    <p className="mt-1 text-sm font-semibold">English / Hindi</p>
                  </div>
                </div>
              </section>

              {/* About */}
              <section className="mt-14">
                <SectionTitle
                  eyebrow="The experience"
                  title="An adventure you'll talk about for years."
                />

                <div className="max-w-3xl space-y-5 text-[15px] leading-8 text-slate-600">
                  <p>
                    Travel deep into the heart of Spiti Valley and discover a landscape that feels
                    worlds away from everyday life. From ancient monasteries to tiny mountain
                    villages, every day brings something different.
                  </p>

                  <p>
                    This trip combines adventure, culture and slow travel, giving you enough time to
                    experience the destination rather than simply passing through it.
                  </p>
                </div>
              </section>

              {/* Itinerary */}
              <section className="mt-16">
                <SectionTitle
                  eyebrow="Your journey"
                  title="Day-by-day itinerary"
                  description="A carefully planned route that balances exploration, adventure and time to slow down."
                />

                <div className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
                  {itinerary.map((item, index) => {
                    const isOpen = openDay === index;

                    return (
                      <div key={item.day}>
                        <button
                          type="button"
                          onClick={() => setOpenDay(isOpen ? -1 : index)}
                          className="flex w-full items-center gap-5 py-6 text-left"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b8f45a] text-xs font-black">
                            {item.day}
                          </span>

                          <span className="flex-1">
                            <span className="block text-base font-semibold">{item.title}</span>

                            {!isOpen && (
                              <span className="mt-1 block text-sm text-slate-500">
                                {item.places.join(' · ')}
                              </span>
                            )}
                          </span>

                          <ChevronDown
                            className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isOpen && (
                          <div className="pb-7 pl-16 pr-4">
                            <p className="max-w-2xl text-sm leading-7 text-slate-600">
                              {item.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.places.map((place) => (
                                <span
                                  key={place}
                                  className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-black/[0.06]"
                                >
                                  {place}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Included / excluded */}
              <section className="mt-16">
                <SectionTitle eyebrow="Good to know" title="What's included" />

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em]">Included</h3>

                    <div className="space-y-4">
                      {included.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8f45a]">
                            <Check className="h-3 w-3 text-slate-950" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em]">
                      Not included
                    </h3>

                    <div className="space-y-4">
                      {excluded.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                            <X className="h-3 w-3" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Agency */}
              <section className="mt-16 rounded-[30px] bg-white p-7 ring-1 ring-black/[0.06] sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Your trip organizer
                </p>

                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#b8f45a] text-xl font-black">
                    {trip.agency.initials}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold">{trip.agency.name}</h3>

                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Star className="h-4 w-4 fill-current text-slate-950" />
                        {trip.agency.rating}
                      </span>
                      <span>{trip.agency.trips} trips hosted</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-full border border-black/[0.1] px-5 py-3 text-sm font-semibold transition hover:bg-slate-50"
                  >
                    View agency
                  </button>
                </div>
              </section>

              {/* Reviews */}
              <section className="mt-16">
                <SectionTitle
                  eyebrow="Traveler reviews"
                  title={`${trip.rating} out of 5`}
                  description={`${trip.reviews} travelers have reviewed this experience.`}
                />

                <div className="grid gap-4 md:grid-cols-3">
                  {reviews.map((review) => (
                    <article
                      key={review.name}
                      className="rounded-[24px] bg-white p-6 ring-1 ring-black/[0.06]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={`h-4 w-4 ${index < review.rating ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>

                        <span className="text-xs text-slate-400">{review.date}</span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-600">“{review.text}”</p>

                      <p className="mt-5 text-sm font-semibold">{review.name}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Booking Card */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06]">
                <div className="p-6 sm:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Starting from</p>

                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-3xl font-bold tracking-[-0.04em]">
                          ₹{trip.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          ₹{trip.oldPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">per traveler</p>
                    </div>

                    <span className="rounded-full bg-[#b8f45a] px-3 py-1.5 text-xs font-bold">
                      {discount}% OFF
                    </span>
                  </div>

                  <div className="my-6 h-px bg-black/[0.07]" />

                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em]">
                      Travel date
                    </label>

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-2xl border border-black/[0.08] px-4 py-4 text-left transition hover:border-black/20"
                    >
                      <CalendarDays className="h-5 w-5" />

                      <div>
                        <p className="text-sm font-semibold">Choose your dates</p>
                        <p className="mt-0.5 text-xs text-slate-500">Multiple dates available</p>
                      </div>

                      <ChevronDown className="ml-auto h-4 w-4" />
                    </button>
                  </div>

                  {/* Travelers */}
                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em]">
                      Travelers
                    </label>

                    <div className="flex items-center justify-between rounded-2xl border border-black/[0.08] px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5" />

                        <div>
                          <p className="text-sm font-semibold">
                            {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}
                          </p>
                          <p className="text-xs text-slate-500">Adults</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={travelers <= 1}
                          onClick={() => setTravelers((value) => Math.max(1, value - 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.1] disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>

                        <span className="w-5 text-center text-sm font-semibold">{travelers}</span>

                        <button
                          type="button"
                          disabled={travelers >= 12}
                          onClick={() => setTravelers((value) => Math.min(12, value + 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.1] disabled:opacity-30"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>
                        ₹{trip.price.toLocaleString('en-IN')} × {travelers} travelers
                      </span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex justify-between text-slate-600">
                      <span>Taxes & fees</span>
                      <span>Included</span>
                    </div>

                    <div className="my-3 h-px bg-black/[0.07]" />

                    <div className="flex items-center justify-between text-base font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-between rounded-full bg-slate-950 py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    <span>Reserve your spot</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8f45a] text-slate-950">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-400">
                    You won't be charged yet
                  </p>
                </div>

                <div className="border-t border-black/[0.06] bg-[#fafaf7] px-6 py-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 shrink-0" />

                    <div>
                      <p className="text-sm font-semibold">Book with confidence</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Verified travel agency, secure payments and traveler support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
              >
                <Share2 className="h-4 w-4" />
                Share this trip
              </button>
            </aside>
          </div>
        </Container>
      </div>

      {/* Mobile booking bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/[0.08] bg-white/95 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-slate-500">From</p>
            <p className="truncate text-lg font-bold">
              ₹{trip.price.toLocaleString('en-IN')}
              <span className="ml-1 text-xs font-normal text-slate-500">/ traveler</span>
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-slate-950 py-2.5 pl-5 pr-2.5 text-sm font-bold text-white"
          >
            Book now
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b8f45a] text-slate-950">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] bg-black/90 p-4 sm:p-8">
          <button
            type="button"
            onClick={() => setShowGallery(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-6xl">
              <img
                src={selectedImage === 0 ? trip.coverImage : trip.gallery[selectedImage - 1]}
                alt={trip.title}
                className="mx-auto max-h-[80vh] w-full rounded-[24px] object-contain"
              />

              <div className="mt-5 flex justify-center gap-2">
                {[trip.coverImage, ...trip.gallery].map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-16 w-20 overflow-hidden rounded-xl border-2 ${
                      selectedImage === index ? 'border-[#b8f45a]' : 'border-white/20'
                    }`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
