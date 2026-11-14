'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import MusicPlayer from '@/components/ui/MusicPlayer'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { couple } from '@/content/couple'
import { useAudio } from '@/context/AudioContext'
import { useLang } from '@/context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const { isPlaying, togglePlay } = useAudio()
  const { t } = useLang()

  // Scroll listener
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        drawerOpen &&
        drawerRef.current && !drawerRef.current.contains(e.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node)
      ) {
        setDrawerOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [drawerOpen])

  const navLinks = [
    { href: '#story',     label: t.navStory },
    { href: '#itinerary', label: t.navItinerary },
    { href: '#rsvp',      label: t.navRsvp },
    { href: '#details',   label: t.navDetails },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 md:px-8 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-amber-900/10 shadow-sm' : 'bg-white/85 backdrop-blur-md border-b border-amber-900/10'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Monogram */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/50 shadow-sm group-hover:scale-105 transition-transform bg-amber-950/10">
            <Image
              src={couple.logoUrl}
              alt={`${couple.brideShort} & ${couple.groomShort} Logo`}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-script text-2xl text-amber-900 hidden sm:inline">
            {couple.brideShort} &amp; {couple.groomShort}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-stone-700">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-amber-600 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageSwitcher />
          <MusicPlayer />

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label="Toggle Navigation"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:text-amber-800 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          ref={drawerRef}
          className="md:hidden border-t border-stone-200 mt-2 pt-3 pb-3 px-3 flex flex-col space-y-2 text-center text-xs uppercase tracking-widest font-semibold text-stone-700 bg-white/95 rounded-b-xl shadow-lg"
        >
          <a href="#hero" className="py-2 hover:bg-amber-50 rounded-lg" onClick={() => setDrawerOpen(false)}>Home</a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 hover:bg-amber-50 rounded-lg"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile play/pause */}
          <div className="pt-2 border-t border-stone-200">
            <button
              type="button"
              onClick={togglePlay}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold theme-btn-primary"
            >
              <span>{isPlaying ? '⏸' : '▶'}</span>
              <span>{isPlaying ? t.musicPause : t.musicPlay} Music</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
