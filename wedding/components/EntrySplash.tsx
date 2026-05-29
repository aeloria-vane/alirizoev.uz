'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wedding } from '@/lib/wedding'

const ease = [0.22, 1, 0.36, 1] as const

export default function EntrySplash() {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  // Lock body scroll while splash visible
  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [visible])

  const dismiss = () => {
    if (closing) return
    setClosing(true)
    // Notify the music player (and any other listener) that the user has interacted
    window.dispatchEvent(new CustomEvent('wedding:enter'))
    setTimeout(() => setVisible(false), 900)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: closing ? 0 : 1 }}
          transition={{ duration: 0.9, ease }}
          onClick={dismiss}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') dismiss()
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at center, #1F3A2E 0%, #13241C 70%, #0B1612 100%)',
          }}
        >
          {/* Subtle ornamental rings */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div
              className="absolute left-1/2 top-1/2 w-[120vmin] h-[120vmin] rounded-full border border-gold-400/15"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
              className="absolute left-1/2 top-1/2 w-[90vmin] h-[90vmin] rounded-full border border-gold-400/10"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </div>

          {/* Gold inner frame */}
          <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-gold-400/25" />
          <div className="pointer-events-none absolute inset-[22px] sm:inset-[42px] border border-gold-400/10" />

          <div className="relative z-10 px-8 text-center text-ivory-50 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.2 }}
              className="flex flex-col items-center gap-3 mb-10"
            >
              <span className="block h-px w-10 bg-ivory-50/60" />
              <p className="font-body text-[10px] font-light tracking-[0.5em] uppercase text-ivory-50/85">
                Свадебное приглашение
              </p>
              <span className="block h-px w-10 bg-ivory-50/60" />
            </motion.div>

            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.4 }}
              className="mx-auto mb-8 flex items-center justify-center w-20 h-20 rounded-full border border-gold-400/55"
            >
              <span className="font-display italic font-light text-3xl text-gold-300 leading-none">
                Б<span className="text-gold-300/80">·</span>Н
              </span>
            </motion.div>

            {/* Names */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease, delay: 0.55 }}
              className="font-display font-light leading-[0.95] tracking-tight"
            >
              <span className="block text-4xl sm:text-5xl italic">{wedding.groomFirstName}</span>
              <span className="block my-2 sm:my-3 font-script text-2xl sm:text-3xl text-gold-300">&amp;</span>
              <span className="block text-4xl sm:text-5xl italic">{wedding.brideFirstName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.85 }}
              className="mt-6 font-body text-[10px] font-light tracking-[0.4em] uppercase text-ivory-50/75"
            >
              {wedding.dateDisplay} · {wedding.time}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, ease, delay: 1.05 }}
              className="mt-10 mx-auto h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold-300 to-transparent"
            />

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.2 }}
              onClick={(e) => {
                e.stopPropagation()
                dismiss()
              }}
              className="mt-10 inline-flex items-center gap-3 px-8 py-3.5 border border-gold-300/70 text-ivory-50 hover:bg-gold-400/90 hover:text-emerald-night hover:border-gold-300 font-body text-[11px] font-light tracking-[0.32em] uppercase transition-colors duration-500"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M9 17 V5 L18 3 V15" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="16" cy="15" r="2" />
              </svg>
              Открыть приглашение
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-6 font-display italic text-xs text-ivory-50/55"
            >
              с музыкальным сопровождением
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
