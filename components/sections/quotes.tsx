'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const quotes = [
  'We came as strangers and left as family.',
  'The best memories are the ones we never planned.',
  'Some friendships are not seasons — they are forever.',
  'We did not realize we were making memories. We just knew we were having fun.',
]

export function Quotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-6 py-28 text-center md:py-40">
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none font-serif text-[12rem] leading-none text-muted-foreground/10 md:text-[18rem]">
        &ldquo;
      </span>

      <div className="relative z-10 min-h-[7em] w-full sm:min-h-[5em] md:min-h-[4em]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl leading-tight tracking-tight text-balance text-foreground sm:text-4xl md:text-6xl"
          >
            {quotes[index]}
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show quote ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-foreground' : 'w-1.5 bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
