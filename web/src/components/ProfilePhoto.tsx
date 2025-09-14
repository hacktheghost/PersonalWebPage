export default function ProfilePhoto({ src = '/profile.jpg', className = 'w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56' }: { src?: string; className?: string }) {
  const radius = 16; // px
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 224 224" className="absolute inset-0 h-full w-full">
        <defs>
          <clipPath id="photoClip">
            <rect x="0" y="0" width="224" height="224" rx={radius} ry={radius} />
          </clipPath>
          <linearGradient id="snakeGrad" x1="0" y1="0" x2="224" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6aadb6" />
            <stop offset="20%" stopColor="#22c55e" />
            <stop offset="40%" stopColor="#3b82f6" />
            <stop offset="60%" stopColor="#8b5cf6" />
            <stop offset="80%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
        </defs>
        <image href={src} x="0" y="0" width="224" height="224" clipPath="url(#photoClip)" preserveAspectRatio="xMidYMid slice" />
        <rect x="2" y="2" width="220" height="220" rx={radius} ry={radius} fill="none" stroke="url(#snakeGrad)" strokeWidth="5" className="snake-stroke" />
      </svg>
    </div>
  );
}


