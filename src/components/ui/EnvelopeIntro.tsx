'use client'

import { useEffect, useState } from 'react'
import { couple } from '@/content/couple'
import { useLang } from '@/context/LanguageContext'

const SEEN_KEY = 'wedding_envelope_seen'

export default function EnvelopeIntro() {
  const { t } = useLang()
  // null = not yet hydrated (render nothing to avoid SSR mismatch)
  // 'idle' | 'opening' | 'open' | 'done' = client phases
  const [phase, setPhase] = useState<null | 'idle' | 'opening' | 'open' | 'done'>(null)

  useEffect(() => {
    // Only show once per browser session (not once ever — guests may revisit)
    const seen = sessionStorage.getItem(SEEN_KEY)
    setPhase(seen ? 'done' : 'idle')
  }, [])

  function handleOpen() {
    if (phase !== 'idle') return
    setPhase('opening')
    // After flap animation, show the card inside
    setTimeout(() => setPhase('open'), 700)
    // Then fade the whole overlay out
    setTimeout(() => {
      sessionStorage.setItem(SEEN_KEY, '1')
      setPhase('done')
    }, 2400)
  }

  if (phase === null || phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
        phase === 'open' ? 'bg-black/30 backdrop-blur-sm' : 'bg-stone-950/95'
      }`}
      style={{ opacity: phase === 'open' ? 1 : undefined }}
      aria-modal="true"
      role="dialog"
      aria-label="Wedding invitation envelope"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
      </div>

      {/* ── Envelope ── */}
      <div className="relative flex flex-col items-center select-none">

        {/* The envelope body */}
        <div
          className="relative w-80 sm:w-96 cursor-pointer"
          onClick={handleOpen}
          style={{ perspective: '900px' }}
        >
          {/* Envelope back / body */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl shadow-2xl overflow-visible"
            style={{ backgroundColor: '#fdfaf4', border: '1.5px solid #e8d9b0' }}>

            {/* Bottom triangle fold lines */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 384 128" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 128 L192 40 L384 128 Z" fill="#f5ead0" stroke="#e0cc95" strokeWidth="1" />
                <path d="M0 128 L80 20" stroke="#e0cc95" strokeWidth="0.8" fill="none" />
                <path d="M384 128 L304 20" stroke="#e0cc95" strokeWidth="0.8" fill="none" />
              </svg>
            </div>

            {/* Envelope body content — monogram seal */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 gap-2">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2"
                style={{ background: 'var(--theme-gradient)', borderColor: 'var(--color-accent)' }}
              >
                <span className="font-display text-xl font-bold text-white tracking-widest">
                  {couple.monogram}
                </span>
              </div>
              <p className="font-script text-2xl sm:text-3xl mt-1" style={{ color: 'var(--color-primary)' }}>
                {couple.brideShort} &amp; {couple.groomShort}
              </p>
            </div>
          </div>

          {/* ── Flap (top triangle) ── */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
            style={{
              height: '50%',
              transformOrigin: 'top center',
              transform: phase === 'opening' || phase === 'open'
                ? 'rotateX(-180deg)'
                : 'rotateX(0deg)',
              transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 10,
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 384 128" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 L384 0 L192 128 Z" fill="#f0e6c8" stroke="#e0cc95" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Card sliding out of envelope */}
        <div
          className="absolute flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl shadow-xl text-center pointer-events-none"
          style={{
            width: '22rem',
            background: 'var(--color-bg-card)',
            border: '1.5px solid var(--color-border)',
            opacity: phase === 'open' ? 1 : 0,
            transform: phase === 'open' ? 'translateY(-120px) scale(1)' : 'translateY(0px) scale(0.9)',
            transition: 'opacity 0.45s ease 0.15s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            zIndex: 20,
          }}
        >
          <p className="font-serif italic text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {t.envelopeTagline}
          </p>
          <p className="font-script text-3xl sm:text-4xl" style={{ color: 'var(--color-primary)' }}>
            {couple.brideShort} &amp; {couple.groomShort}
          </p>
          <div className="w-12 h-px mx-auto" style={{ background: 'var(--color-accent)' }} />
          <p className="font-serif text-sm font-semibold tracking-wide" style={{ color: 'var(--color-text-main)' }}>
            {couple.weddingDateFormatted}
          </p>
          <p className="text-xs tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
            {couple.venueTagline}
          </p>
        </div>

        {/* CTA button */}
        <button
          onClick={handleOpen}
          disabled={phase !== 'idle'}
          className={`mt-8 px-8 py-3 rounded-full font-semibold text-sm tracking-widest uppercase shadow-lg transition-all duration-300 theme-btn-primary ${
            phase !== 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-105'
          }`}
        >
          {t.envelopeOpen}
        </button>

        {/* Tagline below button */}
        <p
          className={`mt-3 font-serif italic text-sm transition-opacity duration-300 ${
            phase === 'idle' ? 'opacity-70' : 'opacity-0'
          }`}
          style={{ color: '#c9b06a' }}
        >
          {t.envelopeTagline}
        </p>
      </div>
    </div>
  )
}
