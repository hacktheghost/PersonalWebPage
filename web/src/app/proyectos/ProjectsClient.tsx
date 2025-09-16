"use client";
import { useI18n } from '@/i18n/ClientI18nProvider';
import { useLocalizedSiteData } from '@/i18n/useSiteData';
import TransText from '@/i18n/TransText';
import SmartLink from '@/components/SmartLink';
import { slugifyProjectName } from '@/lib/slug';
import ProjectCover from '@/components/ProjectCover';
import TechPill from '@/components/TechPill';

export default function ProjectsClient() {
  const { t, locale } = useI18n();
  const data = useLocalizedSiteData();
  const projects = data.projects.portfolio;
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold"><TransText k="projects.list.title" /></h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300"><TransText k="projects.list.subtitle" /></p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <SmartLink key={p.name} href={`/proyectos/${slugifyProjectName(p.name)}`} className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-secondary/60 transition">
            <ProjectCover name={p.name} alt={t('projects.common.projectPreviewAlt')} />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold group-hover:text-secondary transition">{locale === 'es' ? (p.name_es ?? p.name) : p.name}</h2>
                <span className="text-xs text-gray-500">{p.role}</span>
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{p.businessLogic}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.technologies.slice(0, 5).map((t: string) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </SmartLink>
        ))}
      </div>
    </main>
  );
}


