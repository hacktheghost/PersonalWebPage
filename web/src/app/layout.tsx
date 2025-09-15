import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import ClientI18nProvider from '@/i18n/ClientI18nProvider';

export const metadata: Metadata = {
  title: 'Daniel A. Flores — Senior IT Manager & Technology Leader',
  description: 'Portafolio profesional: manufactura, nube, datos, ERP, seguridad y automatización.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ClientI18nProvider>
          <ParticlesBackground />
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-gradient-global-light dark:bg-gradient-global-dark" />
          <Header />
          {children}
          <Footer />
        </ClientI18nProvider>
      </body>
    </html>
  );
}


