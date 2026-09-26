'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { BookingWidget } from '@/components/booking-widget'

interface HeroImage {
  src: string
  alt: string
}

interface LocationHeroCarouselProps {
  images: HeroImage[]
  locationName: string
  shortName: string
  tagline: string
}

export function LocationHeroCarousel({
  images,
  locationName,
  shortName,
  tagline,
}: LocationHeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isPointerOver, setIsPointerOver] = useState(false)
  const [isFocusWithin, setIsFocusWithin] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (carouselApi) setSelectedIndex(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(query.matches)
    updatePreference()
    query.addEventListener('change', updatePreference)
    return () => query.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    if (!api || isPaused || isPointerOver || isFocusWithin || reduceMotion) return
    const timer = window.setInterval(() => api.scrollNext(), 6500)
    return () => window.clearInterval(timer)
  }, [api, isFocusWithin, isPaused, isPointerOver, reduceMotion])

  const pauseForInteraction = () => setIsPaused(true)

  return (
    <section
      className="relative h-[880px] overflow-hidden lg:h-[76vh] lg:min-h-[680px]"
      aria-label={`${locationName} preview`}
      onMouseEnter={() => setIsPointerOver(true)}
      onMouseLeave={() => setIsPointerOver(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false)
      }}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} className="h-full">
        <CarouselContent className="h-[880px] ml-0 lg:h-[76vh] lg:min-h-[680px]">
          {images.map((image, index) => (
            <CarouselItem key={image.src} className="relative h-full pl-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
      <div className="absolute inset-x-0 top-28 px-4 sm:top-32">
        <div className="mx-auto max-w-7xl text-primary-foreground">
          <p className="text-xs uppercase tracking-wider text-primary-foreground/75">{shortName}</p>
          <h1 className="mt-3 max-w-4xl text-balance font-serif text-4xl leading-tight md:text-6xl">{locationName}</h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">{tagline}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[360px] px-4 lg:bottom-36">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-label={`Slide ${selectedIndex + 1} of ${images.length}`}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => {
                  pauseForInteraction()
                  api?.scrollTo(index)
                }}
                className={`h-1.5 transition-all ${selectedIndex === index ? 'w-8 bg-primary-foreground' : 'w-4 bg-primary-foreground/45 hover:bg-primary-foreground/75'}`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={selectedIndex === index ? 'true' : undefined}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                pauseForInteraction()
                api?.scrollPrev()
              }}
              className="flex size-11 items-center justify-center border border-primary-foreground/40 bg-foreground/30 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-foreground/55"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                className="flex size-11 items-center justify-center border border-primary-foreground/40 bg-foreground/30 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-foreground/55"
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              >
                {isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                pauseForInteraction()
                api?.scrollNext()
              }}
              className="flex size-11 items-center justify-center border border-primary-foreground/40 bg-foreground/30 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-foreground/55"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-10 px-4">
        <div className="mx-auto max-w-6xl">
          <BookingWidget
            variant="hero"
            initialLocationId="amadeo"
            className="overflow-hidden rounded-sm shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
