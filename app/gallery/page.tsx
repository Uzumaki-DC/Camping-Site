import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { galleryImages } from '@/lib/data'

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
      <Footer />
    </main>
  )
}
