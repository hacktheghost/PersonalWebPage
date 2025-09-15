"use client";
import { getSiteData } from '@/lib/data';
import { useI18n } from '@/i18n/ClientI18nProvider';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.84v1.98h.06c.53-1.01 1.82-2.08 3.75-2.08 4.01 0 4.75 2.64 4.75 6.07V23h-4v-5.91c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z"/>
    </svg>
  );
}

function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>
  );
}

function IconCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"/>
    </svg>
  );
}

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const data = getSiteData();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open || !mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 overscroll-contain" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl border border-gray-200 bg-white p-0 shadow-2xl dark:border-gray-800 dark:bg-gray-950 animate-modal-up">
        <div className="relative rounded-t-2xl bg-gradient-to-r from-secondary/30 via-transparent to-secondary/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconMail className="h-5 w-5 text-secondary" />
              <h3 id="contact-title" className="text-base font-semibold">{t('contactModal.title')}</h3>
            </div>
            <button onClick={onClose} aria-label={t('header.actions.closeAria')} className="rounded p-2 hover:bg-secondary/10">✕</button>
          </div>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1">
            <IconMapPin className="h-4 w-4" /> {data.personal.location}
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:gap-4 text-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconMail className="h-4 w-4 text-secondary" />
                <span className="text-gray-600 dark:text-gray-300">{t('contactModal.labels.email')}</span>
              </div>
              <div className="flex items-center gap-2">
                <a className="truncate max-w-[60vw] sm:max-w-none text-secondary hover:underline" href={`mailto:${data.personal.contact.email}`}>{data.personal.contact.email}</a>
                <button
                  aria-label={t('contactModal.actions.copyEmailAria')}
                  onClick={async () => { try { await navigator.clipboard.writeText(data.personal.contact.email); setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 1200); } catch {} }}
                  className="rounded p-1 hover:bg-secondary/10"
                >
                  {copiedEmail ? <IconCheck className="h-4 w-4 text-secondary" /> : <IconCopy className="h-4 w-4 text-gray-500" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconPhone className="h-4 w-4 text-secondary" />
                <span className="text-gray-600 dark:text-gray-300">{t('contactModal.labels.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <a className="truncate max-w-[60vw] sm:max-w-none text-secondary hover:underline" href={`tel:${data.personal.contact.phone}`}>{data.personal.contact.phone}</a>
                <button
                  aria-label={t('contactModal.actions.copyPhoneAria')}
                  onClick={async () => { try { await navigator.clipboard.writeText(data.personal.contact.phone); setCopiedPhone(true); setTimeout(() => setCopiedPhone(false), 1200); } catch {} }}
                  className="rounded p-1 hover:bg-secondary/10"
                >
                  {copiedPhone ? <IconCheck className="h-4 w-4 text-secondary" /> : <IconCopy className="h-4 w-4 text-gray-500" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconLinkedIn className="h-4 w-4 text-secondary" />
                <span className="text-gray-600 dark:text-gray-300">{t('contactModal.labels.linkedin')}</span>
              </div>
              <a className="text-secondary hover:underline" href={`https://${data.personal.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{t('contactModal.actions.viewProfile')}</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
            <button onClick={onClose} className="rounded-md bg-secondary/20 px-4 py-2 text-secondary hover:bg-secondary/30">{t('contactModal.close')}</button>
            <a href={`mailto:${data.personal.contact.email}`} className="rounded-md border border-secondary/40 px-4 py-2 hover:bg-secondary/10">{t('contactModal.actions.sendEmail')}</a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}


