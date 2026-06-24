'use client'

import { Reveal } from '@/components/reveal'
import { Play } from 'lucide-react'
import Image from 'next/image'

const featured = {
  src: '/images/video-1.png',
  title: 'Graduation Ceremony 2027',
  meta: 'Full Film · 24 min',
}

const clips = [
  { src: '/ images/video-2.png', title: 'Prom Night', meta: '8 min' },
  { src: '/ images/video-3.png', title: 'Sports Day', meta: '6 min' },
  { src: '/ images/video-4.png', title: 'Rooftop Sunsets', meta: '4 min' },
]

function PlayBadge({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full border border-foreground/40 bg-background/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-foreground group-hover:bg-accent ${
        large ? 'h-20 w-20' : 'h-12 w-12'
      }`}
    >
      <Play
        className={`text-foreground transition-colors group-hover:text-accent-foreground ${
          large ? 'h-7 w-7' : 'h-4 w-4'
        }`}
        fill="currentColor"
      />
    </span>
  )
}

export function Videos() {
  return (
    <section id="videos" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="mb-16 max-w-2xl md:mb-20">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Video Memories
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            Relive The Moments
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <button
          type="button"
          className="group relative mb-5 block aspect-video w-full overflow-hidden rounded-3xl border border-border text-left"
        >
          <Image
            src={featured.src || "/placeholder.svg"}
            alt={featured.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayBadge large />
          </div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h3 className="font-serif text-2xl tracking-tight text-foreground md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{featured.meta}</p>
          </div>
        </button>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {clips.map((clip, i) => (
          <Reveal key={clip.title} delay={i * 0.1}>
            <button
              type="button"
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border text-left"
            >
              <Image
                src={clip.src || "/placeholder.svg"}
                alt={clip.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayBadge />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="font-medium text-foreground">{clip.title}</h4>
                <p className="text-xs text-muted-foreground">{clip.meta}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
