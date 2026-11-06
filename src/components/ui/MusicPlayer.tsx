'use client'

import { useAudio } from '@/context/AudioContext'

export default function MusicPlayer() {
  const { isPlaying, togglePlay } = useAudio()

  return (
    <button
      type="button"
      onClick={togglePlay}
      title="Play / Pause Ambient Music"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm border theme-btn-primary ${
        isPlaying ? 'ring-2 ring-offset-1' : ''
      }`}
      style={isPlaying ? { '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties : undefined}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <span className="text-xs" aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">
        {isPlaying ? 'Pause' : 'Play'}
      </span>
    </button>
  )
}
