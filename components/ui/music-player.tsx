'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, VolumeX, ListMusic } from 'lucide-react'

const playlist = [
  // Kita ambil langsung dari server GitHub-mu agar tidak macet di v0
  'https://raw.githubusercontent.com/sehzadezz/yearbook-landing-page/main/public/daylightcomp.mp3',
  'https://raw.githubusercontent.com/sehzadezz/yearbook-landing-page/main/public/time-to-change-your-life.mp3'
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
  
  const [volume, setVolume] = useState(0.8)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)

  // STATE BARU: Untuk mendeteksi apakah kursor mouse sedang mendekat
  const [isHovered, setIsHovered] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

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
    if (isShuffle) {
      let randomIndex = trackIndex
      while (randomIndex === trackIndex && playlist.length > 1) {
        randomIndex = Math.floor(Math.random() * playlist.length)
      }
      setTrackIndex(randomIndex)
    } else {
      setTrackIndex((prev) => (prev + 1) % playlist.length)
    }
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
    <div 
      // KOTAK UTAMA YANG BISA MEMBESAR DAN MENGECIL DENGAN MULUS
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isHovered 
          ? 'w-[280px] h-[190px] rounded-3xl bg-black/60 border-white/20' 
          : 'w-16 h-16 rounded-full bg-white/10 border-white/10 cursor-pointer hover:bg-white/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { if(!isHovered) setIsHovered(true) }} // Agar di HP bisa diklik untuk membuka
    >
      
      <audio 
        ref={audioRef} 
        src={playlist[trackIndex]} 
        onEnded={nextTrack} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        loop={isRepeat} 
        preload="auto" 
      />

      {/* --- WUJUD 1: MINI PLAYER BULAT (Hanya terlihat saat kursor jauh) --- */}
      <div 
        className={`absolute flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); togglePlay(); }} 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>
      </div>

      {/* --- WUJUD 2: FULL PLAYER MEWAH (Hanya terlihat saat kursor mendekat) --- */}
      <div 
        className={`absolute w-[240px] flex flex-col transition-all duration-500 delay-100 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Progress Bar & Waktu */}
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

        {/* Tombol Utama */}
        <div className="flex items-center justify-between px-1">
          <button 
            onClick={() => setIsShuffle(!isShuffle)} 
            className={`transition-colors ${isShuffle ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/40 hover:text-white'}`}
          >
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

          <button 
            onClick={() => setIsRepeat(!isRepeat)} 
            className={`transition-colors ${isRepeat ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/40 hover:text-white'}`}
          >
            <Repeat size={16} />
          </button>
        </div>

        {/* Kontrol Volume & Ikon Tambahan */}
        <div className="flex justify-between items-center mt-5 px-1 text-white/50">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setVolume(volume === 0 ? 0.8 : 0)} 
              className="hover:text-white transition-colors"
            >
              {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.05" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>
          <button className="hover:text-white transition-colors">
            <ListMusic size={14} />
          </button>
        </div>

      </div>
    </div>
  )
}