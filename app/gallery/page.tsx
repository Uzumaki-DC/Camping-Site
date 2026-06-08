"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  {
    src: "/images/tanay-grounds.jpg",
    alt: "Shaded lawn with mango trees and wagon-wheel benches",
    category: "Grounds",
  },
  {
    src: "/images/tanay-pavilion.jpg",
    alt: "Open-air dining pavilion framed by mango trees",
    category: "Pavilion",
  },
  {
    src: "/images/tanay-pavilion-wide.jpg",
    alt: "Wide view of the camp pavilion and surrounding greenery",
    category: "Pavilion",
  },
  {
    src: "/images/tanay-watchtower.jpg",
    alt: "Watchtower beside the camp pavilion under blue skies",
    category: "Grounds",
  },
  {
    src: "/images/tanay-pavilion-side.jpg",
    alt: "Side view of the pavilion with potted plants and garden",
    category: "Pavilion",
  },
  {
    src: "/images/tanay-restrooms.jpg",
    alt: "Camp restrooms with rustic wooden doors",
    category: "Facilities",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">
            Campgrounds, firepit nights, group trips, cafe moments, and nature views from the Windmills experience.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <figure key={image.alt} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="mt-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{image.category}</p>
                <p className="font-medium">{image.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
