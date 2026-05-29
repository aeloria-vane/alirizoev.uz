'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { wedding } from '@/lib/wedding'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Layered overlays for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Decorative frame */}
      <div className="pointer-events-none absolute inset-5 sm:inset-8 md:inset-10 border border-ivory-50/25" />
      <div className="pointer-events-none absolute inset-[22px] sm:inset-[34px] md:inset-[42px] border border-ivory-50/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-12 sm:py-16 text-ivory-50">
        {/* Top - small caption */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="block h-px w-12 bg-ivory-50/60" />
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-ivory-50/85">
            Свадебное приглашение
          </p>
          <span className="block h-px w-12 bg-ivory-50/60" />
        </motion.div>

        {/* Center - names */}
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.55 }}
            className="font-body text-[10px] sm:text-xs font-light tracking-[0.4em] uppercase text-ivory-50/80 mb-6 sm:mb-8"
          >
            Вместе с семьёй {wedding.family}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.7 }}
            className="font-display font-light text-ivory-50 leading-[0.95] tracking-tight"
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl italic">
              {wedding.groomFirstName}
            </span>
            <span className="block my-3 sm:my-4 font-script text-3xl sm:text-5xl md:text-6xl text-gold-300">
              &amp;
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl italic">
              {wedding.brideFirstName}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.2 }}
            className="mt-8 sm:mt-10 h-px w-32 sm:w-48 origin-center bg-gradient-to-r from-transparent via-gold-300 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.35 }}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-1"
          >
            <p className="font-display italic text-base sm:text-lg text-ivory-50/85">
              приглашают Вас
            </p>
            <p className="font-body text-[11px] sm:text-xs font-light tracking-[0.4em] uppercase text-ivory-50/75 mt-3">
              {wedding.dateDisplay} · {wedding.time}
            </p>
          </motion.div>
        </div>

        {/* Bottom - scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory-50/70">
            листайте
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-10 w-px bg-gradient-to-b from-ivory-50/70 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
