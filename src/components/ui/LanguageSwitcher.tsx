'use client'

import { useLang } from '@/context/LanguageContext'
import type { LangKey } from '@/types/wedding'

const langs: { key: LangKey; label: string; native: string }[] = [
  { key: 'en', label: 'English', native: 'EN' },
  { key: 'hi', label: 'Hindi',   native: 'हि' },
  { key: 'mr', label: 'Marathi', native: 'म' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-amber-200 bg-amber-50/80 p-0.5 shadow-sm">
      {langs.map((l) => (
        <button
          key={l.key}
          type="button"
          title={l.label}
          aria-label={`Switch to ${l.label}`}
          aria-pressed={lang === l.key}
          onClick={() => setLang(l.key)}
          className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all ${
            lang === l.key
              ? 'theme-btn-primary shadow-sm'
              : 'text-amber-900 hover:bg-amber-100/70'
          }`}
        >
          {l.native}
        </button>
      ))}
    </div>
  )
}
