import Reveal from './Reveal'
import { OrnamentFloral } from './Ornament'
import { wedding } from '@/lib/wedding'

export default function Greeting({ guestName }: { guestName: string }) {
  const hasName = guestName.length > 0

  return (
    <section className="relative bg-ivory-50 py-24 sm:py-32 px-6 paper-texture grain overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 border border-gold-400/45 rounded-full bg-ivory-50 shadow-[0_8px_30px_-12px_rgba(176,141,87,0.25)]">
              <span className="font-display italic font-light text-3xl text-gold-600 leading-none">
                Б<span className="text-gold-400">·</span>Н
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex justify-center mb-8">
            <OrnamentFloral />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600">
            Дорогому гостю
          </p>
        </Reveal>

        {hasName && (
          <Reveal delay={300}>
            <h2 className="mt-8 font-display italic font-light text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
              {guestName}
            </h2>
          </Reveal>
        )}

        <Reveal delay={hasName ? 500 : 300}>
          <p className="mt-10 font-display italic text-xl sm:text-2xl md:text-[26px] leading-relaxed text-ink-soft">
            Семьи {wedding.groomFamily} и {wedding.brideFamily} сердечно
            приглашают Вас разделить с нами один из самых важных и счастливых
            дней в нашей жизни — торжественную церемонию бракосочетания.
          </p>
        </Reveal>

        <Reveal delay={hasName ? 700 : 500} className="mt-14 flex flex-col items-center gap-4">
          <span className="block h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="font-script text-3xl sm:text-4xl text-gold-600">
            С любовью
          </p>
          <p className="font-display italic text-lg sm:text-xl text-ink">
            {wedding.groomFirstName} &amp; {wedding.brideFirstName}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
