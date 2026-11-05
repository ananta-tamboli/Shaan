'use client'

import { useEffect, useState } from 'react'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  isOver: boolean
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

function compute(isoDate: string): CountdownValues {
  const target = new Date(isoDate).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', isOver: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds), isOver: false }
}

export function useCountdown(isoDate: string): CountdownValues {
  const [values, setValues] = useState<CountdownValues>(() => compute(isoDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(compute(isoDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [isoDate])

  return values
}
