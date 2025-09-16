"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type ProjectGalleryProps = {
  images: string[];
  altPrefix?: string;
  className?: string;
};

export default function ProjectGallery({ images, altPrefix = 'Imagen', className }: ProjectGalleryProps) {
  const gallery = useMemo(() => (images.length ? images : ['/placeholder.webp']), [images]);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const swipeRef = useRef<HTMLDivElement | null>(null);

  const openAt = useCallback((i: number) => { setIndex(i); setOpen(true); }, []);
  const close = useCallback(() => setOpen(false), []);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % gallery.length), [gallery.length]);
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length]);

  // Mount flag for safe portal usage
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, goNext, goPrev]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (!open) return;
    const { documentElement, body } = document;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  // Touch swipe handlers (simple)
  useEffect(() => {
    if (!open) return;
    const el = swipeRef.current ?? document.body;
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
      // evitar scroll vertical: solo si movimiento horizontal notable
      if (Math.abs(dx) > 40 && dy < 60) {
        if (dx < 0) goNext(); else goPrev();
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
  }, [open, goNext, goPrev]);

  return (
    <div className={className ?? ''}>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.map((src, i) => (
          <button key={src} onClick={() => openAt(i)} className="relative overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 aspect-video group">
            <img
              loading="lazy"
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.webp'; }}
              decoding="async"
            />
          </button>
        ))}
      </div>

      {mounted && createPortal(
        (
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="absolute inset-0" onClick={close} />

                <div ref={swipeRef} className="relative z-10 w-[96vw] max-w-5xl sm:w-[92vw]">
                  <div className="relative overflow-hidden rounded-lg bg-black/30">
                    <motion.img
                      key={gallery[index]}
                      src={gallery[index]}
                      alt={`${altPrefix} ampliada ${index + 1}`}
                      className="mx-auto max-h-[78vh] sm:max-h-[80vh] w-auto select-none"
                      initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                      decoding="async"
                    />
                  </div>

                  <div className="mt-3 flex flex-col items-center gap-2 text-white/90">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-xs sm:text-sm">{index + 1} / {gallery.length}</div>
                      <div className="flex gap-2">
                        <button aria-label="Anterior" onClick={goPrev} className="rounded-md bg-white/10 px-3 py-2 sm:py-1.5 hover:bg-white/20 transition">←</button>
                        <button aria-label="Siguiente" onClick={goNext} className="rounded-md bg-white/10 px-3 py-2 sm:py-1.5 hover:bg-white/20 transition">→</button>
                        <button aria-label="Cerrar" onClick={close} className="rounded-md bg-white/10 px-3 py-2 sm:py-1.5 hover:bg-white/20 transition">✕</button>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      {gallery.map((_, i) => (
                        <button
                          key={i}
                          aria-label={`Ir a imagen ${i + 1}`}
                          onClick={() => setIndex(i)}
                          className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ),
        document.body
      )}
    </div>
  );
}


