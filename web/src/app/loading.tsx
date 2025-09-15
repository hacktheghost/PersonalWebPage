"use client";
import { motion } from 'framer-motion';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center gap-3"
        role="status"
        aria-label="Cargando"
      >
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-secondary/30" />
          <div className="absolute inset-0 rounded-full border-2 border-secondary border-t-transparent animate-spin" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="select-none text-sm font-extrabold tracking-wider text-secondary">DM</span>
          </div>
        </div>
        <motion.div
          className="text-xs font-medium text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: 0.05 }}
        >
          Cargando…
        </motion.div>
      </motion.div>
    </div>
  );
}


