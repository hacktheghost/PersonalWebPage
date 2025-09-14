import { getProjects } from '@/lib/data';

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Proyectos</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Listado completo con vista rápida.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.name} href={`/proyectos/${encodeURIComponent(p.name)}`} className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-secondary/60 transition">
            <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="/placeholder-project.jpg" alt="Preview del proyecto" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold group-hover:text-secondary transition">{p.name_es ?? p.name}</h2>
                <span className="text-xs text-gray-500">{p.role}</span>
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{p.businessLogic}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.technologies.slice(0, 5).map((t: string) => (
                  <span key={t} className="rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-200">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}


