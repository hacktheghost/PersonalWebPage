"use client";
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/i18n/ClientI18nProvider';

export default function LocaleAnimatedShell({ children }: { children: ReactNode }) {
  const { locale } = useI18n();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(4px)' }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {children}
        <LanguageOverlay key={`overlay-${locale}`} />
      </motion.div>
    </AnimatePresence>
  );
}

function LanguageOverlay() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none fixed inset-0 z-10"
    />
  );
}


