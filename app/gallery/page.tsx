import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { ExternalLink, Facebook, Youtube } from 'lucide-react'
import { galleryImages, influencerFeatures } from '@/lib/data'

export const metadata = {
  title: 'Gallery | Windmills Viewpoint Camps',
  description: 'Real camp, cafe, orchard, and farm photos from Windmills Viewpoint Camps in Tanay and Amadeo.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">From The Grounds</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">
            Real campgrounds, group trips, cafe moments, and nature views from Windmills Viewpoint Camps.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Camp Stories</p>
            <h2 className="text-3xl font-serif md:text-5xl">Featured by campers and creators</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Watch campsite visits, trip recaps, and camper perspectives shared by creators who experienced Windmills Viewpoint.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {influencerFeatures.map((feature) => (
              <article key={feature.id} className="flex min-h-44 flex-col justify-between border border-border bg-background p-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Creator</p>
                  <h3 className="mt-2 text-2xl font-serif">{feature.creator}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {feature.links.map((link, index) => {
                    const Icon = link.platform === 'youtube' ? Youtube : Facebook
                    const platformLabel = link.platform === 'youtube' ? 'YouTube' : 'Facebook'
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${feature.creator} on ${platformLabel}${feature.links.length > 1 ? `, link ${index + 1}` : ''}`}
                        className="inline-flex items-center gap-2 border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        {platformLabel}{feature.links.length > 1 ? ` ${index + 1}` : ''}
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
