'use client'

import { Reveal } from '@/components/reveal'
import Image from 'next/image'

const students = [
  {
    name: 'Abdullah Ahmad Syahid',
    cls: 'Class 12-A',
    quote: 'The future belongs to those who believe.',
    img: '/images/student-1.png',
  },
  {
    name: ' Abid Kaab AlPudli',
    cls: 'Class 12-B',
    quote: 'We made ordinary days unforgettable.',
    img: '/images/student-2.png',
  },
  {
    name: 'Ahmad Nizar',
    cls: 'Class 12-A',
    quote: 'Every ending is a quiet new beginning.',
    img: '/images/student-3.png',
  },
  {
    name: 'Ahmad Syauqi Ar Raihan',
    cls: 'Class 12-C',
    quote: 'Chase the dream, keep the friends.',
    img: '/images/student-4.png',
  },
  {
    name: 'Ali Mahmud',
    cls: 'Class 12-B',
    quote: 'Here is to the nights we will never forget.',
    img: '/images/student-5.png',
  },
  {
    name: 'Dzakwan Daffa Husein',
    cls: 'Class 12-C',
    quote: 'Greatness is built one memory at a time.',
    img: '/images/student-6.png',
  },
]

export function Students() {
  return (
    <section id="students" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="mb-16 max-w-2xl md:mb-20">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Student Wall
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            The Faces Behind The Memories
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student, i) => (
          <Reveal key={student.name} delay={(i % 3) * 0.1}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={student.img || "/placeholder.svg"}
                    alt={`Portrait of ${student.name}`}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {student.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{student.cls}</p>
                </div>
              </div>
              <p className="mt-6 font-serif text-xl italic leading-snug text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                &ldquo;{student.quote}&rdquo;
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
