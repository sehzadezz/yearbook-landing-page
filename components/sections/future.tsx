'use client'

import { Magnetic } from '@/components/magnetic'
import { Reveal, RevealLines } from '@/components/reveal'

export function Future() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-48">
        <Reveal>
          <p className="mb-8 text-[11px] uppercase tracking-eyebrow text-muted-foreground">
            What Comes Next
          </p>
        </Reveal>
        <RevealLines
          as="h2"
          lines={['The End Of One Chapter.', 'The Beginning Of Another.']}
          className="font-serif text-4xl text-display text-balance sm:text-6xl md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            The doors we close today open onto roads we have yet to imagine.
            Wherever we go, we carry these years with us — the laughter, the
            lessons, and the people who made it matter. This is not goodbye. It
            is simply the start of everything next.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Magnetic className="mt-12 inline-block">
            <a
              href="#home"
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_rgba(255,255,255,0.5)]"
            >
              Back To The Beginning
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
