import { couple } from '@/content/couple'

/** Opens Google Calendar event for the main wedding */
export function addToGoogleCalendarMain() {
  const { brideShort, groomShort, venueTagline, venueAddress } = couple
  const title = encodeURIComponent(`Wedding of ${brideShort} & ${groomShort}`)
  const details = encodeURIComponent(
    `We joyfully invite you to celebrate our wedding at ${venueTagline}.`
  )
  const location = encodeURIComponent(venueAddress)
  // Dec 13, 2026 at 18:46 IST = 13:16 UTC
  const dates = '20261213T131600Z/20261213T190000Z'
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`
  window.open(url, '_blank')
}

/** Opens Google Calendar event for a specific ceremony */
export function addToCalendar(eventKey: 'haldi' | 'wedding' | 'reception') {
  const { brideShort, groomShort, venueAddress } = couple
  const b = brideShort
  const g = groomShort
  const location = encodeURIComponent(venueAddress)

  let title = ''
  let dates = ''
  let details = ''

  if (eventKey === 'haldi') {
    title = encodeURIComponent(`Haldi Ceremony - ${b} & ${g}`)
    dates = '20261212T050000Z/20261212T090000Z'
    details = encodeURIComponent(
      'Haldi & Phoolon Ki Holi at Oasis Banquets, Pune. Dress code: Yellow & Festive Florals.'
    )
  } else if (eventKey === 'wedding') {
    title = encodeURIComponent(`Wedding Ceremony (Muhurtham) - ${b} & ${g}`)
    dates = '20261213T110000Z/20261213T170000Z'
    details = encodeURIComponent(
      'Sacred Pheras & Baraat at Oasis Banquets, Pune. Dress code: Royal Traditional Festive.'
    )
  } else if (eventKey === 'reception') {
    title = encodeURIComponent(`Grand Reception - ${b} & ${g}`)
    dates = '20261213T140000Z/20261213T190000Z'
    details = encodeURIComponent(
      'Celebration Dinner & Toast at Oasis Banquets, Pune. Dress code: Black Tie or Indo-Western Chic.'
    )
  }

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`
  window.open(url, '_blank')
}
