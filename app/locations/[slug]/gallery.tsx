'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Location } from '@/lib/data'
import { cn } from '@/lib/utils'

interface LocationGalleryProps {
  location: Location
}

export function LocationGallery({ location }: LocationGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  // Create gallery images from location data
  const galleryImages =
    location.id === 'tanay'
      ? Array.from({ length: 12 }, (_, i) => ({
          src: `/images/tanay-campers/camper-${i + 1}.jpg`,
          alt: `Camper photo from Windmills Viewpoint Campgrounds in Tanay (${i + 1})`,
        }))
      : location.id === 'amadeo'
        ? Array.from({ length: 3 }, (_, i) => ({
            src: `/images/amadeo-campers/camper-${i + 1}.png`,
            alt: `Camper photo from the Amadeo camping site in Cavite (${i + 1})`,
          }))
        : [
            { src: location.image, alt: `${location.name} landscape` },
            { src: '/images/airstream-interior.jpg', alt: 'Camp setup detail' },
            { src: '/images/campfire.jpg', alt: 'Evening campfire' },
            { src: '/images/dining.jpg', alt: 'Outdoor dining' },
          ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Windmills {location.name}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif">Photo Gallery</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={prevImage}
                className="p-2 border border-border hover:bg-muted transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {galleryImages.length}
              </span>
              <button
                onClick={nextImage}
                className="p-2 border border-border hover:bg-muted transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Gallery */}
          <div className="grid grid-cols-4 gap-4">
            {/* Large featured image */}
            <div 
              className="col-span-4 md:col-span-2 row-span-2 relative aspect-[4/3] cursor-pointer group overflow-hidden"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </div>
            
            {/* Thumbnail grid */}
            {galleryImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={cn(
                  'relative aspect-[4/3] cursor-pointer group overflow-hidden',
                  index === 0 && 'hidden md:block'
                )}
                onClick={() => {
                  setCurrentIndex(index)
                  setLightboxOpen(true)
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    'object-cover transition-all duration-300 group-hover:scale-105',
                    currentIndex === index && 'ring-2 ring-primary'
                  )}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary-foreground/80"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-primary-foreground hover:text-primary-foreground/80"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-[16/10] mx-4">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-primary-foreground hover:text-primary-foreground/80"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          
          <div className="absolute bottom-4 text-primary-foreground text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
