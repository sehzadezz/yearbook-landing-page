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

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Poin 1: Makna Nama */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
              <span className="font-serif text-2xl italic">I</span>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Makna Nama</h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Jaysyul Muzaffar bukanlah sekadar sebutan, melainkan sebuah doa dan visi. [Tuliskan penjelasan detail mengenai arti kata Jaysyul Muzaffar di sini, mengapa nama ini yang dipilih menjadi identitas angkatan].
            </p>
          </motion.div>

          {/* Poin 2: Filosofi Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
              <span className="font-serif text-2xl italic">II</span>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Filosofi Logo</h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Setiap sudut dan garis pada lambang ini memiliki makna. [Jelaskan elemen visual logomu di sini. Misalnya: Bentuk segitiga merepresentasikan puncak tujuan, lengkungan merepresentasikan dinamika, dsb].
            </p>
          </motion.div>

          {/* Poin 3: Semangat Perjuangan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
              <span className="font-serif text-2xl italic">III</span>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Semangat Aksi</h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              "Fight With Faith Win With Glory". [Gambarkan bagaimana angkatanmu mengimplementasikan tagline ini dalam kehidupan nyata, kebersamaan, dan pergerakan angkatan menuju masa depan].
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}