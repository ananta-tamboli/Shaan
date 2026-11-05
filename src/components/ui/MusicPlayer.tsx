'use client'

import { useAudio } from '@/context/AudioContext'
import { musicTracks } from '@/content/music'

export default function MusicPlayer() {
  const { isPlaying, currentTrack, togglePlay, selectTrack } = useAudio()

  return (
    <div className="flex items-center bg-gradient-to-r from-amber-100/95 to-amber-50/95 border border-amber-300/80 rounded-full p-0.5 sm:p-1 shadow-sm backdrop-blur-sm">
      {/* Play / Pause */}
      <button
        type="button"
        onClick={togglePlay}
        title="Play / Pause Ambient Music"
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white transition-all shadow-sm ${
          isPlaying ? 'bg-amber-800 ring-2 ring-amber-400' : 'bg-amber-700 hover:bg-amber-800'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="text-xs" aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">
          {isPlaying ? 'Pause' : 'Play'}
        </span>
      </button>

      {/* Track selector */}
      <div className="relative flex items-center pr-1 pl-1">
        <select
          value={currentTrack}
          onChange={(e) => selectTrack(e.target.value)}
          aria-label="Select Wedding Soundtrack"
          className="bg-transparent text-amber-950 text-[11px] sm:text-xs font-medium pl-1 pr-4 py-0.5 rounded cursor-pointer focus:outline-none max-w-[105px] sm:max-w-[190px] md:max-w-[220px] truncate appearance-none"
        >
          {musicTracks.map((track) => (
            <option key={track.value} value={track.value}>
              {track.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-1 text-[8px] text-amber-800 font-bold" aria-hidden="true">▼</span>
      </div>
    </div>
  )
}
