import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {year} Daniel A. Flores — Disponible para proyectos y consultoría.</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}



