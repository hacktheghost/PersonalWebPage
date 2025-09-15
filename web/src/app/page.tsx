"use client";
import { motion } from 'framer-motion';
import { getSiteData } from '@/lib/data';
import TechBadges from '@/components/TechBadges';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import RotatingTitles from '@/components/RotatingTitles';
import ProfilePhoto from '@/components/ProfilePhoto';
import { useI18n } from '@/i18n/ClientI18nProvider';
import { useLocalizedSiteData } from '@/i18n/useSiteData';

export default function HomePage() {
  const data = getSiteData();
  const localized = useLocalizedSiteData();
  const { t, locale } = useI18n();
  const starNames = new Set([
    'Facilities Management System',
    'COFICAB HR Data Management',
    'IT Asset Inventory',
    'Sistema de Prevención de Colisiones',
    'Gestión de Inventarios Kanban y Seguimiento de Bobinas',
    'SQL Reporter',
  ]);
  const stars = localized.projects.portfolio.filter((p) => starNames.has(p.name));

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-16">
      <section className="mb-16 relative z-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <ProfilePhoto className="w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60" />
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-block rounded px-1 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 text-shadow-soft">{data.personal.fullName}</motion.h1>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-3">
              <RotatingTitles />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-5 max-w-3xl text-gray-800 dark:text-gray-200/90">
              {t('home.hero.intro')}
            </motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-6 flex gap-4">
          <button onClick={() => {
            const evt = new CustomEvent('open-contact-modal');
            window.dispatchEvent(evt);
          }} className="inline-flex items-center rounded-md bg-secondary/20 px-4 py-2 text-secondary hover:bg-secondary/30 transition">{t('home.cta.contact')}</button>
          <a href="/proyectos" className="inline-flex items-center rounded-md border border-secondary/40 px-4 py-2 hover:bg-secondary/10 transition">{t('home.cta.viewProjects')}</a>
        </motion.div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">{t('home.featured.title')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stars.map((p) => (
            <a key={p.name} href={`/proyectos/${encodeURIComponent(p.name)}`} className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-secondary/60 transition">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <img loading="lazy" src="/placeholder.webp" alt={t('projects.common.projectPreviewAlt')} className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-secondary transition">{locale === 'es' ? (p.name_es ?? p.name) : p.name}</h3>
                  <span className="text-xs text-gray-500">{p.role}</span>
                </div>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{p.businessLogic}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-200">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <TechBadges />
      <ExperienceTimeline />
    </main>
  );
}


