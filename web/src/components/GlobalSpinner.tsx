"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function GlobalSpinner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // show briefly on first mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const first = setTimeout(() => setVisible(false), 250);
    return () => clearTimeout(first);
  }, []);

  useEffect(() => {
    // show on route change
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onLang = () => { setVisible(true); setTimeout(() => setVisible(false), 300); };
    window.addEventListener('languagechange', onLang as EventListener);
    return () => window.removeEventListener('languagechange', onLang as EventListener);
  }, []);

  useEffect(() => {
    const onNavStart = () => { setVisible(true); };
    const onNavEnd = () => { setVisible(false); };
    window.addEventListener('navstart', onNavStart as EventListener);
    window.addEventListener('popstate', onNavStart as EventListener);
    // heurística de fin
    const onLoad = () => onNavEnd();
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('navstart', onNavStart as EventListener);
      window.removeEventListener('popstate', onNavStart as EventListener);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (!mounted || !visible) return null;
  return createPortal(
    <div className="fixed inset-0 z-[1100] grid place-items-center bg-white/70 dark:bg-gray-950/70 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-secondary/30" />
        <div className="absolute inset-0 rounded-full border-2 border-secondary border-t-transparent animate-spin" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="select-none text-sm font-extrabold tracking-wider text-secondary">DM</span>
        </div>
      </div>
    </div>,
    document.body
  );
}


