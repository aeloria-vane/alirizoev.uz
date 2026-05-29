import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding } from '@/lib/wedding'

function ProgrammeIcon({ index }: { index: number }) {
  const icons = [
    // 0 · Welcome — open doors / archway
    <svg key="welcome" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M10 40 V20 Q10 10 24 10 Q38 10 38 20 V40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 40 H38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 14 V36" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <circle cx="20" cy="26" r="0.9" fill="currentColor" />
      <circle cx="28" cy="26" r="0.9" fill="currentColor" />
    </svg>,
    // 1 · Welcome Drink — champagne flutes
    <svg key="flutes" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M16 8 L18 22 Q18 27 22 28 V40 M14 40 H22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 8 L30 22 Q30 27 26 28 V40 M34 40 H26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8 L19 4 L29 4 L33 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>,
    // 2 · Let's Celebrate — plate with cutlery
    <svg key="dinner" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
      <path d="M9 13 V21 M9 13 L12 13 M9 21 Q9 27 12 27 V40" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M39 11 V40 M35 11 V20 Q35 24 39 24" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>,
    // 3 · Magical Dance — musical notes
    <svg key="dance" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M18 32 V14 L34 11 V28" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="15" cy="33" rx="4" ry="3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="31" cy="30" rx="4" ry="3" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // 4 · Cake Moment — tiered cake with candle
    <svg key="cake" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <rect x="11" y="32" width="26" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="15" y="24" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="19" y="16" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M24 16 V11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 11 Q22 9 24 7 Q26 9 24 11 Z" fill="currentColor" />
      <path d="M11 36 H37 M15 28 H33 M19 20 H29" stroke="currentColor" strokeWidth="0.4" opacity="0.55" />
    </svg>,
    // 5 · Farewell Wishes — star sparkle
    <svg key="farewell" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M24 8 L26.5 20 L38 22 L26.5 24 L24 36 L21.5 24 L10 22 L21.5 20 Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="24" cy="22" r="1.6" fill="currentColor" />
      <path d="M9 12 L9 16 M7 14 L11 14" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <path d="M39 30 L39 34 M37 32 L41 32" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
    </svg>,
  ]
  return icons[index] ?? icons[0]
}

export default function Programme() {
  return (
    <section className="relative bg-ivory-50 py-24 sm:py-32 px-6 paper-texture grain overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Программа дня
          </p>
          <OrnamentDivider symbol="✦" />
          <p className="mt-10 font-display italic text-2xl sm:text-3xl text-ink-soft max-w-xl mx-auto leading-relaxed">
            Каждое мгновение — продумано с любовью
          </p>
        </Reveal>

        <ol className="relative">
          {/* Vertical gold line */}
          <span className="pointer-events-none absolute left-[19px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold-400/55 to-transparent sm:-translate-x-1/2" />

          {wedding.programme.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <li key={item.time} className="relative">
                <Reveal delay={i * 120} className="block">
                  <div className={`flex sm:items-center gap-5 sm:gap-0 py-7 sm:py-9 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Node */}
                    <div className="relative shrink-0 sm:w-1/2 flex sm:justify-center">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-ivory-50 border border-gold-400/60 shadow-[0_0_0_4px_rgba(251,248,243,0.95)]">
                        <ProgrammeIcon index={i} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 sm:w-1/2 ${isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'} text-left`}>
                      <p className="font-display italic font-light text-3xl sm:text-4xl text-ink leading-none">
                        {item.time}
                      </p>
                      <p className="mt-2 font-body text-[10px] tracking-[0.45em] uppercase text-gold-600">
                        {item.title}
                      </p>
                      <p className="mt-2 font-display italic text-base sm:text-lg text-ink-soft">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
