"use client";
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/i18n/ClientI18nProvider';

export default function RotatingTitles() {
  const { list } = useI18n();
  const [index, setIndex] = useState(0);
  const TITLES = useMemo(() => list('home.hero.titles'), [list]);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % (TITLES.length || 1)), 2800);
    return () => clearInterval(id);
  }, [TITLES.length]);

  return (
    <div className="relative h-10 sm:h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center text-lg sm:text-2xl text-secondary font-semibold"
        >
          {TITLES[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


