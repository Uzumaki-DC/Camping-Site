'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { locations } from '@/lib/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

interface USMapProps {
  onLocationHover?: (locationId: string | null) => void
  selectedLocation?: string | null
  className?: string
}

export function USMap({ onLocationHover, selectedLocation, className }: USMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  
  const activeLocations = locations.filter(loc => !loc.comingSoon)
  const comingSoonLocations = locations.filter(loc => loc.comingSoon)

  const handleMouseEnter = (locationId: string) => {
    setHoveredLocation(locationId)
    onLocationHover?.(locationId)
  }

  const handleMouseLeave = () => {
    setHoveredLocation(null)
    onLocationHover?.(null)
  }

  return (
    <div className={cn('relative w-full', className)}>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000,
        }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: 'hsl(var(--primary) / 0.8)' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
        
        {/* Active location markers */}
        {activeLocations.map((location) => (
          <Marker
            key={location.id}
            coordinates={[location.coordinates.lng, location.coordinates.lat]}
            onMouseEnter={() => handleMouseEnter(location.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={`/locations/${location.id}`}>
              <g className="cursor-pointer">
                <circle
                  r={8}
                  fill="hsl(var(--accent))"
                  stroke="hsl(var(--foreground))"
                  strokeWidth={2}
                  className={cn(
                    'transition-all duration-300',
                    (hoveredLocation === location.id || selectedLocation === location.id) && 'r-12'
                  )}
                  style={{
                    r: (hoveredLocation === location.id || selectedLocation === location.id) ? 12 : 8
                  }}
                />
                {(hoveredLocation === location.id || selectedLocation === location.id) && (
                  <text
                    textAnchor="middle"
                    y={-20}
                    className="text-xs font-medium uppercase tracking-wider"
                    fill="hsl(var(--foreground))"
                    style={{ fontSize: '10px' }}
                  >
                    {location.shortName}
                  </text>
                )}
              </g>
            </Link>
          </Marker>
        ))}
        
        {/* Coming soon markers */}
        {comingSoonLocations.map((location) => (
          <Marker
            key={location.id}
            coordinates={[location.coordinates.lng, location.coordinates.lat]}
            onMouseEnter={() => handleMouseEnter(location.id)}
            onMouseLeave={handleMouseLeave}
          >
            <g className="cursor-default">
              <circle
                r={6}
                fill="hsl(var(--muted-foreground))"
                stroke="hsl(var(--foreground))"
                strokeWidth={1}
                opacity={0.5}
              />
              {hoveredLocation === location.id && (
                <text
                  textAnchor="middle"
                  y={-15}
                  className="text-xs"
                  fill="hsl(var(--muted-foreground))"
                  style={{ fontSize: '9px' }}
                >
                  {location.shortName} - Coming Soon
                </text>
              )}
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent border border-foreground" />
          <span>Open</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/50 border border-foreground" />
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  )
}
