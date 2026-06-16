'use client'

import { Reveal } from '@/components/reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    year: '2024',
    title: 'First Day',
    desc: 'New faces, new beginnings — the chapter opens.',
  },
  {
    year: '2024',
    title: 'Orientation',
    desc: 'Finding our footing and our people.',
  },
  {
    year: '2025',
    title: 'Class Meeting',
    desc: 'Ideas, plans, and the bonds that held us together.',
  },
  {
    year: '2025',
    title: 'Study Tour',
    desc: 'The journey beyond the classroom walls.',
  },
  {
    year: '2026',
    title: 'Graduation Preparation',
    desc: 'Late nights, big dreams, final pushes.',
  },
  {
    year: '2027',
    title: 'Farewell',
    desc: 'One last goodbye before everything changes.',
  },
]

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="timeline"
      className="mx-auto max-w-5xl px-6 py-28 md:py-40"
    >
      <div className="mb-16 max-w-2xl md:mb-24">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The Journey
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            A Timeline of Our Years
          </h2>
        </Reveal>
      </div>

      <div ref={ref} className="relative">
        {/* track */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        {/* progress fill */}
        <motion.div
          style={{ height }}
          className="absolute left-[7px] top-2 w-px bg-foreground md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12 md:space-y-20">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`relative pl-10 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              {/* node */}
              <span className="absolute left-0 top-1.5 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                <span className="h-2 w-2 rounded-full bg-foreground ring-4 ring-background" />
              </span>

              <Reveal
                direction={i % 2 === 0 ? 'right' : 'left'}
                className={`md:[direction:ltr] ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                }`}
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {event.year}
                </span>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {event.desc}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
