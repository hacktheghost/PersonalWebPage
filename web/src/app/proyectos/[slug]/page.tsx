import { getProjects } from '@/lib/data';
import { slugifyProjectName } from '@/lib/slug';
import { getProjectCoverByName, getProjectGalleryByName } from '@/lib/projectImages';
import ProjectCover from '@/components/ProjectCover';
import ProjectGallery from '@/components/ProjectGallery';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: slugifyProjectName(p.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((p) => slugifyProjectName(p.name) === slug);
  return {
    title: project ? `${project.name_es ?? project.name} — Proyecto` : 'Proyecto',
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjects().find((p) => slugifyProjectName(p.name) === slug);
  if (!project) return <main className="mx-auto max-w-3xl px-4 py-16">No encontrado</main>;

  const gallery = getProjectGalleryByName(project.name);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <ProjectCover name={project.name} alt="Imagen del proyecto" />
      </div>

      {gallery.length > 1 ? (
        <ProjectGallery images={gallery} altPrefix="Galería del proyecto" className="mt-4" />
      ) : null}
      <h1 className="mt-6 text-3xl font-semibold">{project.name_es ?? project.name}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{project.role}</p>
      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Contexto</h2>
        <p className="text-gray-700 dark:text-gray-200">{project.businessLogic}</p>
      </section>
      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Arquitectura</h2>
        <p className="text-gray-700 dark:text-gray-200">{project.architecture}</p>
      </section>
      {project.achievements?.length ? (
        <section className="mt-6 space-y-2">
          <h2 className="text-xl font-semibold">Resultados</h2>
          <ul className="list-disc pl-5 marker:text-secondary">
            {project.achievements.map((a: string) => (
              <li key={a} className="text-gray-700 dark:text-gray-200">{a}</li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Tecnologías</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((t: string) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
      </section>
    </main>
  );
}


