import Image from 'next/image'
import { MapPin } from 'lucide-react'
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
          {attraction.image ? (
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src={attraction.image}
                alt={attraction.imageAlt || attraction.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center bg-secondary/45 px-6 text-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Verified nearby stop</span>
            </div>
          )}
          <div className="p-4">
            <h3 className="font-medium text-foreground">{attraction.name}</h3>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>{attraction.distance}</span>
              <span className="whitespace-nowrap">{attraction.time}</span>
            </div>
            {attraction.mapUrl && (
              <a href={attraction.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Get directions <MapPin className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
