'use client'

import { useEffect, useRef, useState } from 'react'

const START_SECONDS = 7
const VOLUME = 0.6

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const a = new Audio('/music.mp3')
    a.preload = 'auto'
    a.loop = true
    a.volume = VOLUME
    a.currentTime = START_SECONDS

    const onReady = () => {
      setReady(true)
      try {
        if (a.currentTime < START_SECONDS - 0.5) a.currentTime = START_SECONDS
      } catch {}
    }
    a.addEventListener('canplaythrough', onReady)
    a.addEventListener('loadedmetadata', onReady)

    audioRef.current = a

    // Try silent autoplay → fade in on first user interaction (browsers block autoplay with sound)
    const tryAutoplay = async () => {
      try {
        a.currentTime = START_SECONDS
        await a.play()
        setPlaying(true)
      } catch {
        // autoplay blocked — wait for interaction
      }
    }
    tryAutoplay()

    const handleFirstInteraction = async () => {
      if (!audioRef.current) return
      if (audioRef.current.paused) {
        try {
          if (audioRef.current.currentTime < START_SECONDS - 0.5) {
            audioRef.current.currentTime = START_SECONDS
          }
          await audioRef.current.play()
          setPlaying(true)
        } catch {}
      }
      window.removeEventListener('pointerdown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }
    window.addEventListener('pointerdown', handleFirstInteraction, { once: true })
    window.addEventListener('keydown', handleFirstInteraction, { once: true })
    window.addEventListener('touchstart', handleFirstInteraction, { once: true })

    return () => {
      a.pause()
      a.removeEventListener('canplaythrough', onReady)
      a.removeEventListener('loadedmetadata', onReady)
      window.removeEventListener('pointerdown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      audioRef.current = null
    }
  }, [])

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      try {
        if (a.currentTime < START_SECONDS - 0.5) a.currentTime = START_SECONDS
        await a.play()
        setPlaying(true)
      } catch {}
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Выключить музыку' : 'Включить музыку'}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md bg-ivory-50/85 hover:bg-ivory-50 border border-gold-400/50 shadow-[0_10px_30px_-10px_rgba(42,37,32,0.35)] transition-all duration-500"
    >
      {/* Animated rings (subtle, only when playing) */}
      {playing && (
        <>
          <span className="absolute inset-0 rounded-full border border-gold-400/40 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <span className="absolute inset-0 rounded-full border border-gold-400/25 animate-[ping_3.2s_cubic-bezier(0,0,0.2,1)_infinite] [animation-delay:0.4s]" />
        </>
      )}

      {/* Vinyl-style icon */}
      <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
        {playing ? (
          // Equalizer bars
          <span className="flex items-end gap-[3px] h-[14px]">
            <span className="w-[2px] bg-gold-600 animate-[bounce_1s_ease-in-out_infinite] [animation-delay:0ms] h-full" style={{ height: '100%' }} />
            <span className="w-[2px] bg-gold-600 animate-[bounce_1.2s_ease-in-out_infinite] [animation-delay:120ms] h-[70%]" />
            <span className="w-[2px] bg-gold-600 animate-[bounce_0.9s_ease-in-out_infinite] [animation-delay:240ms] h-[85%]" />
            <span className="w-[2px] bg-gold-600 animate-[bounce_1.1s_ease-in-out_infinite] [animation-delay:360ms] h-[60%]" />
          </span>
        ) : (
          // Muted note icon
          <svg viewBox="0 0 24 24" className="w-full h-full text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 17 V5 L18 3 V15" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="16" cy="15" r="2" />
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
          </svg>
        )}
      </span>

      {/* Subtle hint label that fades out after 5s */}
      {ready && !playing && (
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap font-body text-[10px] tracking-[0.32em] uppercase text-ink-soft/75 bg-ivory-50/90 backdrop-blur px-3 py-2 border border-gold-400/30 hidden sm:block animate-[fadeIn_0.6s_ease-out]">
          Музыка вечера
        </span>
      )}
    </button>
  )
}
