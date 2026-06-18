'use client'

import { useState, useRef, useEffect } from 'react'
// Kita tambahkan banyak ikon baru dari lucide-react untuk tampilan yang lebih pro
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, MonitorSpeaker, ListMusic } from 'lucide-react'

// DAFTAR LAGU
const playlist = [
  '/daylight.mp3',
  '/time-to-change-your-life.mp3'
]

// Fungsi pengubah angka detik menjadi format waktu (misal: 2:11)
const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00"
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  // Fungsi Play & Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((err) => console.log("Menunggu file diload...", err))
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

  // Fungsi untuk mengupdate baris waktu berjalan
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  // Fungsi untuk mendapatkan total durasi lagu
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // Fungsi saat progress bar digeser
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  // Otomatis putar saat ganti lagu
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((e) => console.log(e))
    }
  }, [trackIndex, isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[280px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white transition-all duration-500 hover:bg-white/10 hover:border-white/20">
      
      {/* File Audio Pembawa Suara */}
      <audio 
        ref={audioRef} 
        src={playlist[trackIndex]} 
        onEnded={nextTrack} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="auto" 
      />
      
      {/* --- BAGIAN 1: PROGRESS BAR & WAKTU --- */}
      <div className="mb-4">
        <div className="group relative flex items-center h-2 mb-2 cursor-pointer">
          <input 
            type="range" 
            min="0" 
            max={duration || 100} 
            value={currentTime}
            onChange={handleSeek}
            className="absolute z-20 w-full h-full opacity-0 cursor-pointer"
          />
          {/* Garis background abu-abu */}
          <div className="absolute w-full h-1 bg-white/20 rounded-full"></div>
          {/* Garis progres warna putih */}
          <div 
            className="absolute h-1 bg-white rounded-full transition-all"
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          ></div>
          {/* Titik bulat (Thumb) yang muncul saat dihover */}
          <div 
            className="absolute h-3 w-3 bg-white rounded-full shadow-md transition-all scale-0 group-hover:scale-100"
            style={{ left: `calc(${(currentTime / (duration || 1)) * 100}% - 6px)` }}
          ></div>
        </div>
        
        {/* Angka Waktu */}
        <div className="flex justify-between text-[10px] font-medium text-white/50 px-0.5 tracking-wider">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* --- BAGIAN 2: TOMBOL UTAMA --- */}
      <div className="flex items-center justify-between px-1">
        <button className="text-white