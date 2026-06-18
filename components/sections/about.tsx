'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative pt-24 pb-40 md:pt-32 md:pb-56 bg-black text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">The Identity</h2>
          <p className="text-white/60 uppercase tracking-[0.2em] text-sm font-semibold">
            Membedah Makna & Filosofi
          </p>
        </motion.div>

        {/* Philosophy Grid - Glassmorphism & Watermark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Makna Nama */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-left"
          >
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 text-[160px] font-serif font-bold italic leading-none text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] select-none pointer-events-none">
              I
            </span>
            
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-3 uppercase">The Why</p>
              <h3 className="font-serif text-2xl mb-4 text-white">Makna Nama</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Jaysyul Muzaffar bukanlah sekadar sebutan, melainkan sebuah doa dan visi agung. [Tuliskan alasan fundamental mengapa nama ini dipilih dan apa harapan besar yang disematkan di baliknya].
              </p>
            </div>
          </motion.div>

          {/* Card 2: Filosofi Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-left"
          >
            {/* Watermark Number */}
            <span className="absolute -right-4 -top-8 text-[160px] font-serif font-bold italic leading-none text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] select-none pointer-events-none">
              II
            </span>
            
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-3 uppercase">The What</p>
              <h3 className="font-serif text-2xl mb-4 text-white">Filosofi Logo</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Setiap sudut dan garis pada lambang ini adalah representasi visual dari visi kami. [Jelaskan elemen visual logomu di sini. Misalnya makna bentuk segitiga, arah garis, dan komposisi warnanya].
              </p>
            </div>
          </motion.div>

          {/* Card 3: Semangat Aksi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-left"
          >
            {/* Watermark Number */}
            <span className="absolute -right-2 -top-8 text-[160px] font-serif font-bold italic leading-none text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] select-none pointer-events-none">
              III
            </span>
            
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-3 uppercase">The How</p>
              <h3 className="font-serif text-2xl mb-4 text-white">Semangat Aksi</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                "Fight With Faith Win With Glory". [Gambarkan bagaimana angkatan ini menerjemahkan visinya ke dalam aksi nyata, solidaritas kebersamaan, dan pergerakan menuju masa depan].
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}