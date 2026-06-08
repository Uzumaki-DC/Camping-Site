'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingWidget } from '@/components/booking-widget'
import { locations } from '@/lib/data'
import { ArrowRight, Clock, MapPin, Tent } from 'lucide-react'

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-[120px] relative">
        <div className="relative h-[520px] bg-primary overflow-hidden">
          <Image src="/images/hero-airstream.jpg" alt="Windmills Camp Grounds" fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute inset-x-0 top-20 px-4">
            <div className="max-w-7xl mx-auto text-primary-foreground">
              <h1 className="text-4xl md:text-6xl font-serif max-w-3xl leading-tight">
                Two locations, one outdoor escape.
              </h1>
              <p className="mt-5 max-w-2xl text-primary-foreground/80">
                Choose the highland windmill camp in Tanay or the coffee-country camp in Amadeo.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <div className="max-w-6xl mx-auto">
              <BookingWidget variant="hero" className="rounded-sm overflow-hidden shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Windmills Camp Grounds</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-4xl text-balance">
              Close enough to Metro Manila, far enough to feel like camp.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Bring your tent, your crew, and your camp essentials. We provide the grounds, scenery, fire areas, facilities, and cool outdoor air.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Link key={location.id} href={`/locations/${location.id}`} className="group">
                <article className="grid md:grid-cols-[0.9fr_1.1fr] border border-border min-h-full">
                  <div className="relative min-h-[280px] overflow-hidden">
                    <Image src={location.image} alt={location.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{location.shortName}</p>
                    <h3 className="text-3xl font-serif mb-3 group-hover:text-primary transition-colors">{location.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{location.description}</p>
                    <div className="space-y-3 text-sm text-muted-foreground mb-8">
                      <div className="flex gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{location.travelNotes[0]}</span>
                      </div>
                      <div className="flex gap-3">
                        <Tent className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{location.accommodationTypes.length} camp setup options listed</span>
                      </div>
                    </div>
                    <span className="mt-auto text-sm font-medium uppercase tracking-wider text-primary inline-flex items-center gap-2">
                      Explore {location.shortName} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
