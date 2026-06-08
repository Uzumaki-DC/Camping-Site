'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { Location } from '@/lib/data'
import { cn } from '@/lib/utils'

interface AccommodationsSectionProps {
  location: Location
}

export function AccommodationsSection({ location }: AccommodationsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const accommodations = location.accommodationTypes

  const nextAccommodation = () => {
    setCurrentIndex((prev) => (prev + 1) % accommodations.length)
  }

  const prevAccommodation = () => {
    setCurrentIndex((prev) => (prev - 1 + accommodations.length) % accommodations.length)
  }

  const currentAccommodation = accommodations[currentIndex]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={currentAccommodation.image}
                alt={currentAccommodation.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Navigation */}
            {accommodations.length > 1 && (
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button
                    onClick={prevAccommodation}
                    className="p-2 border border-border hover:bg-muted transition-colors"
                    aria-label="Previous accommodation"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextAccommodation}
                    className="p-2 border border-border hover:bg-muted transition-colors"
                    aria-label="Next accommodation"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {accommodations.length}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{currentAccommodation.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {currentAccommodation.description}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {currentAccommodation.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-3xl font-serif">${currentAccommodation.price}<span className="text-lg">/night</span></p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="border border-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                See Accommodation Types
              </Link>
            </div>
          </div>
        </div>

        {/* Accommodation Tabs */}
        {accommodations.length > 1 && (
          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
            {accommodations.map((accommodation, index) => (
              <button
                key={accommodation.id}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'px-6 py-3 text-sm transition-colors',
                  currentIndex === index
                    ? 'bg-foreground text-primary-foreground'
                    : 'border border-border hover:bg-muted'
                )}
              >
                {accommodation.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
