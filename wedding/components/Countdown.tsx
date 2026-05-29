'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '@/lib/wedding'

function diff(target: Date) {
  const now = Date.now()
  const t = target.getTime() - now
  if (t <= 0) return { d: 0, h: 0, m: 0, s: 0, past: true }
  return {
    d: Math.floor(t / 86_400_000),
    h: Math.floor((t / 3_600_000) % 24),
    m: Math.floor((t / 60_000) % 60),
    s: Math.floor((t / 1_000) % 60),
    past: false,
  }
}

const units: Array<{ key: 'd' | 'h' | 'm' | 's'; label: string }> = [
  { key: 'd', label: 'дней' },
  { key: 'h', label: 'часов' },
  { key: 'm', label: 'минут' },
  { key: 's', label: 'секунд' },
]

export default function Countdown() {
  const [t, setT] = useState(() => diff(wedding.date))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setT(diff(wedding.date)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-emerald-deep py-20 sm:py-28 px-6 overflow-hidden">
      {/* Subtle gold ornament background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #C9A96A 0%, transparent 35%), radial-gradient(circle at 80% 80%, #C9A96A 0%, transparent 35%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-300 mb-4"
        >
          До торжества
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-3xl sm:text-4xl text-ivory-50 mb-12"
        >
          осталось
        </motion.h3>

        <div className="grid grid-cols-4 gap-2 sm:gap-6">
          {units.map((u, i) => {
            const value = t[u.key]
            return (
              <motion.div
                key={u.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full aspect-square max-w-[120px] flex items-center justify-center">
                  <div className="absolute inset-0 border border-gold-400/40" />
                  <div className="absolute inset-1.5 border border-gold-400/20" />
                  <span className="font-display italic font-light text-4xl sm:text-5xl md:text-6xl text-ivory-50 tabular-nums">
                    {mounted ? String(value).padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="mt-4 font-body text-[10px] sm:text-xs font-light tracking-[0.3em] uppercase text-gold-300/90">
                  {u.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
