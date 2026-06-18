'use client'

import { Reveal } from '@/components/reveal'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { label: 'Students', value: 120, suffix: '+' },
  { label: 'Memories Captured', value: 500, suffix: '+' },
  { label: 'Photos', value: 3000, suffix: '+' },
  { label: 'Videos', value: 150, suffix: '+' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  )

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [inView, count, value])

  return (
    <span className="tabular-nums">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-40 pb-28 md:pt-56 md:pb-40">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="group h-full rounded-3xl border border-border glass p-6 transition-colors hover:border-foreground/20 md:p-8">
              <div className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
