import { couple } from '@/content/couple'

/** Opens Google Calendar event for the main wedding muhurtham */
export function addToGoogleCalendarMain() {
  const { brideShort, groomShort, venueTagline, venueAddress } = couple
  const title = encodeURIComponent(`Wedding of ${brideShort} & ${groomShort}`)
  const details = encodeURIComponent(
    `We joyfully invite you to celebrate our wedding at ${venueTagline}.`
  )
  const location = encodeURIComponent(venueAddress)
  // Dec 13, 2026 at 5:46 PM IST = 12:16 UTC. Baraat from 4:30 PM IST = 11:00 UTC.
  const dates = '20261213T110000Z/20261213T141600Z'
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`
  window.open(url, '_blank')
}

/** Opens Google Calendar event for a specific ceremony */
export function addToCalendar(eventKey: 'seemant' | 'haldi' | 'wedding' | 'reception') {
  const { brideShort, groomShort, venueAddress } = couple
  const b = brideShort
  const g = groomShort
  const location = encodeURIComponent(venueAddress)

  let title = ''
  let dates = ''
  let details = ''

  if (eventKey === 'seemant') {
    title = encodeURIComponent(`Seemant Pujan - ${b} & ${g}`)
    // Dec 13 at 7:30 AM IST = 02:00 UTC; ends ~8:00 AM IST = 02:30 UTC
    dates = '20261213T020000Z/20261213T023000Z'
    details = encodeURIComponent(
      'Sacred pre-wedding blessing ceremony at Oasis Banquets, Pune. Dress code: Traditional Festive Wear.'
    )
  } else if (eventKey === 'haldi') {
    title = encodeURIComponent(`Haldi Ceremony - ${b} & ${g}`)
    // Dec 13 at 8:00 AM IST = 02:30 UTC; ends ~10:00 AM IST = 04:30 UTC
    dates = '20261213T023000Z/20261213T043000Z'
    details = encodeURIComponent(
      'Haldi & Phoolon Ki Holi at Oasis Banquets, Pune. Dress code: Yellow & Festive Florals.'
    )
  } else if (eventKey === 'wedding') {
    title = encodeURIComponent(`Wedding Ceremony (Muhurtham) - ${b} & ${g}`)
    // Baraat 4:30 PM IST = 11:00 UTC; Muhurtham 5:46 PM IST = 12:16 UTC
    dates = '20261213T110000Z/20261213T141600Z'
    details = encodeURIComponent(
      'Sacred Pheras & Baraat at Oasis Banquets, Pune. Muhurtham at 5:46 PM. Dress code: Royal Traditional Festive.'
    )
  } else if (eventKey === 'reception') {
    title = encodeURIComponent(`Grand Reception - ${b} & ${g}`)
    // Dec 13 at 7:30 PM IST = 14:00 UTC
    dates = '20261213T140000Z/20261213T190000Z'
    details = encodeURIComponent(
      'Celebration Dinner & Toast at Oasis Banquets, Pune. Dress code: Black Tie or Indo-Western Chic.'
    )
  }

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`
  window.open(url, '_blank')
}
