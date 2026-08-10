import Image from 'next/image'

interface VideoHeroProps {
  src: string
  poster: string
  alt: string
}

export function VideoHero({ src, poster, alt }: VideoHeroProps) {
  return (
    <>
      <Image src={poster} alt={alt} fill priority className="object-cover" sizes="100vw" />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  )
}
