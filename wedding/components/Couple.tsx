import Image from 'next/image'
import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'
import { wedding } from '@/lib/wedding'

export default function Couple() {
  return (
    <section className="relative bg-gradient-to-b from-ivory-50 to-ivory-100 py-24 sm:py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 sm:mb-20 text-center">
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Жених &amp; Невеста
          </p>
          <OrnamentDivider symbol="❦" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 items-start">
          {/* Groom */}
          <Reveal variant="image" className="flex flex-col items-center text-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] overflow-hidden rounded-[2px] shadow-[0_30px_60px_-30px_rgba(42,37,32,0.45)]">
              <div className="absolute inset-2 border border-gold-400/40 z-10 pointer-events-none" />
              <Image
                src="/images/photo-2.jpg"
                alt={wedding.groomFirstName}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
            <p className="mt-8 font-body text-[10px] tracking-[0.45em] uppercase text-gold-600">
              Жених
            </p>
            <h3 className="mt-3 font-display italic font-light text-4xl sm:text-5xl text-ink">
              {wedding.groomFirstName}
            </h3>
            <p className="mt-3 font-display italic text-sm text-ink-soft">
              сын семьи {wedding.family}
            </p>
          </Reveal>

          {/* Divider with monogram */}
          <Reveal className="hidden md:flex flex-col items-center justify-center self-stretch min-h-full">
            <div className="flex flex-col items-center gap-4 py-12">
              <span className="block w-px h-20 bg-gradient-to-b from-transparent to-gold-500" />
              <span className="font-script text-6xl text-gold-500 leading-none">
                &amp;
              </span>
              <span className="block w-px h-20 bg-gradient-to-b from-gold-500 to-transparent" />
            </div>
          </Reveal>

          {/* Mobile divider */}
          <Reveal className="md:hidden flex justify-center">
            <div className="flex items-center gap-4">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="font-script text-5xl text-gold-500 leading-none">
                &amp;
              </span>
              <span className="block h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />
            </div>
          </Reveal>

          {/* Bride */}
          <Reveal variant="image" delay={200} className="flex flex-col items-center text-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] overflow-hidden rounded-[2px] shadow-[0_30px_60px_-30px_rgba(42,37,32,0.45)]">
              <div className="absolute inset-2 border border-gold-400/40 z-10 pointer-events-none" />
              <Image
                src="/images/photo-3.jpg"
                alt={wedding.brideFirstName}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
            <p className="mt-8 font-body text-[10px] tracking-[0.45em] uppercase text-gold-600">
              Невеста
            </p>
            <h3 className="mt-3 font-display italic font-light text-4xl sm:text-5xl text-ink">
              {wedding.brideFirstName}
            </h3>
            <p className="mt-3 font-display italic text-sm text-ink-soft">
              дочь семьи {wedding.family}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
