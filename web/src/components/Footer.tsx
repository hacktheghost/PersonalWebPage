"use client";
import SocialLinks from '@/components/SocialLinks';
import { useI18n } from '@/i18n/ClientI18nProvider';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">{t('footer.copy', { year: String(year) })}</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}



