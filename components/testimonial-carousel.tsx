'use client'

import * as React from 'react'
import { Quote, Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { testimonials } from '@/lib/data'
import { cn } from '@/lib/utils'

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const updateSelection = () => setSelectedIndex(api.selectedScrollSnap())
    updateSelection()
    api.on('select', updateSelection)
    api.on('reInit', updateSelection)

    return () => {
      api.off('select', updateSelection)
      api.off('reInit', updateSelection)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: 'start', loop: false }}
      aria-label="Camper testimonials"
      className="mx-auto max-w-4xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={testimonial.id} aria-label={`${index + 1} of ${testimonials.length}`}>
            <article className="flex min-h-[480px] flex-col justify-between border border-border bg-background px-7 py-8 sm:min-h-[420px] sm:px-12 sm:py-10 lg:min-h-[390px] lg:px-16">
              <div>
                <Quote className="mb-7 h-9 w-9 text-primary/70" aria-hidden="true" />
                {testimonial.rating && (
                  <div className="mb-5 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>
                )}
                <blockquote className="text-xl leading-relaxed text-foreground sm:text-3xl sm:leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <footer className="mt-9 border-t border-border pt-5">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                {testimonial.date && (
                  <p className="mt-1 text-sm text-muted-foreground">{testimonial.date}</p>
                )}
              </footer>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-7 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Show testimonial ${index + 1} from ${testimonial.author}`}
              aria-current={selectedIndex === index ? 'true' : undefined}
              className={cn(
                'h-2.5 w-2.5 border border-primary transition-colors',
                selectedIndex === index ? 'bg-primary' : 'bg-transparent hover:bg-primary/25',
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CarouselPrevious className="static size-10 translate-y-0 rounded-sm" />
          <CarouselNext className="static size-10 translate-y-0 rounded-sm" />
        </div>
      </div>
    </Carousel>
  )
}
