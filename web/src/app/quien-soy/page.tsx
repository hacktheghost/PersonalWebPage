import type { Metadata } from 'next';
import { getSiteData } from '@/lib/data';

export const metadata: Metadata = {
  title: '¿Quién soy? — Daniel A. Flores',
  description: 'Historia profesional, educación, filosofía y enfoque de Daniel A. Flores.',
};

export default function AboutPage() {
  const data = getSiteData();
  const { personal, professionalSummary, education, coreCompetencies, certifications, languagesAndAdditional } = data;

  const competencies = Object.entries(coreCompetencies) as [string, string[]][];

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <header>
        <h1 className="text-3xl sm:text-4xl font-semibold">¿Quién soy?</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{personal.fullName} — {personal.title}</p>
        <p className="text-sm text-gray-500">{personal.location}</p>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Sobre mí</h2>
        <p className="text-gray-700 dark:text-gray-200">{professionalSummary}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Educación</h2>
        <ul className="mt-3 space-y-2">
          {education.map((e) => (
            <li key={e.degree} className="rounded border border-gray-200 p-3 dark:border-gray-800">
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{e.institution}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">Filosofía y enfoque</h2>
        {languagesAndAdditional.leadershipPhilosophy && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filosofía de liderazgo</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-200">{languagesAndAdditional.leadershipPhilosophy}</p>
          </div>
        )}
        {languagesAndAdditional.professionalFocus && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Enfoque profesional</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-200">{languagesAndAdditional.professionalFocus}</p>
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Competencias clave</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {competencies.map(([group, items]) => (
            <div key={group} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{group}</h3>
              <ul className="mt-2 list-disc pl-5 marker:text-secondary">
                {items.map((t) => (
                  <li key={t} className="text-sm text-gray-700 dark:text-gray-200">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Certificaciones</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="rounded border border-gray-200 p-3 dark:border-gray-800">
              <p className="font-medium">{c.name}</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">{c.issuer} • {c.date}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Idiomas</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {languagesAndAdditional.languages.map((l) => (
            <li key={l.language} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              {l.language} — {l.proficiency}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}



