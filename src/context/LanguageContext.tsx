'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { LangKey } from '@/types/wedding'
import { translations, type Translations } from '@/content/translations'

interface LanguageContextValue {
  lang: LangKey
  setLang: (lang: LangKey) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

function parseLang(val: string | null | undefined): LangKey | null {
  if (!val) return null
  const clean = val.trim().toLowerCase()
  if (clean === 'mr' || clean === 'marathi') return 'mr'
  if (clean === 'hi' || clean === 'hindi') return 'hi'
  if (clean === 'en' || clean === 'english') return 'en'
  return null
}

function updateUrlParam(newLang: LangKey) {
  if (typeof window === 'undefined') return
  try {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLang)
    window.history.replaceState({}, '', url.toString())
  } catch {
    // Ignore history API errors in restricted environments
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangKey>('en')

  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Check URL query params (?lang=mr, ?l=mr, ?language=marathi)
    const params = new URLSearchParams(window.location.search)
    const rawParam = params.get('lang') || params.get('l') || params.get('language')
    const normalizedParam = parseLang(rawParam)

    if (normalizedParam) {
      setLangState(normalizedParam)
      try {
        localStorage.setItem('wedding_lang', normalizedParam)
      } catch {}
      return
    }

    // 2. Check URL hash fallback (#mr, #hi, #en, #lang=mr)
    const hash = window.location.hash.replace(/^#/, '').toLowerCase()
    const hashMatch = hash.match(/^(?:lang=)?([a-z]+)/i)
    if (hashMatch) {
      const normalizedHash = parseLang(hashMatch[1])
      if (normalizedHash) {
        setLangState(normalizedHash)
        try {
          localStorage.setItem('wedding_lang', normalizedHash)
          updateUrlParam(normalizedHash)
        } catch {}
        return
      }
    }

    // 3. Fallback to localStorage
    try {
      const saved = localStorage.getItem('wedding_lang')
      const normalizedSaved = parseLang(saved)
      if (normalizedSaved) {
        setLangState(normalizedSaved)
      }
    } catch {}
  }, [])

  function setLang(newLang: LangKey) {
    setLangState(newLang)
    try {
      localStorage.setItem('wedding_lang', newLang)
      updateUrlParam(newLang)
    } catch {
      // localStorage may fail in restricted/private modes
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
