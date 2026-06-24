'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import Image from 'next/image'

const students = [
  {
    name: 'Abdullah Ahmad Syahid',
    cls: 'Class 12-A',
    quote: 'The future belongs to those who believe.',
    img: 'https://raw.githubusercontent.com/sehzadezz/yearbook-landing-page/main/public/images/syahid.png',
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
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

  return (
    <section id="students" className="relative py-20 bg-black text-white z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Reveal>
            <h2 className="text-sm tracking-widest text-white/50 uppercase mb-2">Student Wall</h2>
          </Reveal>
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-serif">The Faces Behind The Memories</h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedStudent(student)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all cursor-pointer hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-lg">{student.name}</h4>
                  <p className="text-white/50 text-sm">{student.cls}</p>
                </div>
              </div>
              <p className="text-white/70 italic font-serif">"{student.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-6 right-8 text-white/50 hover:text-white text-2xl transition-colors"
              >
                ✕
              </button>
              <img
                src={selectedStudent.img}
                alt={selectedStudent.name}
                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-2xl mb-8 shadow-2xl border border-white/10"
              />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 text-center">
                {selectedStudent.name}
              </h3>
              <p className="text-white/50 mb-6 tracking-widest uppercase text-sm md:text-base">
                {selectedStudent.cls}
              </p>
              <p className="text-xl md:text-2xl italic text-white/80 text-center font-serif leading-relaxed">
                "{selectedStudent.quote}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}