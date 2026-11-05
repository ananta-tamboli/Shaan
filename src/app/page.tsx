import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import Itinerary from '@/components/sections/Itinerary'
import Gallery from '@/components/sections/Gallery'
import Rsvp from '@/components/sections/Rsvp'

export default function Home() {
  return (
    <>
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
