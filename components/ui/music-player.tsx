'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
// Kita tambahkan icon SkipForward dan SkipBack dari lucide-react
import { Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react'

// DAFTAR LAGU (Ganti sesuai dengan nama file di folder public kamu)
const playlist = [
  '/daylight.mp3',
  '/time-to-change-your-life.mp3'
]
export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Fungsi Play & Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Fungsi Lagu Selanjutnya
  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  // Fungsi Lagu Sebelumnya
  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  // Efek pintar: otomatis memutar lagu baru saat tombol Next/Prev ditekan
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play()
    }
  }, [trackIndex, isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white/80 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      
      {/* Audio Element: otomatis lanjut ke lagu berikutnya (nextTrack) saat selesai */}
      <audio 
        ref={audioRef} 
        src={playlist[trackIndex]} 
        onEnded={nextTrack} 
        preload="auto" 
      />
      
      {/* Tombol Previous */}
      <motion.button
        whileHover={{ scale: 1.1, color: '#ffffff' }}
        whileTap={{ scale: 0.9 }}
        onClick={prevTrack}
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        aria-label="Lagu Sebelumnya"
      >
        <SkipBack size={18} />
      </motion.button>

      {/* Tombol Play/Pause Utama */}
      <motion.button
        whileHover={{ scale: 1.05, color: '#ffffff' }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/5 transition-colors shadow-inner"
        aria-label="Play/Pause"
      >
        {isPlaying ? (
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Volume2 size={20} />
          </motion.div>
        ) : (
          <VolumeX size={20} />
        )}
      </motion.button>

      {/* Tombol Next */}
      <motion.button
        whileHover={{ scale: 1.1, color: '#ffffff' }}
        whileTap={{ scale: 0.9 }}
        onClick={nextTrack}
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        aria-label="Lagu Selanjutnya"
      >
        <SkipForward size={18} />
      </motion.button>

    </div>
  )
}