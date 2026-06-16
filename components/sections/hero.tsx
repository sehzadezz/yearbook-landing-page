'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const lines = ['Every Moment.', 'Every Story.', 'Every Memory.']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Graduates throwing their caps into a golden sunset sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-block rounded-full border border-border glass px-5 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Graduation Yearbook 2027
        </motion.p>

        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-7xl md:text-8xl">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A digital archive of friendship, growth, and unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#gallery"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-105 sm:w-auto"
          >
            Explore Memories
          </a>
          <a
            href="#videos"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-border glass px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
            Watch Highlights
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
