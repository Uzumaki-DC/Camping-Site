import Image from 'next/image'
import type { NearbyAttraction } from '@/lib/data'

interface NearbyAttractionsGridProps {
  attractions: NearbyAttraction[]
  limit?: number
}

export function NearbyAttractionsGrid({ attractions, limit }: NearbyAttractionsGridProps) {
  const visibleAttractions = typeof limit === 'number' ? attractions.slice(0, limit) : attractions

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {visibleAttractions.map((attraction) => (
        <article key={attraction.name} className="bg-background border border-border">
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
            <Image
              src={attraction.image}
              alt={attraction.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-foreground">{attraction.name}</h3>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>{attraction.distance}</span>
              <span className="whitespace-nowrap">{attraction.time}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
