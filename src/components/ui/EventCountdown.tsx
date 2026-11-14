'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { useLang } from '@/context/LanguageContext'

interface EventCountdownProps {
  isoDate: string
}

export default function EventCountdown({ isoDate }: EventCountdownProps) {
  const { days, hours, minutes, isOver } = useCountdown(isoDate)
  const { t } = useLang()

  if (isOver) {
    return (
      <p className="text-xs font-semibold text-center theme-accent-text mt-2">
        🎉 {t.itineraryStarted}
      </p>
    )
  }

  const parts = [
    { value: days,    label: 'd' },
    { value: hours,   label: 'h' },
    { value: minutes, label: 'm' },
  ]

  return (
    <div className="flex items-center justify-center gap-1 mt-2">
      <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 mr-1">
        {t.itineraryCountsDown}
      </span>
      {parts.map(({ value, label }) => (
        <span key={label} className="flex items-baseline gap-0.5">
          <span suppressHydrationWarning className="font-display text-sm font-bold theme-digit">{value}</span>
          <span className="text-[10px] text-stone-400 font-medium">{label}</span>
        </span>
      ))}
    </div>
  )
}
