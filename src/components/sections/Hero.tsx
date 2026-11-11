'use client'

import Countdown from '@/components/ui/Countdown'
import DownloadInvite from '@/components/ui/DownloadInvite'
import { couple } from '@/content/couple'
import { addToGoogleCalendarMain } from '@/lib/calendar'
import { useLang } from '@/context/LanguageContext'

export default function Hero() {
  const { brideShort, groomShort, weddingDateIso, venueTagline } = couple
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 0)', backgroundSize: '28px 28px' }}
    >
      {/* Mandala watermark — top left */}
      <svg
        className="mandala-watermark -top-24 -left-24 w-96 h-96 animate-[spin_20s_linear_infinite]"
        viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
        <path d="M100 10 Q115 50 100 90 Q85 50 100 10" stroke="currentColor" strokeWidth="0.8" />
        <path d="M100 190 Q115 150 100 110 Q85 150 100 190" stroke="currentColor" strokeWidth="0.8" />
        <path d="M10 100 Q50 115 90 100 Q50 85 10 100" stroke="currentColor" strokeWidth="0.8" />
        <path d="M190 100 Q150 115 110 100 Q150 85 190 100" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      {/* Mandala watermark — bottom right */}
      <svg
        className="mandala-watermark -bottom-24 -right-24 w-96 h-96 animate-[spin_20s_linear_infinite]"
        viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Vedic blessing pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-100/60 border border-amber-300/60 mb-6 shadow-sm">
          <span className="text-amber-600 text-xs" aria-hidden="true">🪔</span>
          <span className="font-serif text-sm tracking-widest text-amber-900 font-semibold">{t.heroBlessingPill}</span>
          <span className="text-amber-600 text-xs" aria-hidden="true">🪔</span>
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-xl text-stone-600 max-w-lg mb-2">
          {t.heroTagline}
        </p>

        {/* Couple names */}
        <div className="my-4 py-2 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900">
            {brideShort}
          </h1>
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-600 my-1 md:my-0" aria-hidden="true">&amp;</span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900">
            {groomShort}
          </h1>
        </div>

        {/* Ornate divider */}
        <div className="flex items-center justify-center gap-3 my-4 w-full max-w-xs text-amber-600" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-600 flex-1" />
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-600 flex-1" />
        </div>

        {/* Date & venue */}
        <div className="mb-8">
          <p className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-stone-800">
            {t.heroDate}
          </p>
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-amber-800/80 mt-1">
            {venueTagline}
          </p>
        </div>

        {/* Countdown */}
        <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 gold-box-shadow border border-amber-200/80 mb-10">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              {t.heroCountingDown}
            </span>
          </div>
          <Countdown isoDate={weddingDateIso} />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#rsvp"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full theme-btn-primary font-medium text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            {t.heroCta}
          </a>
          <a
            href="#itinerary"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full theme-btn-secondary border font-medium text-sm tracking-wider uppercase shadow-sm transition-all text-center"
          >
            {t.heroExplore}
          </a>
        </div>

        {/* Add to calendar (DownloadInvite hidden for now) */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={addToGoogleCalendarMain}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors py-1.5 px-3 rounded-lg hover:bg-amber-100/50"
          >
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t.heroCalendar}
          </button>
          {/* <span className="hidden sm:inline text-stone-300 text-xs">·</span> */}
          {/* <DownloadInvite /> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#story"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-400 hover:text-amber-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase mb-1 font-semibold">{t.heroScroll}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
