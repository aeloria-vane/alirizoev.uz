'use client'

import { useEffect, useRef, useState } from 'react'

const START_SECONDS = 7
const VOLUME = 0.6

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const a = new Audio('/music.mp3')
    a.preload = 'auto'
    a.loop = true
    a.volume = VOLUME
    audioRef.current = a
    setMounted(true)

    const seekToStart = () => {
      try {
        if (a.currentTime < START_SECONDS - 0.3) a.currentTime = START_SECONDS
      } catch {}
    }
    a.addEventListener('loadedmetadata', seekToStart)
    a.addEventListener('canplay', seekToStart)

    const startMusic = async () => {
      if (!audioRef.current) return
      try {
        if (audioRef.current.currentTime < START_SECONDS - 0.3) {
          audioRef.current.currentTime = START_SECONDS
        }
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        // browser still blocked — wait for next interaction
      }
    }

    // Custom event from EntrySplash
    const onEnter = () => {
      startMusic()
    }
    window.addEventListener('wedding:enter', onEnter as EventListener)

    // Fallback: any first interaction also starts
    const onAnyInteraction = () => {
      startMusic()
    }
    const ev: (keyof WindowEventMap)[] = [
      'pointerdown',
      'touchstart',
      'keydown',
      'wheel',
      'scroll',
    ]
    ev.forEach((e) => window.addEventListener(e, onAnyInteraction, { once: true, passive: true }))

    // Try silent autoplay too (may succeed on some browsers / repeat visits)
    a.play().then(
      () => setPlaying(true),
      () => {
        /* blocked, will start on interaction */
      },
    )

    return () => {
      a.pause()
      a.removeEventListener('loadedmetadata', seekToStart)
      a.removeEventListener('canplay', seekToStart)
      window.removeEventListener('wedding:enter', onEnter as EventListener)
      ev.forEach((e) => window.removeEventListener(e, onAnyInteraction))
      audioRef.current = null
    }
  }, [])

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      try {
        if (a.currentTime < START_SECONDS - 0.3) a.currentTime = START_SECONDS
        await a.play()
        setPlaying(true)
      } catch {}
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Выключить музыку' : 'Включить музыку'}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md bg-ivory-50/85 hover:bg-ivory-50 border border-gold-400/50 shadow-[0_10px_30px_-10px_rgba(42,37,32,0.35)] transition-all duration-500"
    >
      {playing && (
        <>
          <span className="absolute inset-0 rounded-full border border-gold-400/40 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <span className="absolute inset-0 rounded-full border border-gold-400/25 animate-[ping_3.2s_cubic-bezier(0,0,0.2,1)_infinite] [animation-delay:0.4s]" />
        </>
      )}

      <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
        {playing ? (
          <span className="flex items-end gap-[3px] h-[14px]">
            <span className="w-[2px] bg-gold-600 animate-[bounce_1s_ease-in-out_infinite] h-full" />
            <span className="w-[2px] bg-gold-600 animate-[bounce_1.2s_ease-in-out_infinite] [animation-delay:120ms] h-[70%]" />
            <span className="w-[2px] bg-gold-600 animate-[bounce_0.9s_ease-in-out_infinite] [animation-delay:240ms] h-[85%]" />
            <span className="w-[2px] bg-gold-600 animate-[bounce_1.1s_ease-in-out_infinite] [animation-delay:360ms] h-[60%]" />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" className="w-full h-full text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 17 V5 L18 3 V15" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="16" cy="15" r="2" />
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
          </svg>
        )}
      </span>
    </button>
  )
}
