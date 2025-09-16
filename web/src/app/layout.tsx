import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import LocaleAnimatedShell from '@/i18n/LocaleAnimatedShell';
import RouteProgress from '@/components/RouteProgress';
import GlobalSpinner from '@/components/GlobalSpinner';
import ClientI18nProvider from '@/i18n/ClientI18nProvider';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Daniel Flores — IT Leader & Technology Manager',
  description:
    'Portafolio profesional de Daniel A. Flores (Senior IT Manager): proyectos en infraestructura y redes Cisco, nube (Azure), datos (SQL/Power BI), ERP (Sage X3, SAP), automatización industrial y visión por computador. Experiencia liderando equipos y transformaciones digitales en manufactura.',
  metadataBase: new URL('https://hacktheghost.github.io'),
  alternates: { canonical: 'https://hacktheghost.github.io/' },
  openGraph: {
    title: 'Daniel Flores — IT Leader & Technology Manager',
    description:
      'Portafolio profesional de Daniel A. Flores (Senior IT Manager): proyectos en infraestructura y redes Cisco, nube (Azure), datos (SQL/Power BI), ERP (Sage X3, SAP), automatización industrial y visión por computador. Experiencia liderando equipos y transformaciones digitales en manufactura.',
    url: 'https://hacktheghost.github.io/',
    siteName: 'Daniel Flores',
    images: [
      { url: '/whoami.jpg', width: 1200, height: 630, alt: 'Daniel Flores — IT Leader' },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Flores — IT Leader & Technology Manager',
    description:
      'Portafolio profesional de Daniel A. Flores (Senior IT Manager): proyectos en infraestructura y redes Cisco, nube (Azure), datos (SQL/Power BI), ERP (Sage X3, SAP), automatización industrial y visión por computador. Experiencia liderando equipos y transformaciones digitales en manufactura.',
    images: ['/whoami.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Client-only usage guarded by provider inside body
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {/* JSON-LD Organization/Person */}
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Daniel A. Flores',
            url: 'https://hacktheghost.github.io/',
            sameAs: [
              'https://www.linkedin.com/in/daniel-maynez-b143b4153',
              'https://github.com/hacktheghost',
            ],
            jobTitle: 'Senior IT Manager & Technology Leader',
            worksFor: { '@type': 'Organization', name: 'COFICAB Group' },
          })}
        </Script>
        <ClientI18nProvider>
          <LocaleAnimatedShell>
            <GlobalSpinner />
            <RouteProgress />
            <ParticlesBackground />
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-gradient-global-light dark:bg-gradient-global-dark" />
            <Header />
            {children}
            <Footer />
          </LocaleAnimatedShell>
        </ClientI18nProvider>
      </body>
    </html>
  );
}


