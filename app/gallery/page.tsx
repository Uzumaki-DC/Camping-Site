"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const tanayCamperImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/tanay-campers/camper-${i + 1}.jpg`,
  alt: `Camper photo from Windmills Viewpoint Campgrounds in Tanay (${i + 1})`,
  category: "Tanay Windmills",
}))

const amadeoCamperImages = Array.from({ length: 3 }, (_, i) => ({
  src: `/images/amadeo-campers/camper-${i + 1}.png`,
  alt: `Camper photo from the Amadeo camping site in Cavite (${i + 1})`,
  category: "Amadeo",
}))

const galleryImages = [
  ...tanayCamperImages,
  ...amadeoCamperImages,
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
