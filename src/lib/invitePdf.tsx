// Client-side only — do not import from server components.
// Uses @react-pdf/renderer's browser bundle.
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'

// Register fonts from Google Fonts CDN
Font.register({
  family: 'Cormorant',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_hg9GnM.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf',
      fontWeight: 400,
      fontStyle: 'italic',
    },
  ],
})

Font.register({
  family: 'Cinzel',
  src: 'https://fonts.gstatic.com/s/cinzel/v26/8vIU7ww63mVu7gtR-kwKxNvkNOjw-jHgTYo.ttf',
  fontWeight: 700,
})

// ── Palette ────────────────────────────────────────────────────────────────
const GOLD    = '#b8860b'
const PRIMARY = '#083b2b'
const MUTED   = '#5a4d3e'
const BG      = '#fdfaf4'
const BORDER  = '#e8d9b0'

// ── Styles ─────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: BG,
    paddingHorizontal: 52,
    paddingVertical: 52,
    fontFamily: 'Cormorant',
  },
  outerBorder: {
    position: 'absolute',
    top: 20, left: 20, right: 20, bottom: 20,
    borderWidth: 1,
    borderColor: BORDER,
    borderStyle: 'solid',
  },
  innerBorder: {
    position: 'absolute',
    top: 27, left: 27, right: 27, bottom: 27,
    borderWidth: 0.5,
    borderColor: GOLD,
    borderStyle: 'dashed',
  },
  blessing: {
    fontSize: 11,
    color: PRIMARY,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 18,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: GOLD,
  },
  dividerDot: {
    width: 5, height: 5,
    borderRadius: 2.5,
    backgroundColor: GOLD,
    marginHorizontal: 6,
  },
  tagline: {
    fontStyle: 'italic',
    fontSize: 12,
    color: MUTED,
    textAlign: 'center',
    marginBottom: 4,
  },
  coupleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 10,
    marginVertical: 4,
  },
  brideName: {
    fontFamily: 'Cinzel',
    fontSize: 28,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: 3,
  },
  ampersand: {
    fontStyle: 'italic',
    fontSize: 26,
    color: GOLD,
  },
  groomName: {
    fontFamily: 'Cinzel',
    fontSize: 28,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: 3,
  },
  dateBlock: {
    marginVertical: 14,
    alignItems: 'center',
    gap: 3,
  },
  dateLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 2,
    textAlign: 'center',
  },
  dateText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  subDate: {
    fontSize: 9,
    color: MUTED,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },
  eventCard: {
    width: '47%',
    borderWidth: 0.5,
    borderColor: BORDER,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  eventName: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  goldLine: {
    width: 20,
    borderBottomWidth: 1,
    borderColor: GOLD,
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  eventDress: {
    fontSize: 8,
    color: GOLD,
    fontStyle: 'italic',
  },
  venueBlock: {
    marginTop: 16,
    alignItems: 'center',
    gap: 3,
  },
  venueLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 2,
  },
  venueName: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: 1,
    textAlign: 'center',
  },
  venueAddress: {
    fontSize: 9,
    color: MUTED,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 3,
  },
  footerFamily: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    letterSpacing: 1.5,
    color: PRIMARY,
    textAlign: 'center',
  },
  footerRsvp: {
    fontSize: 8,
    color: MUTED,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  footerHashtag: {
    fontSize: 9,
    color: GOLD,
    fontStyle: 'italic',
  },
})

// ── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <View style={s.dividerRow}>
      <View style={s.dividerLine} />
      <View style={s.dividerDot} />
      <View style={s.dividerLine} />
    </View>
  )
}

// ── Document ─────────────────────────────────────────────────────────────────
export function InviteDocument() {
  const eventData = [
    { name: 'Seemant Pujan',       time: 'Sun Dec 13  ·  7:30 AM',   dress: 'Traditional Festive Wear'   },
    { name: 'Haldi Ceremony',      time: 'Sun Dec 13  ·  8:00 AM',   dress: 'Cloud White & Aqua Blue'    },
    { name: 'Sacred Pheras',        time: 'Sun Dec 13  ·  5:46 PM',   dress: 'Royal Traditional & Silk'   },
    { name: 'The Grand Reception', time: 'Sun Dec 13  ·  7:30 PM',   dress: 'Black Tie / Indo-Western'   },
  ]

  return (
    <Document
      title="Shamika & Ananta — Wedding Invitation"
      author="Shamika & Ananta"
      subject="Wedding Invitation — December 13, 2026"
    >
      <Page size="A4" style={s.page}>
        <View style={s.outerBorder} fixed />
        <View style={s.innerBorder} fixed />

        {/* Blessing */}
        <Text style={s.blessing}>॥ श्री गणेशाय नमः ॥</Text>

        <Divider />

        {/* Tagline */}
        <Text style={s.tagline}>Together with their families, joyfully invite you to celebrate</Text>

        {/* Names */}
        <View style={s.coupleRow}>
          <Text style={s.brideName}>SHAMIKA</Text>
          <Text style={s.ampersand}>&amp;</Text>
          <Text style={s.groomName}>ANANTA</Text>
        </View>

        <Divider />

        {/* Date */}
        <View style={s.dateBlock}>
          <Text style={s.dateLabel}>THE AUSPICIOUS UNION</Text>
          <Text style={s.dateText}>SUNDAY  ·  DECEMBER 13  ·  2026</Text>
          <Text style={s.subDate}>Margashirsha Shuddha Vinayak Chaturthi  ·  Shake 1948</Text>
          <Text style={s.subDate}>Muhurtham at 5:46 PM IST</Text>
        </View>

        <Divider />

        {/* Events */}
        <View style={s.eventsGrid}>
          {eventData.map((ev) => (
            <View key={ev.name} style={s.eventCard}>
              <Text style={s.eventName}>{ev.name.toUpperCase()}</Text>
              <View style={s.goldLine} />
              <Text style={s.eventTime}>{ev.time}</Text>
              <Text style={s.eventDress}>{ev.dress}</Text>
            </View>
          ))}
        </View>

        <Divider />

        {/* Venue */}
        <View style={s.venueBlock}>
          <Text style={s.venueLabel}>VENUE</Text>
          <Text style={s.venueName}>Oasis Banquets</Text>
          <Text style={s.venueAddress}>
            NDA Pashan Rd, Chandani Chowk, Warje, Pune 411058, Maharashtra
          </Text>
        </View>

        <Divider />

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.footerFamily}>The Thakur &amp; Tamboli Families</Text>
          <Text style={s.footerRsvp}>
            Kindly respond by November 20, 2026  ·  RSVP: +91 98505 30250
          </Text>
          <Text style={s.footerHashtag}>#Shaan</Text>
        </View>
      </Page>
    </Document>
  )
}
