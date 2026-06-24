'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

// ==========================================
// 1. GANTI ANGKA DAN TEKSNYA DI SINI
// ==========================================
const statsData = [
  { id: 1, label: 'Students', value: 58, suffix: '+' },
  { id: 2, label: 'Memories Captured', value: 500, suffix: '+' },
  { id: 3, label: 'Photos', value: 3000, suffix: '+' },
  { id: 4, label: 'Videos', value: 150, suffix: '+' },
]

// Komponen Mesin Penghitung Pintar
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  
  // { once: false } ini rahasianya agar animasi berhitung ngulang terus tiap layarnya di-scroll ke sini
  const isInView = useInView(ref, { once: false, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      // Mulai berhitung dari 0 ke angka tujuan saat masuk layar
      const controls = animate(0, value, {
        duration: 2, // Kecepatan berhitung (2 detik)
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.floor(v))
        }
      })
      return () => controls.stop()
    } else {
      // Reset kembali ke 0 saat keluar dari layar
      setCount(0) 
    }
  }, [isInView, value])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="relative py-20 bg-black text-white z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              // ==========================================
              // 2. EFEK HOVER PUTIH ADA DI BARIS BAWAH INI
              // (hover:bg-white hover:text-black)
              // ==========================================
              className="group flex flex-col items-start p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-white/20"
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-2 text-white group-hover:text-black transition-colors duration-300">
                <Counter value={stat.value} />
                {stat.suffix}
              </h3>
              <p className="text-sm md:text-base text-white/60 group-hover:text-black/80 transition-colors duration-300 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}