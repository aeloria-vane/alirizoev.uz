import Reveal from './Reveal'
import { wedding } from '@/lib/wedding'

export default function Footer() {
  return (
    <footer className="relative bg-emerald-night text-ivory-50 py-20 sm:py-28 px-6 overflow-hidden">
      {/* Decorative gold corners */}
      <div className="pointer-events-none absolute top-6 left-6 w-10 h-10 border-l border-t border-gold-400/40" />
      <div className="pointer-events-none absolute top-6 right-6 w-10 h-10 border-r border-t border-gold-400/40" />
      <div className="pointer-events-none absolute bottom-6 left-6 w-10 h-10 border-l border-b border-gold-400/40" />
      <div className="pointer-events-none absolute bottom-6 right-6 w-10 h-10 border-r border-b border-gold-400/40" />

      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-300 mb-8">
            Будем рады видеть Вас
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="font-display font-light leading-[1] text-ivory-50">
            <span className="block text-4xl sm:text-6xl italic">{wedding.groomFirstName}</span>
            <span className="block my-3 sm:my-4 font-script text-3xl sm:text-5xl text-gold-300">
              &amp;
            </span>
            <span className="block text-4xl sm:text-6xl italic">{wedding.brideFirstName}</span>
          </h2>
        </Reveal>

        <Reveal delay={300} className="mt-10 flex flex-col items-center gap-4">
          <span className="block h-px w-32 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
          <p className="font-body text-xs sm:text-sm font-light tracking-[0.4em] uppercase text-ivory-50/85">
            {wedding.dateDisplay}
          </p>
          <p className="font-display italic text-base sm:text-lg text-gold-300">
            {wedding.venue} · {wedding.time}
          </p>
        </Reveal>

        <Reveal delay={450} className="mt-14 flex flex-col items-center gap-4">
          {/* Monogram */}
          <div className="flex items-center justify-center w-16 h-16 border border-gold-400/45 rounded-full">
            <span className="font-display italic font-light text-2xl text-gold-300 leading-none tracking-tight">
              Б<span className="text-gold-300/80">·</span>Н
            </span>
          </div>
          <span className="font-script text-3xl text-gold-300 mt-2">с любовью</span>
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-ivory-50/55">
            Семья {wedding.family} · 2026
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
