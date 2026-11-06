'use client'

import { events } from '@/content/events'
import { addToCalendar } from '@/lib/calendar'
import { useLang } from '@/context/LanguageContext'
import EventCountdown from '@/components/ui/EventCountdown'
import type { WeddingEvent } from '@/types/wedding'

// Color key → Tailwind class maps (event-specific colors, not theme colors)
const badgeClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'bg-yellow-100 border-yellow-300 text-yellow-900',
  rose:   'bg-rose-100 border-rose-300 text-rose-900',
  emerald: 'bg-emerald-100 border-emerald-300 text-emerald-900',
}
const taglineClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'text-yellow-700',
  rose:   'text-rose-700',
  emerald: 'text-emerald-700',
}
const cornerClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'bg-yellow-100',
  rose:   'bg-rose-100',
  emerald: 'bg-emerald-100',
}
const iconClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'text-yellow-600',
  rose:   'text-rose-600',
  emerald: 'text-emerald-600',
}
const dressBgClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'bg-yellow-50/80 border-yellow-200/70',
  rose:   'bg-rose-50/80 border-rose-200/70',
  emerald: 'bg-emerald-50/80 border-emerald-200/70',
}
const dressTitleClasses: Record<WeddingEvent['colorKey'], string> = {
  yellow: 'text-yellow-800',
  rose:   'text-rose-800',
  emerald: 'text-emerald-800',
}

// ISO start times for each event (used for countdowns)
const eventIso: Record<WeddingEvent['key'], string> = {
  haldi:     '2026-12-12T10:30:00+05:30',
  wedding:   '2026-12-13T16:30:00+05:30',
  reception: '2026-12-13T19:30:00+05:30',
}

export default function Itinerary() {
  const { t } = useLang()

  return (
    <section
      id="itinerary"
      className="py-24 px-4 sm:px-6 lg:px-8 relative border-y border-amber-900/10"
      style={{ backgroundColor: 'rgba(251,191,36,0.04)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-script text-3xl sm:text-4xl text-amber-600">{t.itineraryScript}</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 mt-1">{t.itineraryH2}</h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3" />
          <p className="font-serif italic text-stone-600 text-lg mt-3">
            {t.itinerarySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.key}
              className={`bg-white rounded-3xl p-6 sm:p-7 shadow-md gold-box-shadow-hover flex flex-col justify-between relative overflow-hidden ${
                event.isHighlighted
                  ? 'border-2 border-amber-400/90 shadow-xl ring-1 ring-amber-400/40'
                  : 'border border-amber-200/90'
              }`}
            >
              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-6 -mt-6 opacity-60 ${cornerClasses[event.colorKey]}`} aria-hidden="true" />

              <div>
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${badgeClasses[event.colorKey]}`}>
                  <span aria-hidden="true">{event.badgeEmoji}</span>
                  {event.badge}
                </div>

                <h3 className="font-display text-2xl font-bold text-stone-900">{event.name}</h3>
                <p className={`font-script text-xl mt-0.5 ${taglineClasses[event.colorKey]}`}>{event.tagline}</p>

                {/* Per-event countdown */}
                <EventCountdown isoDate={eventIso[event.key]} />

                {/* Event details */}
                <div className="my-5 border-t border-b border-stone-100 py-4 space-y-2.5 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${iconClasses[event.colorKey]}`} aria-hidden="true">📅</span>
                    <span className="font-semibold text-stone-800">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${iconClasses[event.colorKey]}`} aria-hidden="true">⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className={`font-bold mt-0.5 ${iconClasses[event.colorKey]}`} aria-hidden="true">📍</span>
                    <span>{event.address}</span>
                  </div>
                </div>

                {/* Dress code */}
                <div className={`rounded-xl p-3.5 border mb-6 ${dressBgClasses[event.colorKey]}`}>
                  <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${dressTitleClasses[event.colorKey]}`}>
                    <span aria-hidden="true">{event.dressCodeEmoji}</span> {t.dressCode}
                  </div>
                  <p className="text-xs font-semibold text-stone-800 mt-0.5">{event.dressCodeTitle}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">{event.dressCodeDetail}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm theme-btn-primary"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t.viewOnMaps}
                </a>
                <button
                  onClick={() => addToCalendar(event.calendarKey)}
                  className="w-full py-2 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t.addToCalendar} — {event.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
