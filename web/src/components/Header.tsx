"use client";
import SocialLinks from '@/components/SocialLinks';
import ContactModal from '@/components/ContactModal';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getSiteData } from '@/lib/data';
import { useI18n } from '@/i18n/ClientI18nProvider';

function IconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
    </svg>
  );
}

function IconGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
    </svg>
  );
}

function IconHome2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14z"/>
    </svg>
  );
}

function IconDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
    </svg>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.29-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.3 1.41-1.41-6.3-6.3 6.3-6.29z"/>
    </svg>
  );
}

function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v-2h-3v2h3zm-2.93-6.36l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM12 6a6 6 0 100 12A6 6 0 0012 6zm6.24 13.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM4.84 17.24l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79z"/>
    </svg>
  );
}

function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M20 15.31A8.12 8.12 0 0112.69 3 8 8 0 1012 21a8 8 0 008-5.69z"/>
    </svg>
  );
}

function FlagES() { return <span className="fi fi-mx" aria-hidden />; }
function FlagEN() { return <span className="fi fi-us" aria-hidden />; }

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const data = getSiteData();
  const cvUrl = (data as any)?.personal?.cvUrl || '/cv.pdf';
  const { t, locale, setLocale } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Inicializar tema de forma consistente tras montar para evitar hydration mismatch
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const initial = saved ? saved === 'dark' : prefersDark;
    setDark(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // Notificar a listeners (p.ej., partículas) que el tema cambió
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { dark } }));
    }
  }, [dark]);

  // Abrir modal desde eventos globales (p.ej., botón de la Home)
  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener('open-contact-modal', handler as EventListener);
    return () => window.removeEventListener('open-contact-modal', handler as EventListener);
  }, []);

  return (
    <header className={`sticky top-0 z-20 border-b border-transparent backdrop-blur transition-colors ${scrolled ? 'bg-white/70 dark:bg-gray-950/70 border-gray-200/60 dark:border-gray-800/60' : 'bg-transparent'}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-2 px-4 py-3">
        <a href="/" className="col-span-5 sm:col-span-3 inline-flex items-center gap-2 rounded-md px-2 py-1 text-base font-bold tracking-wide text-gray-900 ring-1 ring-gray-200/60 backdrop-blur-sm bg-white/70 dark:text-gray-100 dark:ring-gray-800/60 dark:bg-gray-900/50">
          <IconHome className="h-5 w-5 text-secondary" />
          <span>{t('brand.name')}</span>
        </a>

        <nav className="col-span-4 hidden md:flex items-center justify-center gap-6 text-sm">
          <a href="/" className={`group inline-flex items-center gap-2 relative transition-colors ${pathname === '/' ? 'text-secondary' : 'hover:text-secondary'}`}>
            <IconHome className="h-4 w-4" />
            <span>{t('header.mobile.home')}</span>
            <span aria-hidden className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-secondary transition-transform duration-300 ${pathname === '/' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
          </a>
          <a href="/proyectos" className={`group inline-flex items-center gap-2 relative transition-colors ${pathname?.startsWith('/proyectos') ? 'text-secondary' : 'hover:text-secondary'}`}>
            <IconGrid className="h-4 w-4" />
            <span>{t('header.nav.projects')}</span>
            <span aria-hidden className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-secondary transition-transform duration-300 ${pathname?.startsWith('/proyectos') ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
          </a>
          <a href="/quien-soy" className={`group inline-flex items-center gap-2 relative transition-colors ${pathname === '/quien-soy' ? 'text-secondary' : 'hover:text-secondary'}`}>
            <IconUser className="h-4 w-4" />
            <span>{t('header.nav.about')}</span>
            <span aria-hidden className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-secondary transition-transform duration-300 ${pathname === '/quien-soy' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
          </a>
        </nav>

        <div className="col-span-7 sm:col-span-5 md:col-span-5 ml-auto flex items-center justify-end gap-2 sm:gap-3">
          <div className="relative hidden sm:flex items-center gap-1 ml-1 rounded-md border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/40 px-1 py-0.5">
            <span className="pointer-events-none absolute inset-y-0 left-0 my-0.5 h-[calc(100%-4px)] w-1/2 rounded bg-secondary/15 transition-transform duration-200 ease-out"
              style={{ transform: `translateX(${locale === 'en' ? '100%' : '0'})` }}
            />
            <button className={`relative inline-flex items-center gap-1 rounded px-2 py-1 transition-colors ${locale === 'es' ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setLocale('es')} aria-label="Español" title="Español">
              <FlagES />
              <span className="text-xs">ES</span>
            </button>
            <button className={`relative inline-flex items-center gap-1 rounded px-2 py-1 transition-colors ${locale === 'en' ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setLocale('en')} aria-label="English" title="English">
              <FlagEN />
              <span className="text-xs">EN</span>
            </button>
          </div>

          <button aria-label={t('header.actions.toggleThemeAria')} onClick={() => setDark((v) => !v)} className="rounded p-2 text-gray-700 hover:text-secondary dark:text-gray-200">
            {mounted ? (dark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />) : <span className="block h-4 w-4" />}
          </button>

          <a href={cvUrl} download className="hidden md:inline-flex items-center gap-2 rounded-md border border-secondary/40 px-3 py-1.5 text-sm hover:bg-secondary/10 transition" title={t('header.actions.downloadCV')}>
            <IconDownload className="h-4 w-4" />
            <span>{t('header.actions.downloadCV')}</span>
          </a>

          <button onClick={() => setContactOpen(true)} className="hidden sm:inline-flex items-center rounded-md bg-secondary/20 px-3 py-1.5 text-sm text-secondary hover:bg-secondary/30 transition">{t('header.actions.contact')}</button>

          <button className="inline-flex items-center justify-center rounded p-2 md:hidden hover:bg-secondary/10" aria-label={t('header.actions.openMenuAria')} onClick={() => setOpen(true)}>
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm sm:hidden" onClick={() => setOpen(false)}>
          <div className="relative z-[101] ml-auto h-full w-72 max-w-[85%] bg-white p-4 dark:bg-gray-950 animate-drawer-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{t('header.mobile.menu')}</span>
              <button aria-label={t('header.actions.closeAria')} onClick={() => setOpen(false)} className="rounded p-2 hover:bg-secondary/10">
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 grid gap-2 text-base">
              <a href="/" className="group inline-flex items-center gap-3 rounded-md px-2 py-2 hover:bg-secondary/10 animate-item-in" onClick={() => setOpen(false)}>
                <IconHome2 className="h-5 w-5 text-gray-500 group-hover:text-secondary" />
                <span>{t('header.mobile.home')}</span>
              </a>
              <a href="/proyectos" className="group inline-flex items-center gap-3 rounded-md px-2 py-2 hover:bg-secondary/10 animate-item-in" onClick={() => setOpen(false)}>
                <IconGrid className="h-5 w-5 text-gray-500 group-hover:text-secondary" />
                <span>{t('header.nav.projects')}</span>
              </a>
              <a href="/quien-soy" className="group inline-flex items-center gap-3 rounded-md px-2 py-2 hover:bg-secondary/10 animate-item-in" onClick={() => setOpen(false)}>
                <IconUser className="h-5 w-5 text-gray-500 group-hover:text-secondary" />
                <span>{t('header.nav.about')}</span>
              </a>
              <a href={cvUrl} download className="group inline-flex items-center gap-3 rounded-md px-2 py-2 hover:bg-secondary/10 animate-item-in" onClick={() => setOpen(false)}>
                <IconDownload className="h-5 w-5 text-gray-500 group-hover:text-secondary" />
                <span>{t('header.actions.downloadCV')}</span>
              </a>
              <button className="group inline-flex items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-secondary/10 animate-item-in" onClick={() => { setContactOpen(true); setOpen(false); }}>
                <IconMail className="h-5 w-5 text-gray-500 group-hover:text-secondary" />
                <span>{t('header.actions.contact')}</span>
              </button>
              <details className="group relative">
                <summary className="flex items-center gap-2 rounded-md border border-gray-200/60 dark:border-gray-800/60 px-2 py-1 cursor-pointer select-none">
                  <span className={`fi ${locale === 'es' ? 'fi-mx' : 'fi-us'}`} aria-hidden />
                  <span className="text-sm">{locale === 'es' ? 'Español' : 'English'}</span>
                </summary>
                <div className="absolute left-0 mt-2 w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <button onClick={() => { setLocale('es'); setOpen(false); }} className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-secondary/10">
                    <span className="fi fi-mx" aria-hidden />
                    <span>Español</span>
                  </button>
                  <button onClick={() => { setLocale('en'); setOpen(false); }} className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-secondary/10">
                    <span className="fi fi-us" aria-hidden />
                    <span>English</span>
                  </button>
                </div>
              </details>
            </nav>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>,
        document.body
      )}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}


