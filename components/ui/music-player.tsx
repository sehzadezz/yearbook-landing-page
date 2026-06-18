'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
// Kita import icon Play dan Pause agar lebih jelas
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'

// DAFTAR LAGU (Pastikan namanya sudah tepat seperti ini)
const playlist = [
  '/daylight.mp3',
  '/time-to-change-your-life.mp3'
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  // State baru untuk mengatur volume (default 50%)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  // Efek pintar untuk menyesuaikan volume suara dengan pergeseran slider
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Fungsi Play & Pause yang diperbarui
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Ditambahkan penanganan khusus jika browser memblokir audio
        audioRef.current.play().catch((err) => console.log("Gagal memutar audio:", err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  // Otomatis memutar lagu baru saat di-skip
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((e) => console.log(e))
    }
  }, [trackIndex, isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 p-2 md:p-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-black/60 hover:border-white/20">
      
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={playlist[trackIndex]} 
        onEnded={nextTrack} 
        preload="auto" 
      />
      
      {/* --- GRUP KONTROL LAGU (Prev, Play/Pause, Next) --- */}
      <div className="flex items-center gap-1 md:gap-2 border-r border-white/20 pr-3 md:pr-4">
        <button onClick={prevTrack} className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          <SkipBack size={18} />
        </button>
        
        {/* Tombol Play/Pause dibuat Solid Putih agar terlihat premium */}
        <button 
          onClick={togglePlay} 
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform shadow-lg"
        >
          {isPlaying ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" className="ml-1" />
          )}
        </button>

        <button onClick={nextTrack} className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          <SkipForward size={18} />
        </button>
      </div>

      {/* --- GRUP KONTROL VOLUME --- */}
      <div className="flex items-center gap-2 pl-1 pr-2">
        <button 
          onClick={() => setIsMuted(!isMuted)} 
          className="p-1 text-white/70 hover:text-white transition-colors"
        >
          {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        
        {/* Slider Volume */}
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value))
            setIsMuted(false)
          }}
          className="w-16 md:w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>

    </div>
  )
}