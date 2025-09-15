"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from '@/messages/es.json';
import en from '@/messages/en.json';

export type Locale = 'es' | 'en';
type Messages = typeof es;

const MESSAGES: Record<Locale, Messages> = { es, en } as const;

function getByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  list: (key: string) => string[];
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export default function ClientI18nProvider({ children, initialLocale = 'es' as Locale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', loc);
      document.documentElement.setAttribute('lang', loc);
      document.cookie = `locale=${loc}; path=/; max-age=${60 * 60 * 24 * 365}`;
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { locale: loc } }));
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', locale);
    }
  }, [locale]);

  const messages = useMemo(() => MESSAGES[locale], [locale]);

  const t = useCallback((key: string, vars?: Record<string, string | number>) => {
    const raw = getByPath(messages, key);
    let str = typeof raw === 'string' ? raw : key;
    if (vars && typeof str === 'string') {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return str;
  }, [messages]);

  const list = useCallback((key: string) => {
    const val = getByPath(messages, key);
    return Array.isArray(val) ? val as string[] : [];
  }, [messages]);

  const value = useMemo(() => ({ locale, setLocale, t, list, messages }), [locale, setLocale, t, list, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}


