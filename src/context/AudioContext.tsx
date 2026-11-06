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

  // Keep ref in sync so callbacks always read the latest value without stale closures
  useEffect(() => { isPlayingRef.current = isPlaying }, [isPlaying])

  // ---------------------------------------------------------------------------
  // Core play / pause helpers
  // ---------------------------------------------------------------------------

  const playTrack = useCallback((track: string) => {
    const audio = audioRef.current
    if (track === SYNTH_KEY) {
      if (audio) audio.pause()
      synth.start()
      setIsPlaying(true)
    } else {
      synth.stop()
      if (audio) {
        const doPlay = () => {
          audio.play().then(() => {
            setIsPlaying(true)
          }).catch(() => {
            // Fallback to synth if play() is still rejected
            synth.start()
            setIsPlaying(true)
          })
        }

        if (!audio.src.endsWith(track)) {
          // Src changed — wait for canplay before calling play() to avoid race
          audio.addEventListener('canplay', doPlay, { once: true })
          audio.src = track
          audio.load()
        } else {
          doPlay()
        }
      }
    }
  }, [audioRef, synth])

  const pauseAll = useCallback(() => {
    const audio = audioRef.current
    if (audio) audio.pause()
    synth.stop()
    setIsPlaying(false)
  }, [audioRef, synth])

  // ---------------------------------------------------------------------------
  // Stable ref to playTrack so the first-gesture handler always calls the
  // latest version, even though it is registered in a mount-only effect.
  // ---------------------------------------------------------------------------
  const playTrackRef = useRef(playTrack)
  useEffect(() => { playTrackRef.current = playTrack }, [playTrack])

  // ---------------------------------------------------------------------------
  // On mount: restore saved track, pre-load it, then start on first gesture.
  // Browsers block audio.play() until the user has interacted with the page.
  // We listen for the first click/keydown/touchstart/scroll at capture phase,
  // which fires before any React handler — so even the very first Play button
  // click will trigger autoplay correctly.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const track = saved ?? DEFAULT_TRACK
    setCurrentTrack(track)

    // Pre-load the track so it buffers in the background
    const audio = audioRef.current
    if (audio && track !== SYNTH_KEY) {
      audio.src = track
      audio.load()
    }

    let started = false

    function onFirstGesture() {
      if (started || isPlayingRef.current) return
      started = true
      removeListeners()
      // Use the ref so we always call the latest playTrack function
      playTrackRef.current(track)
    }

    function removeListeners() {
      window.removeEventListener('click',      onFirstGesture, true)
      window.removeEventListener('keydown',    onFirstGesture, true)
      window.removeEventListener('touchstart', onFirstGesture, true)
      window.removeEventListener('scroll',     onFirstGesture, true)
    }

    window.addEventListener('click',      onFirstGesture, true)
    window.addEventListener('keydown',    onFirstGesture, true)
    window.addEventListener('touchstart', onFirstGesture, true)
    window.addEventListener('scroll',     onFirstGesture, true)

    return removeListeners
  }, [audioRef]) // audioRef is stable; this still runs exactly once

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
    localStorage.setItem(STORAGE_KEY, track)

    if (isPlayingRef.current) {
      playTrack(track)
    } else {
      // Pre-load even if not currently playing
      const audio = audioRef.current
      if (track !== SYNTH_KEY && audio && !audio.src.endsWith(track)) {
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
