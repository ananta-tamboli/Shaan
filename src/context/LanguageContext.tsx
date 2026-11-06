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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangKey>('en')

  useEffect(() => {
    const saved = localStorage.getItem('wedding_lang') as LangKey | null
    if (saved && ['en', 'hi', 'mr'].includes(saved)) {
      setLangState(saved)
    }
  }, [])

  function setLang(newLang: LangKey) {
    setLangState(newLang)
    localStorage.setItem('wedding_lang', newLang)
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
