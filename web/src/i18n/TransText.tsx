"use client";
import { useI18n } from '@/i18n/ClientI18nProvider';
import { AnimatePresence, motion } from 'framer-motion';

export default function TransText({ k, className = '' }: { k: string; className?: string }) {
  const { t, locale } = useI18n();
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={locale + k}
        initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className={`inline-block ${className}`}
      >
        {t(k)}
      </motion.span>
    </AnimatePresence>
  );
}


