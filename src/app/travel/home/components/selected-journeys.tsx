import { ArrowRight, CalendarDays, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';

const tripss = [
  {
    id: 'spiti-autumn-01',
    title: 'Spiti in Autumn',
    category: 'Road trip',
    location: 'Spiti Valley',
    duration: '6 days',
    price: '₹14,999',
    rating: '4.9',
    reviews: 48,
    host: 'Arjun Mehta',
    hostAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    joined: 12,
    slotsLeft: 8,
    image: 'https://images.unsplash.com/photo-1620398762817-ff3885718863?w=1200&q=85&fit=crop',
    href: '/trips/spiti-autumn-01',
  },
  {
    id: 'manali-winter-02',
    title: 'Manali Winter Escape',
    category: 'Adventure',
    location: 'Manali',
    duration: '4 days',
    price: '₹9,499',
    rating: '4.8',
    reviews: 36,
    host: 'Rahul Kumar',
    hostAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    joined: 8,
    slotsLeft: 2,
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?w=1200&q=85&fit=crop',
    href: '/trips/manali-winter-02',
  },
  {
    id: 'goa-beach-03',
    title: 'Goa Beach Weekend',
    category: 'Beach',
    location: 'Goa',
    duration: '4 days',
    price: '₹6,999',
    rating: '4.7',
    reviews: 62,
    host: 'Priya Sharma',
    hostAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    joined: 15,
    slotsLeft: 5,
    image: 'https://images.unsplash.com/photo-1698430185884-a88ff520f03e?w=1200&q=85&fit=crop',
    href: '/trips/goa-beach-03',
  },
  {
    id: 'rishikesh-camp-04',
    title: 'Rishikesh River Camp',
    category: 'Camping',
    location: 'Rishikesh',
    duration: '3 days',
    price: '₹7,499',
    rating: '4.8',
    reviews: 54,
    host: 'Himalayan Adventures',
    hostAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HimAdv',
    joined: 10,
    slotsLeft: 6,
    image: 'https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=1200&q=85&fit=crop',
    href: '/trips/rishikesh-camp-04',
  },
  {
    id: 'ladakh-bike-05',
    title: 'Ladakh Bike Expedition',
    category: 'Road trip',
    location: 'Ladakh',
    duration: '10 days',
    price: '₹22,999',
    rating: '5.0',
    reviews: 29,
    host: 'Dev Patel',
    hostAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
    joined: 6,
    slotsLeft: 4,
    image: 'https://images.unsplash.com/photo-1643368214091-6af1a029aee0?w=1200&q=85&fit=crop',
    href: '/trips/ladakh-bike-05',
  },
];

export function SelectedJourneys() {
  return (
    <Section className="pt-0! overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:text-xs">
              Selected Journeys
            </p>

            <h2
              className="
                text-[34px]
                font-semibold
                leading-[1.08]
                tracking-[-0.055em]
                text-theme-dark
                sm:text-5xl
                sm:leading-[1.1]
                md:text-6xl
                lg:text-[40px]
              "
            >
              Trips worth leaving
              <br className="hidden sm:block" />
              <span className="ml-1 italic text-lime-600 sm:ml-2">home for</span>
            </h2>
          </div>

          <Link
            href="/trips"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              text-sm
              font-semibold
              text-theme-dark
              transition-colors
              hover:text-lime-600
            "
          >
            Explore all trips
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trips */}
        <div className="mt-10 lg:mt-10">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
            {/* Featured Trip */}
            {tripss[0] && (
              <article className="group min-w-0">
                <Link href={tripss[0].href} className="block h-full">
                  <div
                    className="
                      relative
                      h-[430px]
                      overflow-hidden
                      rounded-[24px]
                      sm:h-[520px]
                      sm:rounded-[28px]
                      lg:h-full
                      lg:min-h-[640px]
                      lg:rounded-[30px]
                    "
                  >
                    {/* Image */}
                    <img
                      src={tripss[0].image}
                      alt={tripss[0].title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Top */}
                    <div
                      className="
                        absolute
                        inset-x-4
                        top-4
                        flex
                        items-start
                        justify-between
                        gap-3
                        sm:inset-x-6
                        sm:top-6
                      "
                    >
                      <span
                        className="
                          rounded-full
                          bg-white
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-theme-dark
                          sm:px-3.5
                          sm:py-2
                          sm:text-[10px]
                        "
                      >
                        {tripss[0].category}
                      </span>

                      <span
                        className="
                          flex
                          shrink-0
                          items-center
                          gap-1
                          rounded-full
                          bg-black/30
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          text-white
                          backdrop-blur-md
                          sm:gap-1.5
                          sm:px-3.5
                          sm:py-2
                          sm:text-xs
                        "
                      >
                        <Star className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
                        {tripss[0].rating}
                        <span className="hidden text-white/50 sm:inline">
                          ({tripss[0].reviews})
                        </span>
                      </span>
                    </div>

                    {/* Featured Label */}
                    <div className="absolute left-4 top-[58px] sm:left-6 sm:top-[66px]">
                      <span
                        className="
                          rounded-full
                          bg-lime-400
                          px-2.5
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-black
                          sm:px-3
                          sm:text-[10px]
                        "
                      >
                        Featured journey
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div
                      className="
                        absolute
                        inset-x-4
                        bottom-4
                        sm:inset-x-6
                        sm:bottom-7
                      "
                    >
                      <div className="flex items-end justify-between gap-4 sm:gap-5">
                        <div className="min-w-0">
                          {/* Location */}
                          <div className="mb-2 flex items-center gap-1.5 text-[11px] text-white/70 sm:text-xs">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">{tripss[0].location}</span>
                          </div>

                          {/* Title */}
                          <h3
                            className="
                              max-w-[580px]
                              text-[29px]
                              font-semibold
                              leading-[1.03]
                              tracking-[-0.04em]
                              text-white
                              sm:text-[40px]
                              lg:text-[46px]
                            "
                          >
                            {tripss[0].title}
                          </h3>

                          {/* Meta */}
                          <div
                            className="
                              mt-3
                              flex
                              flex-wrap
                              items-center
                              gap-x-3
                              gap-y-1.5
                              text-[10px]
                              text-white/65
                              sm:mt-4
                              sm:gap-x-4
                              sm:text-xs
                            "
                          >
                            <span className="flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5" />
                              {tripss[0].duration}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-white/30" />

                            <span>{tripss[0].joined} joined</span>

                            <span className="h-1 w-1 rounded-full bg-white/30" />

                            <span>{tripss[0].slotsLeft} spots left</span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <span
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-theme-dark
                            shadow-xl
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-[-8deg]
                            sm:h-12
                            sm:w-12
                          "
                        >
                          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Smaller Trips */}
            <div
              className="
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                pb-3
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                sm:gap-5
                lg:grid
                lg:grid-cols-1
                lg:gap-6
                lg:overflow-visible
                lg:pb-0
              "
            >
              {tripss.slice(1, 4).map((trip) => (
                <article
                  key={trip.id}
                  className="
                    group
                    min-w-[84vw]
                    snap-start
                    overflow-hidden
                    rounded-[24px]
                    bg-white
                    sm:min-w-[62vw]
                    sm:rounded-[28px]
                    lg:min-w-0
                    lg:rounded-[30px]
                  "
                >
                  <Link href={trip.href} className="block">
                    <div
                      className="
                        relative
                        h-[300px]
                        overflow-hidden
                        rounded-[24px]
                        sm:h-[340px]
                        sm:rounded-[28px]
                        lg:h-[calc((640px-48px)/3)]
                        lg:rounded-[30px]
                      "
                    >
                      {/* Image */}
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* Top */}
                      <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 sm:inset-x-5 sm:top-5">
                        <span
                          className="
                            rounded-full
                            bg-white/90
                            px-3
                            py-1.5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-theme-dark
                            backdrop-blur-md
                            sm:text-[10px]
                          "
                        >
                          {trip.category}
                        </span>

                        <span
                          className="
                            flex
                            shrink-0
                            items-center
                            gap-1
                            rounded-full
                            bg-black/30
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-medium
                            text-white
                            backdrop-blur-md
                            sm:text-[11px]
                          "
                        >
                          <Star className="h-3 w-3 fill-current" />
                          {trip.rating}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                        <div className="flex items-end justify-between gap-4">
                          <div className="min-w-0">
                            {/* Location */}
                            <div className="mb-1.5 flex items-center gap-1 text-[10px] text-white/65 sm:text-[11px]">
                              <MapPin className="h-3 w-3 shrink-0" />
                              <span className="truncate">{trip.location}</span>
                            </div>

                            {/* Title */}
                            <h3
                              className="
                                line-clamp-2
                                text-[20px]
                                font-semibold
                                leading-[1.08]
                                tracking-[-0.025em]
                                text-white
                                sm:text-2xl
                              "
                            >
                              {trip.title}
                            </h3>

                            {/* Meta */}
                            <div
                              className="
                                mt-2
                                flex
                                items-center
                                gap-2.5
                                text-[10px]
                                text-white/60
                                sm:gap-3
                                sm:text-[11px]
                              "
                            >
                              <span>{trip.duration}</span>

                              <span className="h-1 w-1 rounded-full bg-white/30" />

                              <span>{trip.slotsLeft} spots left</span>
                            </div>
                          </div>

                          {/* Arrow */}
                          <span
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-white
                              text-theme-dark
                              transition-all
                              duration-300
                              group-hover:scale-105
                              group-hover:rotate-[-8deg]
                              sm:h-10
                              sm:w-10
                            "
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Swipe hint */}
          <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/35 lg:hidden">
            <span>Swipe to explore</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Trips
// <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//   {tripss.map((trip) => (
//     <article
//       key={trip.id}
//       className="group relative overflow-hidden rounded-[30px] bg-white transition-all duration-500 hover:-translate-y-1"
//     >
//       {/* Image */}
//       <Link href={trip.href} className="block">
//         <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
//           <img
//             src={trip.image}
//             alt={trip.title}
//             className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
//           />

//           {/* Image overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

//           {/* Top badges */}
//           <div className="absolute inset-x-4 top-4 flex items-center justify-between">
//             {/* Category */}
//             <span className="rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-theme-dark backdrop-blur-md">
//               {trip.category}
//             </span>

//             {/* Rating */}
//             <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
//               <Star className="h-3.5 w-3.5 fill-current" />
//               {trip.rating}
//               <span className="text-white/55">· {trip.reviews}</span>
//             </span>
//           </div>

//           {/* Bottom image content */}
//           <div className="absolute inset-x-5 bottom-5">
//             <div className="flex items-end justify-between gap-4">
//               <div className="min-w-0">
//                 <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/75">
//                   <MapPin className="h-3.5 w-3.5" />
//                   <span>{trip.location}</span>
//                 </div>

//                 <h3 className="max-w-[280px] text-[22px] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[24px]">
//                   {trip.title}
//                 </h3>
//               </div>

//               {/* Arrow */}
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-theme-dark shadow-lg transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
//                 <ArrowRight className="h-4 w-4" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </Link>

//       {/* Details */}
//       <div className="px-1 pt-5">
//         {/* Price + Duration */}
//         <div className="flex items-center justify-between gap-4">
//           <div>
//             <div className="flex items-baseline gap-1.5">
//               <span className="text-[21px] font-semibold tracking-[-0.025em] text-theme-dark">
//                 {trip.price}
//               </span>

//               <span className="text-xs text-black/35">/ person</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-1.5 text-sm text-black/50">
//             <CalendarDays className="h-4 w-4" />
//             <span>{trip.duration}</span>
//           </div>
//         </div>

//         {/* Availability */}
//         <div className="mt-5">
//           <div className="flex items-center justify-between text-xs">
//             <div className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />

//               <span className="font-medium text-black/65">
//                 {trip.slotsLeft} spots left
//               </span>
//             </div>

//             <span className="text-black/35">
//               {trip.joined} joined
//             </span>
//           </div>

//           {/* Progress */}
//           <div className="mt-2.5 h-[3px] overflow-hidden rounded-full bg-black/[0.06]">
//             <div
//               className="h-full rounded-full bg-theme-dark transition-all duration-700"
//               style={{
//                 width: `${Math.max(
//                   18,
//                   Math.min(92, 100 - trip.slotsLeft * 8),
//                 )}%`,
//               }}
//             />
//           </div>
//         </div>

//         {/* Host */}
//         <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
//           <div className="flex items-center gap-2.5">
//             <div className="relative">
//               <img
//                 src={trip.hostAvatar}
//                 alt={trip.host}
//                 className="h-8 w-8 rounded-full object-cover ring-2 ring-black/[0.04]"
//               />

//               <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-lime-500" />
//             </div>

//             <div>
//               <p className="text-xs font-semibold leading-none text-theme-dark">
//                 {trip.host}
//               </p>

//               <p className="mt-1 text-[10px] text-black/35">
//                 Trip host
//               </p>
//             </div>
//           </div>

//           <Link
//             href={trip.href}
//             className="text-xs font-semibold text-theme-dark transition-opacity hover:opacity-50"
//           >
//             View trip
//           </Link>
//         </div>
//       </div>
//     </article>
//   ))}
// </div>
