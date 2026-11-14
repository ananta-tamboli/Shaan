import type { MusicTrack } from '@/types/wedding'

export const musicTracks: MusicTrack[] = [
  {
    value: 'audio/mohabbatein-love-theme.mp3',
    label: '🎻 Mohabbatein Love Theme (Instrumental) [Default]',
  },
  {
    value: 'audio/jashn-e-bahara.mp3',
    label: '🎵 Jashn-e-Baharaa (Flute)',
  },
  {
    value: 'audio/royal-strings.mp3',
    label: '🎻 Royal Strings & Oboe (A.R. Rahman)',
  },
  {
    value: 'audio/in-lamhon-ke-daaman-mein.mp3',
    label: '💫 In Lamhon Ke Daaman Mein (Romantic)',
  },
  {
    value: 'synth:tanpura',
    label: '🪔 Sacred Tanpura Drone (Live Synth)',
  },
]

export const DEFAULT_TRACK = 'audio/mohabbatein-love-theme.mp3'
