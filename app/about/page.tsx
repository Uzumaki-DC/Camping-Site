import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { locations } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About | Windmills Camp Grounds',
  description: 'Learn about Windmills Camp Grounds, a BYOT camping destination in Tanay, Rizal and Amadeo, Cavite.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] min-h-[420px]">
        <Image src="/images/campfire.jpg" alt="Evening at Windmills Camp Grounds" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/30 to-transparent" />
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">About Windmills</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 max-w-4xl leading-tight">
            The Philippine camping ground.
            <br />
            Close enough. Far enough.
          </h1>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Windmills Camp Grounds is the go-to camping destination for the modern Filipino adventurer: close enough to Metro Manila, yet worlds away the moment you arrive. It is built for barkada getaways, family reunion weekends, school trips, and corporate office outings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-5">
                We provide the grounds, scenery, fire areas, parking, and facilities. Campers bring the tent, the crew, and the good vibes.
              </p>
            </div>
            <div className="bg-secondary/40 p-6">
              <h2 className="text-2xl font-serif mb-4">BYOT Camping</h2>
              <p className="text-muted-foreground leading-relaxed">
                Windmills is primarily a Bring Your Own Tent camping ground. Campers pitch their own tents at reserved sites, with access to comfort rooms, showers, firepit areas, ground lighting, parking, and camp support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Our Two Locations</p>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Link key={location.id} href={`/locations/${location.id}`} className="group bg-background border border-border">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={location.image} alt={location.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{location.shortName}</h2>
                  <p className="text-muted-foreground mb-5">{location.description}</p>
                  <span className="text-sm font-medium uppercase tracking-wider text-primary inline-flex items-center gap-2">
                    Explore camp <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-relaxed text-balance">
            Bring your tent.
            <br />
            Bring your people.
            <br />
            We will take care of the grounds.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
