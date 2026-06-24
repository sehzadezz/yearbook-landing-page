'use client'

import { Magnetic } from '@/components/magnetic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Playfair_Display } from 'next/font/google'
const myFont = Playfair_Display({ subsets: ['latin'] })
const lines = ['Jaysyul Muzaffar']

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
    "/images/hero.png",
    "/images/ikhwanallcomp.png", // Foto ke-2 ditambahkan di sini
    "/images/Akhwat.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      // Logika di bawah ini otomatis menyesuaikan berapapun jumlah gambarmu
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])
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
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
          
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* KODE LOGO MULAI DARI SINI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <motion.img
            src="https://raw.githubusercontent.com/sehzadezz/yearbook-landing-page/main/public/images/ALMUZAFFAR%20LOGO.png"
            alt="Logo Almuzaffar"
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        {/* BATAS KODE LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border glass px-5 py-2 text-[11px] uppercase tracking-eyebrow text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          The Journey & Beyond
        </motion.div>

        <h1 className={`${myFont.className} text-5xl text-display text-balance sm:text-7xl md:text-[8.5rem] leading-relaxed`}>
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pt-4 pb-10 px-4">
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
        {/* KODE TAGLINE MULAI DARI SINI */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="-mt-2 mb-4 text-base md:text-lg font-bold tracking-[0.25em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          - Fight With Faith Win With Glory -
        </motion.p>
        {/* BATAS KODE TAGLINE */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A digital archive of friendship, growth, and unforgettable memories.
        </motion.p>

        {/* KODE TOMBOL BARU DENGAN INTERAKTIVITAS & GLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Tombol Utama: Explore Memories with Pop and Glow */}
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Explore Memories
            <motion.span
              className="transition-transform group-hover:translate-x-1"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Tombol Kedua: Watch Highlights */}
          <motion.a
            href="#videos"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:border-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            <motion.span
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
              ▶
            </motion.span>
            Watch Highlights
          </motion.a>
        </motion.div>
        {/* BATAS KODE TOMBOL BARU */}
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
