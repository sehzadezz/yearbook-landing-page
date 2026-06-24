'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

// ==========================================
// DATA SUDAH DIPISAH DAN TANDA PLUS DIHAPUS
// ==========================================
const statsData = [
  { id: 1, label: 'Mahasantri', value: 32, suffix: '' },       // Tanda plus dikosongkan
  { id: 2, label: 'Mahasantriwati', value: 26, suffix: '' },   // Tanda plus dikosongkan
  { id: 3, label: 'Memories', value: 500, suffix: '+' },
  { id: 4, label: 'Photos', value: 3000, suffix: '+' },
  { id: 5, label: 'Videos', value: 150, suffix: '+' },
]

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5, // Waktu hitung disesuaikan sedikit agar lebih dramatis
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.floor(v))
        }
      })
      return () => controls.stop()
    } else {
      setCount(0)
    }
  }, [isInView, value])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    // ==========================================
    // EFEK TARIK KE ATAS ADA DI BARIS INI (-mt-10 md:-mt-24)
    // ==========================================
    <section className="relative pt-0 pb-20 bg-black text-white z-20 -mt-10 md:-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mengubah pembagian kolom menjadi 5 (md:grid-cols-5) agar pas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="group flex flex-col items-start p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-white/20"
            >
              {/* Ukuran teks sedikit disesuaikan agar 5 kotak muat berjejer rapi */}
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-black transition-colors duration-300">
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