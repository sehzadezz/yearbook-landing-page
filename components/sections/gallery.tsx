'use client'

import { ParallaxImage } from '@/components/parallax-image'
import { Reveal } from '@/components/reveal'

const photos = [
  { src: '/images/gallery-1.png', caption: 'Hallway Laughter', span: 'md:row-span-2' },
  { src: '/images/gallery-2.png', caption: 'Afternoon Light', span: '' },
  { src: '/images/gallery-3.png', caption: 'The Ceremony', span: '' },
  { src: '/images/gallery-4.png', caption: 'Cap & Tassel', span: 'md:row-span-2' },
  { src: '/images/gallery-5.png', caption: 'On The Road', span: '' },
  { src: '/images/gallery-6.png', caption: 'Lights & Nights', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Memory Gallery
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Captured Moments
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-base text-muted-foreground md:text-right">
            The memories that shaped us.
          </p>
        </Reveal>
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className={`group relative h-full w-full overflow-hidden rounded-2xl border border-border ${photo.span}`}
          >
            <ParallaxImage
              src={photo.src}
              alt={photo.caption}
              className="h-full w-full"
              imgClassName="grayscale-[0.35] transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
            <figcaption className="pointer-events-none absolute bottom-0 left-0 p-5">
              <span className="block text-[10px] uppercase tracking-eyebrow text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                Memory
              </span>
              <span className="block translate-y-2 font-serif text-xl text-foreground opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
