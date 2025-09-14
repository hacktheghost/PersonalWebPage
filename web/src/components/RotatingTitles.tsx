"use client";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TITLES = [
  'Senior IT Manager & Technology Leader',
  'Infraestructura resiliente — Cisco, Nutanix, VMware',
  'Cloud & Data — Azure, SQL, Power BI, Grafana',
  'ERP & Integración — Sage X3, SAP, Infor LN',
  'Sistemas MES Personalizados — Integración OT/IT',
  'Seguridad & OT — Fortinet NSE4, CCTV, Control de Accesos',
  'Transformación Digital en Manufactura',
];

export default function RotatingTitles() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TITLES.length), 2800);
    return () => clearInterval(id);
  }, []);

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


