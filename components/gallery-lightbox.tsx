'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import type { GalleryImage } from '@/lib/data'

interface GalleryLightboxProps {
  images: GalleryImage[]
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : images[activeIndex]

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length)
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, showNext, showPrevious])

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure key={image.id} className="group">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-secondary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              aria-label={`Open ${image.title} in full screen`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 flex size-10 items-center justify-center bg-foreground/70 text-primary-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                <Expand className="size-4" />
              </span>
            </button>
            <figcaption className="mt-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {image.location === 'tanay' ? 'Tanay Windmills' : 'Pangil Farm, Amadeo'}
              </p>
              <p className="font-medium">{image.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent
          className="h-dvh max-h-dvh w-screen max-w-none grid-rows-[1fr] translate-x-[-50%] translate-y-[-50%] gap-0 rounded-none border-0 bg-black p-0 text-white sm:max-w-none"
          showCloseButton={false}
        >
          {activeImage && (
            <>
              <DialogTitle className="sr-only">{activeImage.title}</DialogTitle>
              <DialogDescription className="sr-only">{activeImage.alt}</DialogDescription>
              <div className="relative min-h-0 flex-1">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-3 sm:p-8"
                  priority
                />
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center bg-black/65 text-white transition-colors hover:bg-black sm:right-6 sm:top-6"
                aria-label="Close full-screen image"
              >
                <X className="size-5" />
              </button>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center bg-black/65 text-white transition-colors hover:bg-black sm:left-6"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center bg-black/65 text-white transition-colors hover:bg-black sm:right-6"
                aria-label="Next gallery image"
              >
                <ChevronRight className="size-6" />
              </button>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-5 pt-14 sm:px-8 sm:pb-7">
                <div className="mx-auto flex max-w-5xl items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      {activeImage.location === 'tanay' ? 'Tanay Windmills' : 'Pangil Farm, Amadeo'}
                    </p>
                    <p className="mt-1 font-serif text-xl sm:text-2xl">{activeImage.title}</p>
                  </div>
                  <p className="shrink-0 text-sm text-white/65">{(activeIndex ?? 0) + 1} / {images.length}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
