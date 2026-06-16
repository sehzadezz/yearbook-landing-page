'use client'

import { Magnetic } from '@/components/magnetic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const lines = ['Jaysyul muzaffar']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(6px)'])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale, filter: blur }} className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Graduates throwing their caps into a golden sunset sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border glass px-5 py-2 text-[11px] uppercase tracking-eyebrow text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Graduation Yearbook 2027
        </motion.div>

        <h1 className="font-serif text-5xl text-display text-balance sm:text-7xl md:text-[8.5rem]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.5%]">
              <motion.span
                className="block"
                initial={{ y: '115%', rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.13,
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
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A digital archive of friendship, growth, and unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Magnetic className="w-full sm:w-auto">
            <a
              href="#gallery"
              className="block w-full rounded-full bg-accent px-8 py-3.5 text-center text-sm font-medium text-accent-foreground transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_rgba(255,255,255,0.5)] sm:w-auto"
            >
              Explore Memories
            </a>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <a
              href="#videos"
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-border glass px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 sm:w-auto"
            >
              <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              Watch Highlights
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
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
