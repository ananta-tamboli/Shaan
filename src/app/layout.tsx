import type { Metadata } from 'next'
import { Cormorant_Garamond, Cinzel, Alex_Brush, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import AudioElement from '@/components/ui/AudioElement'
import './globals.css'

// ── Google Fonts ──────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// ── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Shamika & Ananta — Wedding Celebration Invitation',
  description:
    'Join us in celebrating the wedding of Shamika & Ananta at Oasis Banquets, Pune. Details, itinerary, venue maps, and RSVP inside.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'Shamika & Ananta — Wedding Invitation',
    description:
      'We invite you to celebrate our special day with us. View itinerary, venue maps, and RSVP.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${cinzel.variable} ${alexBrush.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <AudioElement>
            {children}
          </AudioElement>
        </ThemeProvider>
      </body>
    </html>
  )
}
