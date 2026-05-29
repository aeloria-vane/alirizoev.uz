import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding } from '@/lib/wedding'

function ProgrammeIcon({ index }: { index: number }) {
  const icons = [
    // Welcome — flute glasses
    <svg key="welcome" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M16 8 L18 22 Q18 26 22 27 V40 H14 V40 H22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 8 L30 22 Q30 26 26 27 V40 H34 V40 H26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8 H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>,
    // Ceremony — rings
    <svg key="rings" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <circle cx="19" cy="26" r="11" stroke="currentColor" strokeWidth="1" />
      <circle cx="29" cy="26" r="11" stroke="currentColor" strokeWidth="1" />
      <path d="M16 12 L19 16 L22 12" stroke="currentColor" strokeWidth="0.8" />
      <path d="M26 12 L29 16 L32 12" stroke="currentColor" strokeWidth="0.8" />
    </svg>,
    // Dinner — plate with cutlery
    <svg key="dinner" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <path d="M10 14 V24 M10 14 L13 14 M10 24 Q10 30 13 30 V40" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M38 12 V40 M34 12 V20 Q34 24 38 24" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>,
    // Dance — musical notes
    <svg key="dance" viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-gold-500" aria-hidden>
      <path d="M18 32 V14 L34 11 V28" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="15" cy="33" rx="4" ry="3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="31" cy="30" rx="4" ry="3" stroke="currentColor" strokeWidth="1" />
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
