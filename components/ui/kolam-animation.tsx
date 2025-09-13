export function KolamAnimation({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="kolam-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" className="animate-pulse" />
            <path d="M10 10l20 20M30 10l-20 20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kolam-pattern)" />

        {/* Animated drawing lines */}
        <g className="animate-pulse">
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="200" cy="200" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
        </g>

        {/* Decorative dots */}
        <g className="animate-bounce">
          <circle cx="160" cy="160" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="240" cy="160" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="160" cy="240" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="240" cy="240" r="3" fill="currentColor" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}
