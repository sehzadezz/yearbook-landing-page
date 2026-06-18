'use client'

// Ditambahkan pemanggilan 'React' di sini agar Vercel tidak bingung
import React, { useState, useRef, useEffect } from 'react'
// Menggunakan ikon-ikon standar yang 100% pasti ada di semua versi lucide-react
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Menu } from 'lucide-react'

const playlist = [
  '/daylight.mp3',
  '/time-to-change-your-life.mp3'
]

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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((err) => console.log(err))
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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // TypeScript sekarang akan mengenali 'React.ChangeEvent' dengan baik
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((e) => console.log(e))
    }
  }, [trackIndex, isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[280px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-white transition-all duration-500 hover:bg-black/50 hover:border-white/20">
      
      <audio 
        ref={audioRef} 
        src={playlist[trackIndex]} 
        onEnded={nextTrack} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="auto" 
      />
      
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
          <div className="absolute w-full h-1 bg-white/20 rounded-full"></div>
          {/* Keamanan tambahan agar garis tidak error saat durasi masih 0 */}
          <div 
            className="absolute h-1 bg-white rounded-full transition-all"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          ></div>
          <div 
            className="absolute h-3 w-3 bg-white rounded-full shadow-md transition-all scale-0 group-hover:scale-100"
            style={{ left: `calc(${duration ? (currentTime / duration) * 100 : 0}% - 6px)` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-[10px] font-medium text-white/50 px-0.5 tracking-wider">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-1">
        <button className="text-white/40 hover:text-white transition-colors">
          <Shuffle size={16} />
        </button>

        <button onClick={prevTrack} className="text-white/80 hover:text-white hover:scale-110 transition-all">
          <SkipBack size={22} fill="currentColor" />
        </button>

        <button 
          onClick={togglePlay} 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
        >
          {isPlaying ? (
            <Pause size={24} fill="currentColor" />
          ) : (
            <Play size={24} fill="currentColor" className="ml-1" />
          )}
        </button>

        <button onClick={nextTrack} className="text-white/80 hover:text-white hover:scale-110 transition-all">
          <SkipForward size={22} fill="currentColor" />
        </button>

        <button className="text-white/40 hover:text-white transition-colors">
          <Repeat size={16} />
        </button>
      </div>

      <div className="flex justify-between mt-5 px-1 text-white/30">
        <button className="hover:text-white transition-colors"><Volume2 size={14} /></button>
        <button className="hover:text-white transition-colors"><Menu size={14} /></button>
      </div>

    </div>
  )
}