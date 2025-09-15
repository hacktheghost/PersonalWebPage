"use client";
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);
  const [key, setKey] = useState(0);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(mq.matches || document.documentElement.classList.contains('dark'));
    update();
    mq.addEventListener?.('change', update);
    const onThemeChange = () => { update(); setKey((k) => k + 1); };
    const onLanguageChange = () => { setKey((k) => k + 1); };
    window.addEventListener('themechange', onThemeChange);
    window.addEventListener('languagechange', onLanguageChange as EventListener);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  // Máxima visibilidad: en claro color muy oscuro; en oscuro cian suave
  const particleColor = isDark ? '#89c9d1' : '#0f172a';
  const linkColor = particleColor;

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    fpsLimit: 60,
    detectRetina: true,
    background: { color: { value: 'transparent' } },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    particles: {
      number: { value: reduceMotion ? 24 : (isDark ? 100 : 120), density: { enable: true, area: 900 } },
      color: { value: particleColor },
      opacity: { value: isDark ? 0.22 : 0.65 },
      size: { value: isDark ? 2.4 : 3.2 },
      links: { enable: true, color: linkColor, opacity: isDark ? 0.2 : 0.6, distance: 140, width: 1.3 },
      move: { enable: !reduceMotion, speed: reduceMotion ? 0 : 1.1, outModes: { default: 'out' } },
    },
    interactivity: {
      events: {
        onHover: { enable: !reduceMotion, mode: 'grab' },
        onClick: { enable: false, mode: 'push' },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.25 } },
        repulse: { distance: 200 },
      },
    },
  }), [reduceMotion, isDark]);

  useEffect(() => {
    // no-op, placeholder for future dynamic controls
  }, []);

  if (!engineReady) return null;
  return (
    <Particles
      id="tsparticles"
      key={key}
      options={options}
      className="pointer-events-none"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  );
}


