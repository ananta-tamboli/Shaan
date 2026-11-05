'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import type { ThemeKey } from '@/types/wedding'

const themes: { key: ThemeKey; hex: string; label: string; description: string }[] = [
  { key: 'emerald', hex: '#083b2b', label: 'Royal Emerald', description: 'Regal Green & Warm Gold' },
  { key: 'burgundy', hex: '#4e121d', label: 'Royal Burgundy', description: 'Crimson & Champagne Gold' },
  { key: 'terracotta', hex: '#8c3b24', label: 'Warm Terracotta', description: 'Earthy Boho & Sage Green' },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const current = themes.find((t) => t.key === theme) ?? themes[0]

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        title="Change Theme Palette"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o) }}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border border-amber-200 bg-amber-50/80 hover:bg-amber-100/70 text-amber-900 transition-all shadow-sm"
      >
        <span className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: current.hex }} />
        <span className="hidden sm:inline text-[11px] font-semibold tracking-wider uppercase">
          {current.label.split(' ')[1]}
        </span>
        <svg className="w-3 h-3 text-amber-700 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-stone-200 py-1.5 z-50">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
            Select Color Theme
          </div>
          {themes.map((t) => (
            <button
              key={t.key}
              onClick={() => { setTheme(t.key); setOpen(false) }}
              className="w-full text-left px-3 py-2 text-xs flex items-center gap-2.5 hover:bg-stone-50 transition-colors text-stone-800"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-amber-300" style={{ backgroundColor: t.hex }} />
              <div>
                <div className="font-semibold">{t.label}</div>
                <div className="text-[10px] text-stone-500">{t.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
