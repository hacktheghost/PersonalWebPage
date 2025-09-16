import { slugifyProjectName } from '@/lib/slug';

// Mapa estático basado en los archivos presentes en public/proyectspictures
const projectImagesMap: Record<string, string[]> = {
  'budget-control': [
    '/proyectspictures/budget-control/budget1.png',
    '/proyectspictures/budget-control/budget2.png',
    '/proyectspictures/budget-control/budget3.png',
    '/proyectspictures/budget-control/budget4.png',
  ],
  'cisco-switch-analyzer': [
    '/proyectspictures/cisco-switch-analyzer/network1.png',
  ],
  'coficab-hr-data-management': [
    '/proyectspictures/coficab-hr-data-management/hrdata1.png',
    '/proyectspictures/coficab-hr-data-management/hrdata2.png',
    '/proyectspictures/coficab-hr-data-management/hrdata3.png',
    '/proyectspictures/coficab-hr-data-management/hrdata4.png',
    '/proyectspictures/coficab-hr-data-management/hrdata5.png',
    '/proyectspictures/coficab-hr-data-management/hrdata6.png',
  ],
  'electrical-monitoring': [
    '/proyectspictures/electrical-monitoring/elemon1.png',
    '/proyectspictures/electrical-monitoring/elemon2.png',
  ],
  'facilities-management-system': [
    '/proyectspictures/facilities-management-system/facilities1.png',
    '/proyectspictures/facilities-management-system/facilities2.png',
    '/proyectspictures/facilities-management-system/facilities3.png',
    '/proyectspictures/facilities-management-system/facilities4.png',
    '/proyectspictures/facilities-management-system/facilities5.png',
    '/proyectspictures/facilities-management-system/facilities6.png',
    '/proyectspictures/facilities-management-system/facilities7.png',
    '/proyectspictures/facilities-management-system/facilities8.png',
  ],
  'gestion-de-inventarios-kanban-y-seguimiento-de-bobinas': [
    '/proyectspictures/gestion-de-inventarios-kanban-y-seguimiento-de-bobinas/ia1.jpg',
    '/proyectspictures/gestion-de-inventarios-kanban-y-seguimiento-de-bobinas/ia2.jpg',
    '/proyectspictures/gestion-de-inventarios-kanban-y-seguimiento-de-bobinas/ia3.jpg',
  ],
  'it-asset-inventory': [
    '/proyectspictures/it-asset-inventory/itinventory1.png',
    '/proyectspictures/it-asset-inventory/itinventory2.png',
    '/proyectspictures/it-asset-inventory/itinventory3.png',
    '/proyectspictures/it-asset-inventory/itinventory4.png',
    '/proyectspictures/it-asset-inventory/itinventory5.png',
  ],
  'resourcechecker': [
    '/proyectspictures/resourcechecker/resource1.png',
  ],
  'sistema-de-prevencion-de-colisiones': [
    '/proyectspictures/sistema-de-prevencion-de-colisiones/colission1.jpg',
    '/proyectspictures/sistema-de-prevencion-de-colisiones/colission2.jpg',
  ],
  'sql-reporter': [
    '/proyectspictures/sql-reporter/sql1.png',
    '/proyectspictures/sql-reporter/sql2.png',
  ],
  'web-dependency-analyzer': [
    // (sin imágenes listadas actualmente)
  ],
};

export function getProjectGalleryBySlug(slug: string): string[] {
  return projectImagesMap[slug] ?? [];
}

export function getProjectGalleryByName(name: string): string[] {
  const slug = slugifyProjectName(name);
  return getProjectGalleryBySlug(slug);
}

export function getProjectCoverBySlug(slug: string): string {
  const images = getProjectGalleryBySlug(slug);
  return images[0] ?? '/placeholder.webp';
}

export function getProjectCoverByName(name: string): string {
  const slug = slugifyProjectName(name);
  return getProjectCoverBySlug(slug);
}


