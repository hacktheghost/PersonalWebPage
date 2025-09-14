import siteData from '../../data.json';

export type SiteData = typeof siteData;

export function getSiteData(): SiteData {
  return siteData;
}

export function getProjects() {
  return siteData.projects.portfolio;
}

export function getStarProjects() {
  const starNames = new Set([
    'Facilities Management System',
    'COFICAB HR Data Management',
    'IT Asset Inventory',
    'Sistema de Prevención de Colisiones',
    'Gestión de Inventarios Kanban y Seguimiento de Bobinas',
    'SQL Reporter',
  ]);
  return siteData.projects.portfolio.filter((p) => starNames.has(p.name));
}


