'use client'

import { Reveal, RevealText } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About the Generation
            </p>
          </Reveal>
          <RevealText
            as="h2"
            text="The Story of Our Generation"
            className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl"
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
          <Reveal delay={0.1}>
            <p>
              We arrived as strangers, carrying nothing but nervous excitement
              and the quiet hope of belonging. Over the years that followed, the
              hallways became home, the classrooms became theatres of discovery,
              and the people beside us became something far greater than
              classmates.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Together we stumbled, grew, celebrated, and dreamed. We learned
              that the lessons that mattered most were rarely found in textbooks
              — they were written in late-night conversations, shared victories,
              and the friendships that refused to fade.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-foreground">
              This is the story of the Class of 2027 — a generation defined not
              by where we started, but by everything we became along the way.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
