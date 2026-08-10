'use client'

import { ExternalLink, Facebook } from 'lucide-react'
import { facebookTestimonials } from '@/lib/data'

export function FacebookTestimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {facebookTestimonials.map((testimonial) => (
        <article key={testimonial.id} className="border border-border bg-background p-5">
          <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
            <iframe
              title={testimonial.label}
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(testimonial.url)}&show_text=true&width=500`}
              className="h-full w-full border-0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <a
            href={testimonial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Facebook className="h-4 w-4" />
            {testimonial.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </article>
      ))}
    </div>
  )
}
