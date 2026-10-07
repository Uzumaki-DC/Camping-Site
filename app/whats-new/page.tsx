import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { whatsNewPosts } from '@/lib/data'

export const metadata = {
  title: 'Offers | Windmills Viewpoint Camps',
  description: 'Current camp updates, practical guides, seasonal activities, and stories from Windmills Viewpoint Camps.',
}

export default function WhatsNewPage() {
  const currentGuides = whatsNewPosts
    .filter((item) => item.section === 'guide')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  const campStories = whatsNewPosts
    .filter((item) => item.section === 'activity')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">Camp Updates & Seasonal Activities</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Offers</h1>
          <p className="text-primary-foreground/80 text-lg">
            Current camp notes, practical guides, seasonal activities, and stories from the Windmills grounds.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Latest From Camp</p>
            <h2 className="text-3xl md:text-5xl font-serif">Updates and guides</h2>
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">From the Camp</p>
            <h2 className="text-3xl md:text-5xl font-serif">Camp stories</h2>
            <p className="mt-4 text-muted-foreground">
              Seasonal activities, memorable weekends, and everyday experiences from around the Windmills grounds.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {campStories.map((item) => (
              <Link key={item.id} href={`/whats-new/${item.slug}`} className="group border border-border bg-background">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.category} / {item.dateLabel}</p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-serif transition-colors group-hover:text-primary">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                    Read story <ArrowRight className="size-4" />
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
