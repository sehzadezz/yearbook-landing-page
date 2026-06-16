'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 44 },
  down: { x: 0, y: -44 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
  once?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })
  const { x, y } = offset[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y, filter: 'blur(8px)' }}
      animate={
        inView ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : {}
      }
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Splits text into words and staggers them in from behind a mask. */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'span' | 'h1' | 'h2' | 'p'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const words = text.split(' ')

  const MotionTag = motion[Tag]

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '115%', rotate: 4 },
              visible: { y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** Reveals each line from behind a mask. Pass an array of lines. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = 'h2',
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'p'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const MotionTag = motion[Tag]

  return (
    <MotionTag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ''}`}
            initial={{ y: '115%' }}
            animate={inView ? { y: 0 } : undefined}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
