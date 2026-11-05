'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import { useTanpuraSynth } from '@/hooks/useTanpuraSynth'
import { DEFAULT_TRACK } from '@/content/music'

const STORAGE_KEY = 'wedding_song'
const SYNTH_KEY = 'synth:tanpura'

interface AudioContextValue {
  isPlaying: boolean
  currentTrack: string
  togglePlay: () => void
  selectTrack: (track: string) => void
}

const AudioCtx = createContext<AudioContextValue>({
  isPlaying: false,
  currentTrack: DEFAULT_TRACK,
  togglePlay: () => {},
  selectTrack: () => {},
})

export function AudioProvider({
  children,
  audioRef,
}: {
  children: React.ReactNode
  audioRef: React.RefObject<HTMLAudioElement | null>
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<string>(DEFAULT_TRACK)
  const synth = useTanpuraSynth()
  const isPlayingRef = useRef(false)

  // Keep ref in sync for use inside callbacks
  useEffect(() => { isPlayingRef.current = isPlaying }, [isPlaying])

  // Load saved track on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setCurrentTrack(saved)
      const audio = audioRef.current
      if (audio && saved !== SYNTH_KEY) {
        audio.src = saved
      }
    }
  }, [audioRef])

  // Wire audio element error → tanpura fallback
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    function handleError() {
      if (isPlayingRef.current) {
        synth.start()
      }
    }
    audio.addEventListener('error', handleError)
    return () => audio.removeEventListener('error', handleError)
  }, [audioRef, synth])

  const playTrack = useCallback((track: string) => {
    const audio = audioRef.current
    if (track === SYNTH_KEY) {
      if (audio) audio.pause()
      synth.start()
      setIsPlaying(true)
    } else {
      synth.stop()
      if (audio) {
        if (!audio.src.endsWith(track)) {
          audio.src = track
        }
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // Autoplay blocked or error — fall back to synth
          synth.start()
          setIsPlaying(true)
        })
      }
    }
  }, [audioRef, synth])

  const pauseAll = useCallback(() => {
    const audio = audioRef.current
    if (audio) audio.pause()
    synth.stop()
    setIsPlaying(false)
  }, [audioRef, synth])

  const togglePlay = useCallback(() => {
    if (isPlayingRef.current) {
      pauseAll()
    } else {
      playTrack(currentTrack)
    }
  }, [currentTrack, pauseAll, playTrack])

  const selectTrack = useCallback((track: string) => {
    setCurrentTrack(track)
    localStorage.setItem(STORAGE_KEY, track)

    // Pre-load file track even if not playing
    const audio = audioRef.current
    if (track !== SYNTH_KEY && audio && !audio.src.endsWith(track)) {
      audio.src = track
      audio.load()
    }

    if (isPlayingRef.current) {
      playTrack(track)
    }
  }, [audioRef, playTrack])

  return (
    <AudioCtx.Provider value={{ isPlaying, currentTrack, togglePlay, selectTrack }}>
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  return useContext(AudioCtx)
}
