"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { getProjectGalleryByName } from '@/lib/projectImages';

type ProjectCoverProps = {
  name: string;
  alt: string;
  className?: string;
  intervalMs?: number;
};

export default function ProjectCover({ name, alt, className, intervalMs = 3500 }: ProjectCoverProps) {
  const reduceMotion = useReducedMotion();
  const gallery = useMemo(() => {
    const images = getProjectGalleryByName(name);
    return images.length ? images : ['/placeholder.webp'];
  }, [name]);

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const pausedRef = useRef(false);
  const touchRef = useRef<HTMLDivElement | null>(null);

  // Pre-carga de imágenes para evitar parpadeos por carga tardía
  useEffect(() => {
    gallery.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decoding = 'async';
    });
  }, [gallery]);

  // Rotación automática
  useEffect(() => {
    if (gallery.length <= 1) return; // no rotation needed
    if (reduceMotion) return; // respect prefers-reduced-motion
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % gallery.length);
      }
    }, intervalMs);
    return () => clearInterval(id);
  }, [gallery.length, intervalMs, reduceMotion]);

  const onMouseEnter = () => { pausedRef.current = true; };
  const onMouseLeave = () => { pausedRef.current = false; };

  const duration = reduceMotion ? 0 : 0.6;
  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Touch swipe simple para móviles
  useEffect(() => {
    const el = touchRef.current;
    if (!el) return;
    let startX = 0;
    let startY = 0;
    let isMoving = false;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      startX = t.clientX; startY = t.clientY; isMoving = true;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isMoving) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = Math.abs(t.clientY - startY);
      if (Math.abs(dx) > 40 && dy < 60) {
        setIndex((i) => (dx < 0 ? (i + 1) % gallery.length : (i - 1 + gallery.length) % gallery.length));
        isMoving = false;
      }
    };
    const onTouchEnd = () => { isMoving = false; };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart as any);
      el.removeEventListener('touchmove', onTouchMove as any);
      el.removeEventListener('touchend', onTouchEnd as any);
    };
  }, [gallery.length]);

  return (
    <div
      ref={touchRef}
      className={`relative aspect-video w-full bg-gray-100 dark:bg-gray-800 overflow-hidden ${className ?? ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Capa base (imagen previa) */}
      <img
        loading="lazy"
        src={gallery[prevIndex]}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.webp'; }}
        decoding="async"
      />

      {/* Capa superior (imagen actual con crossfade) */}
      <motion.img
        key={`${name}-${gallery[index]}`}
        loading="lazy"
        src={gallery[index]}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)] will-change-transform group-hover:scale-[1.03] transition-transform duration-500"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, ease: easing }}
        onAnimationComplete={() => setPrevIndex(index)}
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.webp'; }}
        decoding="async"
      />
    </div>
  );
}


