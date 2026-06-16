'use client'

import { Reveal } from '@/components/reveal'

export function Future() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(245,245,245,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-48">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            What Comes Next
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-6xl md:text-7xl">
            The End Of One Chapter. The Beginning Of Another.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The doors we close today open onto roads we have yet to imagine.
            Wherever we go, we carry these years with us — the laughter, the
            lessons, and the people who made it matter. This is not goodbye. It
            is simply the start of everything next.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="#home"
            className="mt-12 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            Back To The Beginning
          </a>
        </Reveal>
      </div>
    </section>
  )
}
