'use client'

import { useState } from 'react'
import Image from 'next/image'
import { couple } from '@/content/couple'
import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const { t } = useLang()

  async function copyHashtag() {
    try {
      await navigator.clipboard.writeText(`#${couple.hashtag}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API not available
    }
  }

  return (
    <footer
      id="details"
      className="bg-stone-900 text-stone-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t-2 border-amber-600/30"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Logo circle */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500/60 mx-auto mb-6 shadow-xl shadow-amber-950/50 bg-stone-800">
          <Image
            src={couple.logoUrl}
            alt={`${couple.brideShort} & ${couple.groomShort} Logo`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
          {couple.brideShort} &amp; {couple.groomShort}
        </h2>
        <p className="font-serif italic text-amber-300/80 text-lg mt-1">
          {t.footerVenue}
        </p>

        {/* Hashtag copy */}
        <div className="my-8">
          <button
            onClick={copyHashtag}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800/90 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider transition-all group"
            aria-label={`Copy hashtag #${couple.hashtag}`}
          >
            <span className="text-amber-400" aria-hidden="true">#</span>
            <span>{couple.hashtag}</span>
            <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <div
            className={`text-[11px] text-amber-400 mt-1.5 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
            aria-live="polite"
          >
            Copied hashtag to clipboard!
          </div>
        </div>

        {/* Family blessing */}
        <div className="border-t border-stone-800 pt-8 max-w-xl mx-auto space-y-2">
          <p className="font-serif italic text-sm text-stone-400">
            &ldquo;{t.footerBlessing}&rdquo;
          </p>
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-200/90">
            {couple.familyNames}
          </p>
        </div>

        {/* Copyright + back to top */}
        <div className="mt-12 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>&copy; 2026 {couple.brideShort} &amp; {couple.groomShort} {t.footerBuilt}</p>
          <a
            href="#hero"
            className="mt-4 sm:mt-0 hover:text-amber-400 flex items-center gap-1 transition-colors"
          >
            <span>{t.footerBack}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
