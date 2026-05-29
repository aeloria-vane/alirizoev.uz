import Reveal from './Reveal'
import { wedding } from '@/lib/wedding'

export default function DressCode() {
  return (
    <section className="relative bg-gradient-to-b from-ivory-50 to-ivory-100 py-20 sm:py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="block mx-auto h-px w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mt-8 font-script text-3xl sm:text-4xl text-gold-600 leading-none">«</p>
          <p className="mt-4 font-display italic font-light text-2xl sm:text-3xl md:text-[34px] text-ink leading-snug">
            {wedding.dressCode.quote}
          </p>
          <span className="block mx-auto mt-10 h-px w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </Reveal>
      </div>
    </section>
  )
}
