import Image from 'next/image'
import Reveal from './Reveal'
import { OrnamentDivider } from './Ornament'

const photos = [
  { src: '/images/photo-4.jpg', alt: 'Жених и невеста', aspect: 'aspect-[3/4]', objectPos: 'center 30%' },
  { src: '/images/photo-5.jpg', alt: 'Жених и невеста', aspect: 'aspect-[3/4]', objectPos: 'center 25%' },
  { src: '/images/photo-2.jpg', alt: 'Жених и невеста', aspect: 'aspect-[4/5]', objectPos: 'center 25%' },
  { src: '/images/photo-3.jpg', alt: 'Жених и невеста', aspect: 'aspect-[3/4]', objectPos: 'center 25%' },
]

export default function Gallery() {
  return (
    <section className="relative bg-ivory-50 py-24 sm:py-32 px-6 paper-texture overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="text-center mb-14 sm:mb-20">
          <p className="font-body text-[10px] sm:text-[11px] font-light tracking-[0.5em] uppercase text-gold-600 mb-6">
            Наши моменты
          </p>
          <OrnamentDivider symbol="❦" />
          <p className="mt-10 font-display italic text-2xl sm:text-3xl text-ink-soft max-w-xl mx-auto leading-relaxed">
            Каждое мгновение — на вес золота
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              variant="image"
              delay={i * 120}
              className={`group relative overflow-hidden ${i === 1 || i === 2 ? 'md:translate-y-8' : ''}`}
            >
              <div className={`relative w-full ${p.aspect} overflow-hidden`}>
                <div className="absolute inset-1.5 border border-gold-400/30 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ objectPosition: p.objectPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
