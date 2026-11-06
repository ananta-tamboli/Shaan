// ============================================================
// Wedding Site — Shared TypeScript Interfaces
// ============================================================

export type ThemeKey = 'emerald' | 'burgundy' | 'terracotta'
export type LangKey = 'en' | 'hi' | 'mr'

export interface CoupleInfo {
  brideName: string
  groomName: string
  brideShort: string
  groomShort: string
  monogram: string
  hashtag: string
  weddingDateIso: string
  weddingDateFormatted: string
  rsvpDeadlineFormatted: string
  venueTagline: string
  venueAddress: string
  invitationBlessing: string
  familyNames: string
  storyQuote: string
  storyParagraph1: string
  storyParagraph2: string
  couplePhoto: string
  couplePhotoAlt: string
  coupleSince: string
  whatsappPhone: string
}

export interface Milestone {
  date: string
  title: string
  description: string
  isHighlight?: boolean
}

export interface DressCodeSwatch {
  hex: string
  label: string
  avoid?: boolean   // true = "please avoid this colour"
}

export interface WeddingEvent {
  key: 'seemant' | 'haldi' | 'wedding' | 'reception'
  calendarKey: 'seemant' | 'haldi' | 'wedding' | 'reception'
  name: string
  tagline: string
  badge: string
  badgeEmoji: string
  date: string
  time: string
  address: string
  dressCodeTitle: string
  dressCodeDetail: string
  dressCodeNote: string
  dressCodeEmoji: string
  dressCodeSwatches: DressCodeSwatch[]
  mapsUrl: string
  /** UTC times for Google Calendar: "YYYYMMDDTHHMMSSz/YYYYMMDDTHHMMSSz" */
  calendarDates: string
  colorKey: 'yellow' | 'rose' | 'emerald'
  isHighlighted?: boolean
  hidden?: boolean
}

export interface GalleryItem {
  src: string
  caption: string
  /** Drop in local path (e.g. '/images/photo1.jpg') to replace placeholder */
  localSrc?: string
}

export interface MusicTrack {
  value: string
  label: string
}

export interface RsvpConfig {
  whatsappPhone: string
  deadlineFormatted: string
}
