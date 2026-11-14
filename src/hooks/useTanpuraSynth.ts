'use client'

import { useRef, useCallback, useEffect, useMemo } from 'react'

interface TanpuraSynth {
  start: () => void
  stop: () => void
}

// Sa-Pa-Sa Tanpura harmonics in Hz
const FREQUENCIES = [146.83, 220.0, 293.66, 440.0]

export function useTanpuraSynth(): TanpuraSynth {
  const ctxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const oscsRef = useRef<OscillatorNode[]>([])
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current)
      oscsRef.current.forEach((o) => { try { o.stop() } catch { /* already stopped */ } })
      oscsRef.current = []
      ctxRef.current?.close().catch(() => {})
    }
  }, [])

  const start = useCallback(() => {
    try {
      // Clear any pending stop
      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current)
        stopTimerRef.current = null
      }

      // Create or resume AudioContext
      if (!ctxRef.current) {
        const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        ctxRef.current = new AudioCtx()
      }
      const ctx = ctxRef.current
      if (ctx.state === 'suspended') ctx.resume()

      // Stop previous oscillators
      oscsRef.current.forEach((o) => { try { o.stop() } catch { /* already stopped */ } })
      oscsRef.current = []

      // Shared gain with fade-in
      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.001, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 1.2)
      gain.connect(ctx.destination)
      gainRef.current = gain

      // Create oscillators
      FREQUENCIES.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        osc.type = i % 2 === 0 ? 'sine' : 'triangle'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        osc.detune.setValueAtTime((i - 1.5) * 4, ctx.currentTime)
        const oscGain = ctx.createGain()
        oscGain.gain.value = 0.2
        osc.connect(oscGain)
        oscGain.connect(gain)
        osc.start()
        oscsRef.current.push(osc)
      })
    } catch (err) {
      console.warn('Tanpura synth start error:', err)
    }
  }, [])

  const stop = useCallback(() => {
    try {
      if (gainRef.current && ctxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctxRef.current.currentTime + 0.5)
      }
      stopTimerRef.current = setTimeout(() => {
        oscsRef.current.forEach((o) => { try { o.stop() } catch { /* already stopped */ } })
        oscsRef.current = []
        stopTimerRef.current = null
      }, 550)
    } catch (err) {
      console.warn('Tanpura synth stop error:', err)
    }
  }, [])

  return useMemo(() => ({ start, stop }), [start, stop])
}
