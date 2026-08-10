import Image from 'next/image'
import { testimonialImages } from '@/lib/data'

export function TestimonialGallery() {
  const [featured, ...testimonials] = testimonialImages

  return (
    <div className="grid items-start gap-5 lg:grid-cols-2">
      <article className="overflow-hidden border border-border bg-[#242526]">
        <Image
          src={featured.src}
          alt={featured.alt}
          width={featured.width}
          height={featured.height}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </article>

      <div className="grid gap-5">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="overflow-hidden border border-border bg-[#242526]"
          >
            <Image
              src={testimonial.src}
              alt={testimonial.alt}
              width={testimonial.width}
              height={testimonial.height}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </article>
        ))}
      </div>
    </div>
  )
}
