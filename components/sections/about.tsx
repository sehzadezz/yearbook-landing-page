'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Data filosofi yang kita rapikan agar kodenya lebih bersih
const philosophyData = [
  {
    id: 1,
    roman: 'I',
    tag: 'The Why',
    title: 'Makna Nama',
    teaser: 'Jaysyul Muzaffar bukanlah sekadar sebutan, melainkan sebuah doa dan visi agung.',
    fullText: 'Berakar dari bahasa Arab, nama ini merepresentasikan doa abadi agar angkatan ini menjadi barisan pejuang yang selalu dibimbing menuju kemenangan yang diridhai. Ini adalah pengingat bahwa setiap langkah akademis dan pengabdian kita harus dinaungi oleh iman yang teguh untuk mencapai kejayaan sejati.'
  },
  {
    id: 2,
    roman: 'II',
    tag: 'The What',
    title: 'Filosofi Logo',
    teaser: 'Setiap sudut dan garis pada lambang ini adalah representasi visual dari identitas Jaysyul Muzaffar.',
    fullText: 'Desain logo ini memadukan unsur dinamis dan kokoh. Sudut tajam melambangkan ambisi untuk terus mendaki mencapai puncak prestasi. Sementara garis yang saling bertaut melambangkan ukhuwah (persaudaraan) yang erat, saling melindungi dan menyatukan setiap individu di dalamnya tanpa memandang perbedaan.'
  },
  {
    id: 3,
    roman: 'III',
    tag: 'The How',
    title: 'Semangat Aksi',
    teaser: '"Fight With Faith Win With Glory". Bagaimana kami menerjemahkan visi ini menjadi aksi nyata bukan hanya sekedar Tagline.',
    fullText: 'Semboyan ini adalah kompas pergerakan kami. "Fight With Faith" bermakna setiap usaha harus berlandaskan integritas dan niat yang lurus. "Win With Glory" adalah tujuannya—bukan sekadar menang untuk diri sendiri, melainkan menang dengan membawa kebermanfaatan, karya, dan warisan kebaikan bagi sekitar.'
  }
]

export function About() {
  // State untuk melacak kotak mana yang sedang terbuka (menyimpan ID)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="about" className="relative pt-24 pb-40 md:pt-32 md:pb-56 bg-black text-white overflow-hidden">
      {/* ========================================================= */}
        {/* MESIN TURBO OPTIMASI: ANTI-LAG UNTUK HP (SMOOTH 60FPS)  */}
        {/* ========================================================= */}

        {/* 1. Cahaya Utama di tengah atas (Blur disesuaikan untuk HP) */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[300px] md:w-[1000px] h-[150px] md:h-[400px] bg-white/[0.04] rounded-[100%] blur-[50px] md:blur-[120px]"></div>
        
        {/* 2. Cahaya Bias di sudut kiri bawah */}
        <div className="pointer-events-none absolute -bottom-32 -left-40 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-white/[0.03] rounded-full blur-[50px] md:blur-[120px]"></div>
        
        {/* 3. Cahaya Bias di sudut kanan atas */}
        <div className="pointer-events-none absolute top-1/4 -right-40 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-white/[0.02] rounded-full blur-[50px] md:blur-[120px]"></div>

        {/* Teks Raksasa Berjalan dengan Hardware Acceleration (transform-gpu) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex z-0 transform-gpu will-change-transform">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }} // Durasi diubah ke 60s agar pergerakan di HP jauh lebih santai dan ringan
            className="flex whitespace-nowrap text-[80px] md:text-[220px] font-extrabold text-white/[0.06] md:text-white/10 uppercase tracking-tighter transform-gpu"
          >
            {"FIGHT WITH FAITH WIN WITH GLORY • JAYSYUL MUZAFFAR • FIGHT WITH FAITH WIN WITH GLORY • JAYSYUL MUZAFFAR • FIGHT WITH FAITH WIN WITH GLORY • JAYSYUL MUZAFFAR • "}
          </motion.div>
        </div>

        {/* ========================================================= */}

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

        {/* Philosophy Grid - Expandable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {philosophyData.map((item, index) => (
            <motion.div
              layout // Properti ajaib agar animasi melebarnya mulus
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-left cursor-pointer"
            >
              {/* Watermark Number */}
              <span className="absolute -right-4 -top-8 text-[160px] font-serif font-bold italic leading-none text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] select-none pointer-events-none">
                {item.roman}
              </span>
              
              <motion.div layout className="relative z-10">
                <motion.p layout className="text-xs font-bold tracking-[0.2em] text-white/40 mb-3 uppercase">
                  {item.tag}
                </motion.p>
                
                <motion.h3 layout className="font-serif text-2xl mb-4 text-white flex items-center justify-between">
                  {item.title}
                  {/* Indikator Tombol Buka/Tutup */}
                  <span className="text-[10px] uppercase tracking-wider font-sans font-bold text-white/50 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 group-hover:text-white group-hover:border-white/30 transition-all">
                    {expandedId === item.id ? 'Tutup' : 'Detail'}
                  </span>
                </motion.h3>

                <motion.p layout className="text-white/70 leading-relaxed text-sm">
                  {item.teaser}
                </motion.p>

                {/* Bagian yang muncul saat diklik */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 border-t border-white/10 text-white/90 text-sm leading-relaxed">
                        {item.fullText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}