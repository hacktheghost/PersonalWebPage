import ProjectsClient from './ProjectsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos — Portafolio de Daniel A. Flores',
  description: 'Explora proyectos destacados: Next.js, React, SQL, automatización y visión por computador. Casos reales en manufactura y herramientas internas.',
  alternates: { canonical: 'https://hacktheghost.github.io/proyectos' },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}


