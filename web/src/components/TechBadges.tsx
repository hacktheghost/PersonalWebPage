import { getSiteData } from '@/lib/data';
import type React from 'react';

function IconCloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M19 18H7a4 4 0 01-.8-7.93A6 6 0 1119 18z" />
    </svg>
  );
}

function IconNetwork(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6.5a4.5 4.5 0 014.5 4.5H22v2h-5.5a4.5 4.5 0 01-9 0H2v-2h5.5A4.5 4.5 0 0112 9.5zm0 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
    </svg>
  );
}

function IconERP(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M3 3h18v6H3V3zm0 8h8v10H3V11zm10 0h8v10h-8V11z" />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 2l7 3v6c0 5-3.4 9.7-7 11-3.6-1.3-7-6-7-11V5l7-3z" />
    </svg>
  );
}

export default function TechBadges() {
  const data = getSiteData();
  const cc = data.coreCompetencies;

  const groups: Array<{ key: keyof typeof cc; title: string; Icon: (p: any) => React.ReactElement }> = [
    { key: 'Infrastructure & Networking', title: 'Redes e Infraestructura', Icon: IconNetwork },
    { key: 'Cloud & Data Analytics', title: 'Nube y Analítica', Icon: IconCloud },
    { key: 'Enterprise Systems & ERP', title: 'Sistemas Empresariales & ERP', Icon: IconERP },
    { key: 'Security & Industrial Automation', title: 'Seguridad & Automatización', Icon: IconShield },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-xl sm:text-2xl font-semibold">Capacidades y Tecnologías (IT Management)</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {groups.map(({ key, title, Icon }) => {
          const items = (cc as any)[key] as string[] | undefined;
          if (!items || !items.length) return null;
          let displayItems = items;
          if (key === 'Enterprise Systems & ERP') {
            const extras = ['Infor LN', 'Sistemas MES Personalizados'];
            displayItems = Array.from(new Set([...(items as string[]), ...extras]));
          }
          return (
            <div key={key as string} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-secondary" />
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {displayItems.map((t) => (
                  <span key={t} className="rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-200">{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


