import Image from 'next/image'
import Reveal from './Reveal'

export default function Quote() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image
        src="/images/photo-1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 40%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
      <div className="absolute inset-6 sm:inset-10 border border-ivory-50/20 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <Reveal className="max-w-2xl text-center text-ivory-50">
          <p className="font-script text-5xl sm:text-6xl text-gold-300 mb-8">
            «
          </p>
          <p className="font-display italic font-light text-2xl sm:text-3xl md:text-[34px] leading-relaxed">
            Любовь не приходит и не уходит —
            <br />
            она просто всегда есть.
          </p>
          <span className="block mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
        </Reveal>
      </div>
    </section>
  )
}
