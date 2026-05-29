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
              <span className="font-display italic font-light text-2xl text-gold-600 leading-none tracking-tight">
                {wedding.groomInitial}<span className="text-gold-400">&amp;</span>{wedding.brideInitial}
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
          <p className="font-display italic font-light text-2xl sm:text-3xl text-gold-600">
            {hasName ? 'Дорогой' : 'Дорогому гостю'}
          </p>
        </Reveal>

        {hasName && (
          <Reveal delay={250}>
            <h2 className="mt-3 font-display italic font-light text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
              {guestName}
            </h2>
          </Reveal>
        )}

        <Reveal delay={hasName ? 450 : 300} className="mt-12 space-y-6">
          <p className="font-display italic text-lg sm:text-xl md:text-[22px] leading-relaxed text-ink-soft">
            Любовь объединяет сердца, а счастье становится ещё ценнее, когда
            рядом самые близкие и дорогие люди. Совсем скоро в нашей жизни
            состоится особенный день — день, наполненный искренними эмоциями,
            тёплыми улыбками, счастливыми взглядами и незабываемыми моментами.
          </p>
          <p className="font-display italic text-lg sm:text-xl md:text-[22px] leading-relaxed text-ink-soft">
            Для нас будет огромной радостью разделить этот праздник именно
            с Вами, ведь присутствие каждого гостя делает этот день ещё более
            тёплым, душевным и значимым. Мы искренне хотим, чтобы Вы стали
            частью нашей истории и сохранили вместе с нами воспоминания
            об этом прекрасном событии.
          </p>
          <p className="font-display italic text-lg sm:text-xl md:text-[22px] leading-relaxed text-ink-soft">
            С нетерпением ждём встречи с Вами и будем счастливы разделить
            вместе атмосферу любви, радости и волшебства этого дня.
          </p>
        </Reveal>

        <Reveal delay={hasName ? 700 : 550} className="mt-14 flex flex-col items-center gap-4">
          <span className="block h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.45em] uppercase text-gold-600">
            С уважением
          </p>
          <p className="font-display italic text-xl sm:text-2xl text-ink leading-snug">
            Семьи {wedding.groomFamily}
            <span className="mx-2 text-gold-500/80">·</span>
            {wedding.brideFamily}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
