'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeKey } from '@/types/wedding'

interface ThemeContextValue {
  theme: ThemeKey
  setTheme: (theme: ThemeKey) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'emerald',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('emerald')

  // Read saved theme from localStorage on mount (client only, avoids SSR mismatch)
  useEffect(() => {
    const saved = localStorage.getItem('wedding_theme') as ThemeKey | null
    if (saved && ['emerald', 'burgundy', 'terracotta'].includes(saved)) {
      setThemeState(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'emerald')
    }
  }, [])

  const setTheme = (newTheme: ThemeKey) => {
    setThemeState(newTheme)
    localStorage.setItem('wedding_theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
