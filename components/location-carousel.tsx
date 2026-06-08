'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { locations } from '@/lib/data'
import { cn } from '@/lib/utils'

interface LocationCarouselProps {
  className?: string
}

export function LocationCarousel({ className }: LocationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const activeLocations = locations.filter(loc => !loc.comingSoon)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.clientWidth || 0
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % activeLocations.length
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + activeLocations.length) % activeLocations.length
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.children[0]?.clientWidth || 1
        const newIndex = Math.round(carouselRef.current.scrollLeft / itemWidth)
        setCurrentIndex(newIndex)
      }
    }

    const ref = carouselRef.current
    ref?.addEventListener('scroll', handleScroll)
    return () => ref?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn('relative', className)}>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {activeLocations.map((location, index) => (
          <Link
            key={location.id}
            href={`/locations/${location.id}`}
            className={cn(
              'flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group',
              'transition-all duration-500'
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl text-primary-foreground font-semibold mb-1">
                  Windmills
                  <br />
                  {location.name}
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors">
              {location.description}
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-primary hover:underline">
              Learn More
            </p>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 border border-border hover:bg-muted transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-border hover:bg-muted transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{activeLocations.length}</span>
        </div>
      </div>
    </div>
  )
}
