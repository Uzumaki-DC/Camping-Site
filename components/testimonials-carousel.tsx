'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { cn } from '@/lib/utils'

interface TestimonialsCarouselProps {
  className?: string
}

export function TestimonialsCarousel({ className }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4 md:px-8"
            >
              <blockquote className="text-center max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-sm uppercase tracking-wider text-muted-foreground">
                  &mdash; {testimonial.author}, {testimonial.location}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="p-2 border border-border hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{testimonials.length}</span>
        </div>
        <button
          onClick={nextSlide}
          className="p-2 border border-border hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

// Featured Cards Carousel
interface FeaturedCard {
  title: string
  description: string
  image: string
  link: string
  linkText: string
}

interface FeaturedCarouselProps {
  cards: FeaturedCard[]
  className?: string
}

export function FeaturedCarousel({ cards, className }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 md:px-8 lg:px-12">
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">{card.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href={card.link}
                      className="border border-foreground px-6 py-2 text-sm uppercase tracking-wider hover:bg-foreground hover:text-primary-foreground transition-colors"
                    >
                      {card.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-end mt-6 gap-4 px-4">
        <button
          onClick={prevSlide}
          className="p-2 border border-border hover:bg-muted transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{cards.length}</span>
        </div>
        <button
          onClick={nextSlide}
          className="p-2 border border-border hover:bg-muted transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
