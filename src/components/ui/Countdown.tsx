'use client'

import { useCountdown } from '@/hooks/useCountdown'

interface CountdownProps {
  isoDate: string
}

export default function Countdown({ isoDate }: CountdownProps) {
  const { days, hours, minutes, seconds, isOver } = useCountdown(isoDate)

  if (isOver) {
    return (
      <div className="text-center py-6">
        <p className="font-script text-3xl theme-accent-text">The celebration has begun! 🎉</p>
      </div>
    )
  }

  const units = [
    { label: 'Days', value: days, className: 'theme-digit' },
    { label: 'Hours', value: hours, className: 'theme-digit' },
    { label: 'Mins', value: minutes, className: 'theme-digit' },
    { label: 'Secs', value: seconds, className: 'theme-digit-sec animate-[pulseSubtle_3s_ease-in-out_infinite]' },
  ]

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
      {units.map(({ label, value, className }) => (
        <div
          key={label}
          className="theme-countdown-card rounded-xl p-3 sm:p-4 border flex flex-col items-center"
        >
          <span
            suppressHydrationWarning
            className={`font-display text-2xl sm:text-4xl md:text-5xl font-bold ${className}`}
          >
            {value}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 mt-1 font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
