import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingWidget } from '@/components/booking-widget'
import { locations, nearbyAttractions, tanayActivityGroups, tanayRateOptions } from '@/lib/data'
import { CalendarCheck, Car, Coffee, Droplets, Flame, Lightbulb, MapPin, ShieldPlus, ShoppingBag, Tent, Wifi } from 'lucide-react'

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = locations.find((loc) => loc.id === slug)

  if (!location) {
    return { title: 'Camp Not Found | Windmills' }
  }

  return {
    title: `${location.name} | Windmills Camp Grounds`,
    description: location.description,
  }
}

const amenityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Clean Comfort Rooms': Droplets,
  'Showers & Washing Bay': Droplets,
  'Cafe & Snack Bar': Coffee,
  'Fresh Batangas Coffee': Coffee,
  'Coffee & Snack Bar': Coffee,
  'Firepit Areas': Flame,
  'Parking Area': Car,
  'Ground Lighting': Lightbulb,
  'Internet Access at Cafe': Wifi,
  'First Aid Station': ShieldPlus,
  'Camp Store': ShoppingBag,
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = locations.find((loc) => loc.id === slug)

  if (!location) {
    notFound()
  }

  const isTanay = location.id === 'tanay'

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[70vh] min-h-[540px]">
        <Image src={location.image} alt={location.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent" />
        <div className="absolute inset-x-0 top-32 px-4">
          <div className="max-w-7xl mx-auto text-primary-foreground">
            <p className="text-xs uppercase tracking-wider mb-4 text-primary-foreground/75">{location.shortName}</p>
            <h1 className="text-4xl md:text-6xl font-serif max-w-4xl leading-tight text-balance">{location.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{location.tagline}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <div className="max-w-6xl mx-auto">
            <BookingWidget variant="hero" className="rounded-sm overflow-hidden shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-14">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">About this camp</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
              {location.tagline.charAt(0).toUpperCase() + location.tagline.slice(1)}.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{location.description}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {location.highlights.map((highlight) => (
                <div key={highlight} className="border-l-2 border-primary pl-4 text-sm text-muted-foreground">
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-secondary/40 p-6">
            <h3 className="text-2xl font-serif mb-5">Camp Details</h3>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
              </div>
              {location.travelNotes.map((note) => (
                <div key={note} className="flex gap-3">
                  <CalendarCheck className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {isTanay && (
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/65 mb-4">Updated Rates 2026</p>
                <h2 className="text-4xl md:text-5xl font-serif">Tanay pricing from the rate sheet</h2>
              </div>
              <p className="max-w-xl text-primary-foreground/75">
                Photoshoot fee is PHP 1,000 plus entrance and parking. Vehicle packages and parking are charged according to setup.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tanayRateOptions.map((rate) => (
                <div key={rate.id} className="border border-primary-foreground/15 p-5">
                  <p className="font-medium">{rate.name}</p>
                  <p className="text-primary-foreground/65 text-sm mt-1">{rate.description}</p>
                  <div className="flex justify-between gap-4 mt-4 text-sm">
                    <span>Day tour</span>
                    <span>PHP {rate.dayTourPrice}</span>
                  </div>
                  <div className="flex justify-between gap-4 mt-1 text-sm">
                    <span>Overnight</span>
                    <span>PHP {rate.overnightPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">Facilities & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {location.amenities.map((amenity) => {
              const IconComponent = amenityIconMap[amenity] || Tent
              return (
                <div key={amenity} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                    <IconComponent className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm">{amenity}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {isTanay ? 'Things to do in Tanay' : 'Coffee country experiences'}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              {isTanay ? 'Camp, play, explore, and unwind.' : 'Farm air, firepit nights, and barako mornings.'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isTanay
                ? 'The spreadsheet lists nature relaxation, team building, recreational games, family activities, food experiences, wellness, and optional add-ons.'
                : 'The website copy positions Amadeo as a coffee-farm camp for barkada trips, family weekends, and corporate outings.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {(isTanay ? tanayActivityGroups.slice(0, 4) : [
              { title: 'Coffee Farm Walk', items: ['Bean-to-barako guided tours', 'Farm harvest experience', 'Coffee and breakfast in the hills'] },
              { title: 'Hillside Camp Life', items: ['Firepit kwentuhan', 'Stargazing nights', 'Camp cooking'] },
              { title: 'Wellness', items: ['Sunrise farm yoga', 'Cool morning walks', 'Digital detox'] },
              { title: 'Group Trips', items: ['Barkada stays', 'Family weekends', 'Office outings'] },
            ]).map((group) => (
              <div key={group.title} className="bg-background p-5">
                <h3 className="font-serif text-xl mb-3">{group.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isTanay && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Nearby Attractions</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Add these stops to your Tanay trip.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {nearbyAttractions.map((attraction) => (
                <div key={attraction.name} className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="font-medium">{attraction.name}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{attraction.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-4 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-4">Reservations</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Send a request, then confirm with 50% GCash downpayment.</h2>
            <p className="text-primary-foreground/70 max-w-2xl">
              Balance is due upon arrival. Free cancellation is available up to 48 hours before arrival; rescheduling is allowed with at least 24 hours notice, subject to availability.
            </p>
          </div>
          <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors text-center">
            Reserve this camp
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
