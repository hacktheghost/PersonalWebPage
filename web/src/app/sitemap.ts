import type { MetadataRoute } from 'next';
import { getProjects } from '@/lib/data';
import { slugifyProjectName } from '@/lib/slug';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hacktheghost.github.io';
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/proyectos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/quien-soy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ];
  try {
    const projs = getProjects();
    for (const p of projs) {
      routes.push({
        url: `${base}/proyectos/${slugifyProjectName(p.name)}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
      });
    }
  } catch {}
  return routes;
}


