import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Compass,
  MapPin,
  MessageCircle,
  Plus,
  Sparkles,
  Users,
} from 'lucide-react';
import { Container, Section } from '@/components/layout';

const steps = [
  {
    number: '01',
    icon: Plus,
    title: 'Create your trip',
    description: 'Add your destination, dates, pricing, photos, and a day-by-day itinerary.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Invite travellers',
    description: 'Your trip goes live on Wanderly. People discover your plans and request to join.',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Go together',
    description:
      'Connect with your group, coordinate the details, meet up, and start your journey.',
  },
];

const individualBenefits = [
  'Create trips around your own plans',
  'Share travel costs with your group',
  'Meet like-minded travellers',
  'Coordinate easily before the trip',
];

const agencyBenefits = [
  'Publish and manage professional trips',
  'Reach thousands of travellers',
  'Manage bookings from one place',
  'Grow your travel business',
];

export default function HostATripPage() {
  return (
    <div className="min-h-screen bg-[#fbfcf9] text-[#111111]">
      {/* ================================================================
          HERO
      ================================================================= */}

      <Section className="relative overflow-hidden pt-10!">
        <Container>
          {/* Background decoration */}
          {/* <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dff7aa] blur-3xl" /> */}

          {/* <div className="absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-[#e7f8d0] blur-3xl" /> */}

          <div className="relative mx-auto max-w-[1400px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaf9d0] px-4 py-2">
                  <Sparkles className="h-4 w-4" />

                  <span className="text-xs font-bold uppercase tracking-[0.14em]">
                    Host your adventure
                  </span>
                </div>

                <h1 className="max-w-[760px] text-[54px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[82px]">
                  Your trip.
                  <br />
                  <span className="relative inline-block">
                    Your people.
                    <svg
                      className="absolute -bottom-3 right-[-35px] hidden w-28 text-[#b8f45a] sm:block"
                      viewBox="0 0 130 25"
                      fill="none"
                    >
                      <path
                        d="M2 17C34 2 83 2 126 12"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  Your adventure.
                </h1>

                <p className="mt-7 max-w-[610px] text-base leading-7 text-black/55 sm:text-lg">
                  Planning a trip? Invite others to join, share the cost, the journey, and the
                  memories. Turn your plans into an adventure others can be part of.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/host-a-trip/create"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80"
                  >
                    Host a trip
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-black/[0.03]"
                  >
                    See how it works
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Trust */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
                    ].map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-[#fbfcf9] object-cover"
                      />
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">2,400+ individual hosts</p>
                    <p className="text-xs text-black/45">are already sharing their adventures</p>
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative">
                <div className="relative h-[480px] overflow-hidden rounded-[36px] sm:h-[580px] lg:h-[650px]">
                  <img
                    src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1400&q=90"
                    alt="Travellers exploring a destination"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

                  {/* Image label */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div className="rounded-[22px] bg-white p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8f45a]">
                          <Compass className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold">Make it a group trip</p>
                          <p className="mt-0.5 text-xs text-black/45">
                            Share the journey with others.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-semibold backdrop-blur sm:flex">
                      <span className="h-2 w-2 rounded-full bg-[#7dbd25]" />
                      Open for travellers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          STATS
      ================================================================= */}
      {/* <Section className="border-y border-black/[0.06] bg-white py-10!">
        <div className="mx-auto grid max-w-[1200px] divide-y divide-black/[0.06] px-5 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:py-0">
          <div className="flex items-center justify-center gap-3 py-4 sm:py-0">
            <Users className="h-5 w-5 text-black/50" />

            <div>
              <p className="text-lg font-semibold">2,400+</p>
              <p className="text-xs text-black/45">Individual hosts</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-4 sm:py-0">
            <MapPin className="h-5 w-5 text-black/50" />

            <div>
              <p className="text-lg font-semibold">12,000+</p>
              <p className="text-xs text-black/45">Travellers to reach</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-4 sm:py-0">
            <CalendarDays className="h-5 w-5 text-black/50" />

            <div>
              <p className="text-lg font-semibold">Simple</p>
              <p className="text-xs text-black/45">Trip management</p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* ================================================================
          HOSTING OPTIONS
      ================================================================= */}
      <Section className="">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[680px]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Choose your path
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                One platform.
                <br />
                Two ways to host.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-7 text-black/50">
                Whether you're planning a personal adventure or running a travel business, Wanderly
                gives you everything you need to bring people together.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {/* ============================================================
                INDIVIDUAL
            ============================================================ */}
              <article className="group relative overflow-hidden rounded-[32px] bg-[#e8f9c7] p-7 sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b8f45a]/50 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#b8f45a]">
                      <Users className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-black/25">01</span>
                  </div>

                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                    Individual Host
                  </p>

                  <h3 className="mt-3 max-w-[500px] text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl">
                    Turn your plans into a shared adventure.
                  </h3>

                  <p className="mt-5 max-w-[520px] text-sm leading-6 text-black/55">
                    You're already planning the trip. Why not invite others to join you? Share
                    costs, discover new people, and make the journey more memorable.
                  </p>

                  <div className="mt-7 space-y-3">
                    {individualBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-sm font-medium">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
                          <Check className="h-3.5 w-3.5 text-[#b8f45a]" />
                        </div>

                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/host-a-trip/create"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                  >
                    Host as an individual
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </article>

              {/* ============================================================
                AGENCY
            ============================================================ */}
              <article className="group relative overflow-hidden rounded-[32px] bg-[#111111] p-7 text-white sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#006b4f]/60 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8f45a] text-black">
                      <Compass className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-white/20">02</span>
                  </div>

                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                    Travel Agency
                  </p>

                  <h3 className="mt-3 max-w-[500px] text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl">
                    Put your professional trips in front of more travellers.
                  </h3>

                  <p className="mt-5 max-w-[520px] text-sm leading-6 text-white/50">
                    Manage and publish your professional trips through the platform. Reach thousands
                    of group travellers and grow your travel business.
                  </p>

                  <div className="mt-7 space-y-3">
                    {agencyBenefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-sm font-medium text-white/85"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <Check className="h-3.5 w-3.5 text-[#b8f45a]" />
                        </div>

                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/agencies/register"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Register as agency
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8f45a] text-black">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================= */}
      <Section id="how-it-works" className="bg-[#111111]  text-white ">
        <Container>
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[650px]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Simple from start to finish
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                Hosting a trip
                <br />
                is easy.
              </h2>

              <p className="mt-5 max-w-[560px] text-base leading-7 text-white/50">
                Focus on the adventure. We'll help you take care of everything that happens before
                it.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.number} className="bg-[#111111] p-7 sm:p-9">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8f45a] text-black">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-5xl font-semibold tracking-[-0.05em] text-white/10">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          HOSTING EXPERIENCE
      ================================================================= */}
      <Section className="">
        <Container>
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#e8f9c7]">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[400px] lg:min-h-[620px]">
                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90"
                  alt="Travellers exploring the mountains"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-[22px] bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8f45a]">
                      <Users className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Bring people together</p>
                      <p className="mt-0.5 text-xs text-black/45">The best journeys are shared.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  Why host on Wanderly
                </p>

                <h2 className="max-w-[560px] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                  Don't just take the trip.
                  <br />
                  Bring others along.
                </h2>

                <p className="mt-6 max-w-[520px] text-base leading-7 text-black/55">
                  Your plans can become someone else's next great memory. Wanderly makes it simple
                  to share your itinerary and find travellers who want to experience it with you.
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/60 p-5">
                    <CalendarDays className="h-5 w-5" />

                    <p className="mt-4 text-sm font-semibold">Share your plans</p>

                    <p className="mt-1.5 text-xs leading-5 text-black/45">
                      Dates, destination, itinerary and pricing all in one place.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/60 p-5">
                    <Users className="h-5 w-5" />

                    <p className="mt-4 text-sm font-semibold">Find your people</p>

                    <p className="mt-1.5 text-xs leading-5 text-black/45">
                      Connect with travellers who want the same kind of adventure.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/60 p-5">
                    <MessageCircle className="h-5 w-5" />

                    <p className="mt-4 text-sm font-semibold">Stay connected</p>

                    <p className="mt-1.5 text-xs leading-5 text-black/45">
                      Coordinate with everyone before you meet and leave.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/60 p-5">
                    <MapPin className="h-5 w-5" />

                    <p className="mt-4 text-sm font-semibold">Start exploring</p>

                    <p className="mt-1.5 text-xs leading-5 text-black/45">
                      Meet your group and turn your plans into memories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          FINAL CTA
      ================================================================= */}
      <Section className="px-5 pb-10 sm:px-8 lg:px-10 py-0!">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#006b4f] px-7 py-16 text-center text-white sm:px-12 lg:py-24">
          <div className="mx-auto max-w-[720px]">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#b8f45a] text-black">
              <Sparkles className="h-5 w-5" />
            </div>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
              Got a trip in mind?
              <br />
              Make it a group.
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-6 text-white/60 sm:text-base">
              Create your trip, invite travellers, and start planning the adventure you've been
              thinking about.
            </p>

            <a
              href="/host-a-trip/create"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b8f45a] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#c8f87b]"
            >
              Start hosting
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
