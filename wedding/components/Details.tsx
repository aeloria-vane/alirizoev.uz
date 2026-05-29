import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding } from '@/lib/wedding'

function DateIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-gold-500" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="1" />
      <path d="M6 18 H42" stroke="currentColor" strokeWidth="1" />
      <path d="M16 6 V14 M32 6 V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="30" r="1.5" fill="currentColor" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-gold-500" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      <path d="M24 14 V24 L31 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="24" cy="24" r="1" fill="currentColor" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-gold-500" fill="none" aria-hidden>
      <path
        d="M24 6 C16 6 10 12 10 20 C10 30 24 42 24 42 C24 42 38 30 38 20 C38 12 32 6 24 6 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="4.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function Details() {
  return (
    <section className="relative bg-ivory-50 py-24 sm:py-32 px-6 paper-texture overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Когда и Где
          </p>
          <OrnamentDivider symbol="✦" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <Reveal delay={100}>
            <div className="lift relative bg-white/40 backdrop-blur-sm border border-gold-300/30 px-6 py-10 text-center">
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-gold-400/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-gold-400/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-gold-400/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-400/60" />
              <div className="flex justify-center mb-6"><DateIcon /></div>
              <p className="font-body text-[10px] tracking-[0.45em] uppercase text-gold-600 mb-4">Дата</p>
              <p className="font-display italic font-light text-3xl sm:text-4xl text-ink leading-tight">
                {wedding.dateDisplay}
              </p>
              <p className="mt-3 font-body text-sm font-light tracking-widest uppercase text-ink-soft">
                {wedding.dayOfWeek}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="lift relative bg-white/40 backdrop-blur-sm border border-gold-300/30 px-6 py-10 text-center">
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-gold-400/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-gold-400/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-gold-400/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-400/60" />
              <div className="flex justify-center mb-6"><ClockIcon /></div>
              <p className="font-body text-[10px] tracking-[0.45em] uppercase text-gold-600 mb-4">Время</p>
              <p className="font-display italic font-light text-3xl sm:text-4xl text-ink leading-tight">
                {wedding.time}
              </p>
              <p className="mt-3 font-body text-sm font-light tracking-widest uppercase text-ink-soft">
                Начало торжества
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="lift relative bg-white/40 backdrop-blur-sm border border-gold-300/30 px-6 py-10 text-center">
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-gold-400/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-gold-400/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-gold-400/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-400/60" />
              <div className="flex justify-center mb-6"><PinIcon /></div>
              <p className="font-body text-[10px] tracking-[0.45em] uppercase text-gold-600 mb-4">Место</p>
              <p className="font-display italic font-light text-3xl sm:text-4xl text-ink leading-tight">
                {wedding.venue}
              </p>
              <p className="mt-3 font-body text-sm font-light tracking-widest uppercase text-ink-soft">
                {wedding.venueType}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
