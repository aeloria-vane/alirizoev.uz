export function OrnamentDivider({ symbol = '✦' }: { symbol?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 text-gold-500">
      <span className="block h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
      <span className="font-display text-base sm:text-lg select-none" aria-hidden>
        {symbol}
      </span>
      <span className="block h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
    </div>
  )
}

export function OrnamentFloral() {
  return (
    <svg
      viewBox="0 0 200 24"
      className="w-44 sm:w-56 h-auto text-gold-500"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 12 H70"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M130 12 H198"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <g transform="translate(100 12)">
        <circle r="2" fill="currentColor" />
        <circle r="5" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle r="9" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      </g>
      <path
        d="M78 12 Q 86 4, 94 12 Q 86 20, 78 12 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M122 12 Q 114 4, 106 12 Q 114 20, 122 12 Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`text-gold-500 ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2 L 28 2 M 2 2 L 2 28"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M2 12 Q 8 12, 8 18 Q 8 24, 14 24"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="4" cy="4" r="1.2" fill="currentColor" />
    </svg>
  )
}
