import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NearbyAttractionsGrid } from '@/components/nearby-attractions-grid'
import { campMedia, tanayNearbyAttractions, tanayActivityGroups } from '@/lib/data'
import { ArrowRight, Binoculars, Coffee, Flame, Mountain, Sparkles, Tent, Users } from 'lucide-react'

const icons = [Tent, Flame, Users, Mountain, Binoculars, Coffee, Sparkles]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] flex items-center justify-center">
        <Image src="/images/tanay-campers/camper-16.jpg" alt="Activities at Windmills Viewpoint Camps" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Activities & Group Trips</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Nature relaxation, barkada games, team building, family activities, outdoor weddings, events, and photo or video shoots.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">At Tanay Windmills Viewpoint</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">What to do at camp</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a quiet camp-out, a full barkada itinerary, or a structured school/corporate activity day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tanayActivityGroups.map((group, index) => {
              const Icon = icons[index] || Tent
              return (
                <div key={group.title} className="bg-card border border-border p-6">
                  <Icon className="h-6 w-6 text-primary mb-5" />
                  <h3 className="text-xl font-serif text-foreground mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Explore Tanay</p>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Nearby attractions</h2>
              <p className="text-muted-foreground">
                Pair your day tour or overnight stay with a short drive to wind farms, waterfalls, caves, nature pools, and mountain destinations.
              </p>
            </div>
            <NearbyAttractionsGrid attractions={tanayNearbyAttractions} />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Group Adventures</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Planning a team-building day or office camp-out?</h2>
            <p className="text-muted-foreground mb-8">
              Plan relay games, team building, outdoor weddings, private events, and photo or video shoots with a real camp setting as your backdrop.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors">
              Inquire About Groups
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image src={campMedia.amadeo.gallery[4].src} alt={campMedia.amadeo.gallery[4].alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
