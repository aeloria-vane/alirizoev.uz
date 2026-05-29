'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'span' | 'h1' | 'h2' | 'p' | 'li' | 'figure'
  variant?: 'fade-up' | 'image'
  threshold?: number
  once?: boolean
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  variant = 'fade-up',
  threshold = 0.18,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion: show immediately
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setInView(true)
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            if (once) obs.unobserve(e.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, once])

  const base = variant === 'image' ? 'reveal-img' : 'reveal'
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  const Component = Tag as unknown as React.ElementType
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`${base} ${inView ? 'in-view' : ''} ${className}`}
      style={style}
    >
      {children}
    </Component>
  )
}
