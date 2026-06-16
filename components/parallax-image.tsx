'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

/**
 * Cinematic image reveal: a clip-path curtain wipes up on enter while the
 * image drifts with a subtle parallax as the section scrolls past.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 14,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  amount?: number
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`],
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={
          inView ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined
        }
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0"
      >
        <motion.div style={{ y }} className="absolute inset-[-15%]">
          <Image
            src={src || '/placeholder.svg'}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover ${imgClassName ?? ''}`}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
