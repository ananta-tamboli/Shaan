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

function matchesTrack(audioSrc: string | null | undefined, track: string): boolean {
  if (!audioSrc || !track) return false
  const cleanTrack = track.replace(/^\//, '')
  return audioSrc.endsWith(cleanTrack)
}

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
  const synthRef = useRef(synth)
  useEffect(() => { synthRef.current = synth }, [synth])

  const isPlayingRef = useRef(false)

  // Keep ref in sync so callbacks always read the latest value without stale closures
  useEffect(() => { isPlayingRef.current = isPlaying }, [isPlaying])

  // ---------------------------------------------------------------------------
  // Core play / pause helpers
  // ---------------------------------------------------------------------------

  const playTrack = useCallback((track: string) => {
    const audio = audioRef.current
    if (track === SYNTH_KEY) {
      if (audio) audio.pause()
      synthRef.current.start()
      setIsPlaying(true)
    } else {
      synthRef.current.stop()
      if (audio) {
        if (!matchesTrack(audio.src, track)) {
          audio.src = track
        }
        const promise = audio.play()
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((err) => {
              console.warn('Audio play was prevented or failed:', err)
              if (err.name !== 'NotAllowedError') {
                // Graceful fallback to synth on playback decode/format errors
                synthRef.current.start()
                setIsPlaying(true)
              }
            })
        }
      }
    }
  }, [audioRef])

  const pauseAll = useCallback(() => {
    const audio = audioRef.current
    if (audio) audio.pause()
    synthRef.current.stop()
    setIsPlaying(false)
  }, [audioRef])

  // ---------------------------------------------------------------------------
  // On mount: restore saved track (migrating old default), pre-load it,
  // and attach robust user activation listeners.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {}

    // If previously saved with the legacy default, migrate to the new default
    const track = (saved && saved !== 'audio/jashn-e-bahara.mp3') ? saved : DEFAULT_TRACK
    setCurrentTrack(track)

    // Pre-load the track if not already matching
    const audio = audioRef.current
    if (audio && track !== SYNTH_KEY) {
      if (!matchesTrack(audio.src, track)) {
        audio.src = track
      }
    }

    let isAttempting = false

    function removeListeners() {
      window.removeEventListener('click',       onFirstGesture, true)
      window.removeEventListener('pointerdown', onFirstGesture, true)
      window.removeEventListener('keydown',     onFirstGesture, true)
      window.removeEventListener('touchstart',  onFirstGesture, true)
    }

    function onFirstGesture(e: Event) {
      if (isPlayingRef.current || isAttempting) return

      // Ignore clicks directly on music toggle button to avoid racing with togglePlay
      const target = e.target as HTMLElement | null
      if (target && target.closest('[title*="Ambient Music"], [aria-label*="Music"], #musicBtn')) {
        return
      }

      isAttempting = true
      const audioEl = audioRef.current

      if (track === SYNTH_KEY) {
        synthRef.current.start()
        setIsPlaying(true)
        removeListeners()
        isAttempting = false
      } else if (audioEl) {
        synthRef.current.stop()
        if (!matchesTrack(audioEl.src, track)) {
          audioEl.src = track
        }
        const promise = audioEl.play()
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true)
              removeListeners()
              isAttempting = false
            })
            .catch(() => {
              // User gesture was not yet valid or was interrupted;
              // keep listeners active so the next interaction can retry.
              isAttempting = false
            })
        } else {
          isAttempting = false
        }
      } else {
        isAttempting = false
      }
    }

    // Modern transient activation events (do NOT include 'scroll' as browsers reject it)
    window.addEventListener('click',       onFirstGesture, true)
    window.addEventListener('pointerdown', onFirstGesture, true)
    window.addEventListener('keydown',     onFirstGesture, true)
    window.addEventListener('touchstart',  onFirstGesture, true)

    return removeListeners
  }, [audioRef])

  // ---------------------------------------------------------------------------
  // Wire audio element error event → tanpura fallback
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  const togglePlay = useCallback(() => {
    if (isPlayingRef.current) {
      pauseAll()
    } else {
      playTrack(currentTrack)
    }
  }, [currentTrack, pauseAll, playTrack])

  const selectTrack = useCallback((track: string) => {
    setCurrentTrack(track)
    try {
      localStorage.setItem(STORAGE_KEY, track)
    } catch {}

    if (isPlayingRef.current) {
      playTrack(track)
    } else {
      // Pre-load even if not currently playing
      const audio = audioRef.current
      if (track !== SYNTH_KEY && audio && !matchesTrack(audio.src, track)) {
        audio.src = track
        audio.load()
      }
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
