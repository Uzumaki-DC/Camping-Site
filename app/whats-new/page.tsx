import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { announcements } from '@/lib/data'

export const metadata = {
  title: "What's New | Windmills Viewpoint Camps",
  description: 'Camp guides, seasonal notes, and archived offers from Windmills Viewpoint Camps.',
}

export default function WhatsNewPage() {
  const currentGuides = announcements.filter((item) => item.status === 'active')
  const archivedOffers = announcements.filter((item) => item.status === 'archived')

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">Camp Notes & Announcements</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">What&apos;s New</h1>
          <p className="text-primary-foreground/80 text-lg">
            Practical camp guides, seasonal updates, and past Windmills announcements.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Plan Your Stay</p>
            <h2 className="text-3xl md:text-5xl font-serif">Camp guides</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {currentGuides.map((item) => (
              <Link key={item.id} href={`/whats-new/${item.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{item.category} / {item.dateLabel}</p>
                <h3 className="mt-2 text-2xl font-serif transition-colors group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Read guide <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">For Reference</p>
            <h2 className="text-3xl md:text-5xl font-serif">Archived offers</h2>
            <p className="mt-4 text-muted-foreground">These announcements are no longer active and are preserved as examples of past seasonal activities.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {archivedOffers.map((item) => (
              <Link key={item.id} href={`/whats-new/${item.slug}`} className="group grid border border-border bg-background sm:grid-cols-[0.85fr_1fr]">
                <div className="relative min-h-80 bg-muted sm:min-h-full">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-contain p-3" />
                </div>
                <div className="p-6">
                  <span className="inline-flex border border-border px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Archived</span>
                  <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-serif transition-colors group-hover:text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                    View announcement <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
