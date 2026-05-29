import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding, yandexMapsUrl } from '@/lib/wedding'

export default function Venue() {
  const { coords } = wedding
  // Yandex Maps embed (no API key needed for public embed)
  const embedSrc = `https://yandex.ru/map-widget/v1/?ll=${coords.lng}%2C${coords.lat}&z=16&pt=${coords.lng},${coords.lat},pm2rdm`

  return (
    <section className="relative bg-gradient-to-b from-ivory-100 to-ivory-50 py-24 sm:py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Локация
          </p>
          <OrnamentDivider symbol="❀" />
          <h3 className="mt-10 font-display italic font-light text-4xl sm:text-5xl md:text-6xl text-ink">
            {wedding.venue}
          </h3>
          <p className="mt-4 font-body text-sm font-light tracking-[0.3em] uppercase text-ink-soft">
            {wedding.city}
          </p>
        </Reveal>

        <Reveal variant="image" delay={150}>
          <div className="relative">
            {/* Gold frame */}
            <div className="absolute -inset-2 sm:-inset-3 border border-gold-400/50 pointer-events-none" />
            <div className="absolute -inset-[14px] sm:-inset-[18px] border border-gold-400/20 pointer-events-none" />

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-ivory-200 shadow-[0_40px_80px_-40px_rgba(42,37,32,0.4)]">
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.85) contrast(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ресторан Гранд Султан на карте"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M12 2 C7 2 4 5 4 9 C4 15 12 22 12 22 C12 22 20 15 20 9 C20 5 17 2 12 2 Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Открыть в Яндекс.Картах
          </a>
        </Reveal>
      </div>
    </section>
  )
}
