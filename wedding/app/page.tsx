import Hero from '@/components/Hero'
import Greeting from '@/components/Greeting'
import Couple from '@/components/Couple'
import Countdown from '@/components/Countdown'
import Details from '@/components/Details'
import Venue from '@/components/Venue'
import Quote from '@/components/Quote'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { normalizeGuestName } from '@/lib/wedding'

export const dynamic = 'force-dynamic'

type SearchParams = { name?: string | string[] }

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const raw = Array.isArray(searchParams.name) ? searchParams.name[0] : searchParams.name
  const guestName = normalizeGuestName(raw)

  return (
    <main className="relative">
      <Hero />
      <Greeting guestName={guestName} />
      <Couple />
      <Quote />
      <Countdown />
      <Details />
      <Venue />
      <Gallery />
      <Footer />
    </main>
  )
}
