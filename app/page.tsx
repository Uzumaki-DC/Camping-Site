import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingWidget } from '@/components/booking-widget'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { NearbyAttractionsGrid } from '@/components/nearby-attractions-grid'
import { contactInfo, locations, tanayNearbyAttractions, tanayActivityGroups, tanayRateOptions } from '@/lib/data'
import { ArrowRight, Binoculars, CalendarCheck, Coffee, Flame, MapPin, Mountain, Tent, Users } from 'lucide-react'

const tanay = locations.find((location) => location.id === 'tanay')!

const featuredRates = [
  { label: 'Adult day tour', value: 'PHP 150', detail: '8:00 AM to 5:00 PM' },
  { label: 'Adult overnight', value: 'PHP 250', detail: '3:00 PM to 12:00 NN' },
  { label: 'Kids day tour', value: 'PHP 75', detail: 'Ages 3 to 12' },
  { label: 'BYOT tent pitch', value: 'PHP 150/200', detail: 'Day tour / overnight' },
]

const reservationSteps = [
  'Choose your camp location, visit type, date, guest count, and setup.',
  'Send your reservation request through phone, Viber, email, or Facebook Messenger.',
  'Pay 50% downpayment via GCash to confirm your slot.',
  'Send the GCash receipt screenshot and wait for confirmation within 24 hours.',
]

export default function Home() {
  const activityPreview = tanayActivityGroups.slice(0, 4)
  const vehicleRates = tanayRateOptions.filter((rate) => rate.category === 'vehicle')

  return (
    <main className="min-h-screen">
      <Header transparent />

      <section className="relative h-screen min-h-[720px]">
        <Image src="/images/hero-airstream.jpg" alt="Tanay Windmills Viewpoint campsite" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-foreground/70" />
        <div className="absolute inset-x-0 top-32 px-4">
          <div className="max-w-7xl mx-auto text-primary-foreground">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl text-balance">
              Close enough. Far enough.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Bring-your-own-tent camping, day tours, moto camping, firepit nights, and orchard views at Tanay Windmills Viewpoint.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 border border-primary-foreground/40 px-4 py-2">
                <MapPin className="h-4 w-4" />
                Tanay, Rizal
              </span>
              <span className="inline-flex items-center gap-2 border border-primary-foreground/40 px-4 py-2">
                <Tent className="h-4 w-4" />
                BYOT camping
              </span>
              <span className="inline-flex items-center gap-2 border border-primary-foreground/40 px-4 py-2">
                <Coffee className="h-4 w-4" />
                Cafe & Batangas coffee
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <BookingWidget variant="hero" className="rounded-sm overflow-hidden" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Tanay Windmills Viewpoint</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-balance">
              A windy hilltop retreat under mango trees.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {tanay.description} The site has ample restrooms, baths, a washing bay, cafe internet access, freshly brewed Batangas coffee, and a calm visitor policy that keeps the grounds orderly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {tanay.highlights.slice(0, 4).map((highlight) => (
                <div key={highlight} className="border-l-2 border-primary pl-4 text-sm text-muted-foreground">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary/40 p-6">
            <h3 className="text-2xl font-serif mb-6">Updated Tanay Rates 2026</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredRates.map((rate) => (
                <div key={rate.label} className="bg-background p-4">
                  <p className="text-sm text-muted-foreground">{rate.label}</p>
                  <p className="text-2xl font-serif mt-1">{rate.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{rate.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {vehicleRates.map((rate) => (
                <div key={rate.id} className="flex justify-between gap-4 border-t border-border pt-3 text-sm">
                  <span>{rate.name}</span>
                  <span className="text-muted-foreground">PHP {rate.dayTourPrice} / {rate.overnightPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ['7 hectares', 'orchard farmland and mango trees'],
              ['1 km', 'near the Pililla wind turbines'],
              ['48 hrs', 'free cancellation window'],
              ['50%', 'GCash downpayment to reserve'],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="text-4xl font-serif mb-2">{value}</p>
                <p className="text-primary-foreground/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Activities & Experiences</p>
              <h2 className="text-4xl md:text-5xl font-serif">What to do at camp</h2>
            </div>
            <Link href="/groups-events" className="text-sm font-medium uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-2">
              View group activities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityPreview.map((group, index) => {
              const Icon = [Flame, Mountain, Users, Binoculars][index] || Tent
              return (
                <div key={group.title} className="border border-border p-6">
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-xl font-serif mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.items.slice(0, 5).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Nearby Attractions</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Wind farms, waterfalls, caves, and mountain views.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Build a day tour around Tanay favorites, then come back to camp for coffee, sunset, and a firepit night.
            </p>
          </div>
          <NearbyAttractionsGrid attractions={tanayNearbyAttractions} limit={10} />
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/campfire.jpg" alt="Bonfire night at camp" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Reservations</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">How to book your campsite</h2>
            <div className="space-y-5">
              {reservationSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="h-8 w-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2">
                <CalendarCheck className="h-4 w-4" />
                Reserve Now
              </Link>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="border border-foreground px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-foreground hover:text-primary-foreground transition-colors text-center">
                Call {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-12">
            Camper stories
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      <Footer />
    </main>
  )
}
