"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  { src: "/images/hero-airstream.jpg", alt: "Hilltop campsite at Tanay Windmills Viewpoint", category: "Campgrounds" },
  { src: "/images/campfire.jpg", alt: "Bonfire night at camp", category: "Camp Life" },
  { src: "/images/family-reunion.jpg", alt: "Group camping gathering", category: "Groups" },
  { src: "/images/dining.jpg", alt: "Camp dining and coffee", category: "Cafe" },
  { src: "/images/asheville.jpg", alt: "Highland landscape", category: "Views" },
  { src: "/images/sonoma.jpg", alt: "Coffee country camp atmosphere", category: "Amadeo" },
  { src: "/images/yosemite.jpg", alt: "Mountain and nature views", category: "Nearby Nature" },
  { src: "/images/catskills.jpg", alt: "Tree-lined outdoor setting", category: "Orchard" },
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
