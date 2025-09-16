"use client";
import SocialLinks from '@/components/SocialLinks';
import { useI18n } from '@/i18n/ClientI18nProvider';
import SmartLink from '@/components/SmartLink';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="rounded-lg border border-gray-200/60 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/40 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <svg viewBox="0 0 24 24" aria-hidden focusable={false} className="h-5 w-5 text-secondary">
                <path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.8 1.8-1.1.1-.7.4-1 .7-1.2-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.7-.1-.2-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.9-2.4 4.7-4.7 5 .4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>
              </svg>
              <div className="leading-tight">
                <p className="text-sm sm:text-base font-medium">{t('footer.cta.useRepo')}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Open Source • Next.js + React + Tailwind</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/hacktheghost/hacktheghost.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-secondary/40 px-3 py-1.5 text-sm hover:bg-secondary/10 transition"
              >
                <span>{t('footer.cta.useRepo')}</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2 text-sm">
            <span className="font-semibold">{t('brand.name')}</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <p className="text-gray-600 dark:text-gray-400">{t('footer.copy', { year: String(year) })}</p>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 text-sm">
              <SmartLink href="/proyectos" className="hover:text-secondary transition">{t('header.nav.projects')}</SmartLink>
              <SmartLink href="/quien-soy" className="hover:text-secondary transition">{t('header.nav.about')}</SmartLink>
              <button onClick={() => { const evt = new CustomEvent('open-contact-modal'); window.dispatchEvent(evt); }} className="text-sm text-secondary hover:underline">
                {t('header.actions.contact')}
              </button>
            </nav>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}



