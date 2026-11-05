import type { WeddingEvent } from '@/types/wedding'

const MAPS_URL =
  'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiAkOHw0t-XAxUAAAAAHQAAAAAQBg..i&client=safari&udm&fvr=1&pvq=CgsvZy8xdGQ3OWx3cCIRCgtvYXNpcyBob3RlbBACGAM&lqi=ChBvYXNpcyBob3RlbCBwdW5lSPWW08PlgICACFoaEAAQARgAGAIiEG9hc2lzIGhvdGVsIHB1bmWSARdub3J0aF9pbmRpYW5fcmVzdGF1cmFudA&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bc2be36604ced09:0x7db8dc0be2fd944f'

const VENUE_ADDRESS =
  'Oasis Banquets, NDA Pashan Rd, Chandani Chowk, Warje, Pune, Maharashtra 411058'

export const events: WeddingEvent[] = [
  {
    key: 'haldi',
    calendarKey: 'haldi',
    name: 'Haldi Ceremony',
    tagline: 'Sunlit Joy & Marigold Blessings',
    badge: 'Haldi & Phoolon Ki Holi',
    badgeEmoji: '🌼',
    date: 'Saturday, December 12, 2026',
    time: '10:30 AM Onwards',
    address: VENUE_ADDRESS,
    dressCodeTitle: 'Shades of Sunshine Yellow & Festive Florals',
    dressCodeDetail: 'Get ready to be drenched in haldi paste and fresh rose petals!',
    dressCodeNote: 'Shades of Sunshine Yellow & Festive Florals',
    dressCodeEmoji: '👗',
    mapsUrl: MAPS_URL,
    calendarDates: '20261212T050000Z/20261212T090000Z',
    colorKey: 'yellow',
  },
  {
    key: 'wedding',
    calendarKey: 'wedding',
    name: 'Sacred Pheras',
    tagline: 'Eternal Vows & Saat Phere',
    badge: 'The Main Wedding (Muhurtham)',
    badgeEmoji: '💍',
    date: 'Sunday, December 13, 2026',
    time: '04:30 PM (Baraat) | 06:46 PM (Pheras)',
    address: VENUE_ADDRESS,
    dressCodeTitle: 'Royal Traditional Festive & Silk Elegance',
    dressCodeDetail: 'Sherwanis, Bandhgalas, Kanjeevarams, and Regal Lehengas.',
    dressCodeNote: 'Royal Traditional Festive & Silk Elegance',
    dressCodeEmoji: '👑',
    mapsUrl: MAPS_URL,
    calendarDates: '20261213T110000Z/20261213T170000Z',
    colorKey: 'rose',
    isHighlighted: true,
  },
  {
    key: 'reception',
    calendarKey: 'reception',
    name: 'The Grand Reception',
    tagline: 'Dinner, Dance & Toast',
    badge: 'Grand Reception & Sangeet Night',
    badgeEmoji: '🥂',
    date: 'Sunday, December 13, 2026',
    time: '07:30 PM Onwards',
    address: VENUE_ADDRESS,
    dressCodeTitle: 'Black Tie or Indo-Western Chic',
    dressCodeDetail: 'Tuxedos, Evening Gowns, Cocktail Sarees, and Modern Suits.',
    dressCodeNote: 'Black Tie or Indo-Western Chic',
    dressCodeEmoji: '✨',
    mapsUrl: MAPS_URL,
    calendarDates: '20261213T140000Z/20261213T190000Z',
    colorKey: 'emerald',
  },
]
