'use client'

import { useRef } from 'react'
import { AudioProvider } from '@/context/AudioContext'
import { DEFAULT_TRACK } from '@/content/music'

/**
 * Client component that owns the singleton <audio> element ref
 * and wraps children in AudioProvider.
 */
export default function AudioElement({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  return (
    <AudioProvider audioRef={audioRef}>
      <audio
        ref={audioRef}
        id="weddingAudio"
        loop
        preload="auto"
        src={DEFAULT_TRACK}
        aria-label="Wedding ambient music"
      />
      {children}
    </AudioProvider>
  )
}
