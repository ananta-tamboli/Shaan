import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import Itinerary from '@/components/sections/Itinerary'
import Gallery from '@/components/sections/Gallery'
import Rsvp from '@/components/sections/Rsvp'
import EnvelopeIntro from '@/components/ui/EnvelopeIntro'

export default function Home() {
  return (
    <>
      <EnvelopeIntro />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Itinerary />
        <Gallery />
        <Rsvp />
      </main>
      <Footer />
    </>
  )
}
