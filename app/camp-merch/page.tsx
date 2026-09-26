import Image from 'next/image'
import Link from 'next/link'
import { Coffee, Flashlight, Shirt, Umbrella, CupSoda, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Camp Merch | Windmills Viewpoint Camps',
  description: 'A preview of future Windmills camp merchandise.',
}

const categories = [
  { name: 'Camp Hoodies', icon: Shirt },
  { name: 'Coffee Mugs', icon: Coffee },
  { name: 'Travel Flasks', icon: CupSoda },
  { name: 'Flashlights', icon: Flashlight },
  { name: 'Umbrellas', icon: Umbrella },
]

export default function CampMerchPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Coming Soon</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-tight text-balance">Useful camp goods, made for Windmills weekends.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We are developing a small collection of practical camp merchandise. Product availability and release details will be announced when they are confirmed.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
              Contact the camp <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
            <Image src="/images/feedback/gallery-welcome-sign.jpg" alt="Windmills Viewpoint Cafe welcome sign beside the camp" fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Planned Collection</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-10">What we are exploring</h2>
          <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <div key={category.name} className="min-h-44 bg-background p-6 flex flex-col justify-between">
                <category.icon className="size-6 text-primary" />
                <p className="font-serif text-xl">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
