import Image from 'next/image';

export default function ProfilePhoto({ src = '/profile.jpg', className = 'w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56', priority = false }: { src?: string; className?: string; priority?: boolean }) {
  const radius = 16; // px
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt="Foto de perfil de Daniel Maynez"
        fill
        sizes="(max-width: 640px) 7rem, (max-width: 1024px) 10rem, 15rem"
        priority={priority}
        className="object-cover shadow-sm"
        style={{ borderRadius: radius }}
      />
      <svg viewBox="0 0 224 224" className="pointer-events-none absolute inset-0 h-full w-full text-secondary/80">
        <defs>
          <linearGradient id="snakeGrad" x1="0" y1="0" x2="224" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="220" height="220" rx={radius} ry={radius} fill="none" stroke="url(#snakeGrad)" strokeWidth="4" className="snake-stroke" />
      </svg>
    </div>
  );
}


