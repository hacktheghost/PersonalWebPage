"use client";
import { useI18n } from '@/i18n/ClientI18nProvider';
import type { SiteData } from '@/lib/data';

export function useLocalizedSiteData(): SiteData {
  const { messages } = useI18n();
  return messages.data as unknown as SiteData;
}


