"use client";
import { useI18n } from '@/i18n/ClientI18nProvider';
import { useLocalizedSiteData } from '@/i18n/useSiteData';

export default function ExperienceTimeline() {
  const { t } = useI18n();
  const data = useLocalizedSiteData();
  const exp = data.experience;
  return (
    <section className="mt-12">
      <h2 className="text-xl sm:text-2xl font-semibold">{t('experience.title')}</h2>
      <ol className="mt-6 relative border-l border-gray-200 dark:border-gray-800">
        {exp.map((e) => (
          <li key={e.company + e.period} className="mb-8 ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-secondary" />
            <h3 className="text-base font-semibold">{e.role} — {e.company}</h3>
            <p className="text-xs text-gray-500">{e.period} · {e.location}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{e.responsibilities}</p>
            {Array.isArray((e as any).keyAchievements) && (e as any).keyAchievements.length ? (
              <ul className="mt-2 list-disc pl-5 marker:text-secondary">
                {(e as any).keyAchievements.map((a: string) => (
                  <li key={a} className="text-sm text-gray-700 dark:text-gray-300">{a}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}



