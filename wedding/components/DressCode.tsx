import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding } from '@/lib/wedding'

export default function DressCode() {
  return (
    <section className="relative bg-gradient-to-b from-ivory-50 to-ivory-100 py-24 sm:py-32 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Дресс-код
          </p>
          <OrnamentDivider symbol="❀" />
        </Reveal>

        <Reveal delay={150}>
          <h3 className="mt-12 font-display italic font-light text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Праздничный вечерний
          </h3>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-6 font-display italic text-lg sm:text-xl text-ink-soft max-w-lg mx-auto leading-relaxed">
            Будем благодарны, если поддержите атмосферу вечера{' '}
            <span className="hidden sm:inline"><br /></span>
            приглушёнными тёплыми тонами палитры.
          </p>
        </Reveal>

        <Reveal delay={350} className="mt-12 flex justify-center gap-4 sm:gap-6">
          {wedding.dressCode.palette.map((c, i) => (
            <div key={c} className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gold-400/30 shadow-[0_8px_24px_-12px_rgba(42,37,32,0.4)]"
                style={{ backgroundColor: c }}
                aria-label={`Цвет ${i + 1}`}
              />
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ink-soft/70">
                {['emerald', 'gold', 'ink', 'ivory'][i]}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={500} className="mt-14 inline-flex items-center gap-3 text-gold-500">
          <span className="block h-px w-10 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="font-display italic text-sm text-ink-soft">с любовью к деталям</span>
          <span className="block h-px w-10 bg-gradient-to-r from-gold-500 to-transparent" />
        </Reveal>
      </div>
    </section>
  )
}
