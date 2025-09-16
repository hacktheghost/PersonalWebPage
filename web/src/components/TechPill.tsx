import React from 'react';

type TechPillProps = {
  label: string;
};

type Style = {
  bg: string;
  text: string;
  ring?: string;
};

function Icon({ name, className }: { name: string; className?: string }) {
  const base = className ?? 'h-3.5 w-3.5';
  const lc = name.toLowerCase();
  if (lc.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8c2.1 0 4.8.7 7.3 2 2.9 1.5 4.7 3.5 4.7 5.5s-1.8 4-4.7 5.5c-2.5 1.3-5.2 2-7.3 2s-4.8-.7-7.3-2C1.8 14 0 12 0 10s1.8-4 4.7-5.5C7.2 3.2 9.9 2.5 12 2.5m0 1.5c-1.9 0-4.3.6-6.6 1.8C2.9 7 1.5 8.6 1.5 10s1.4 3 3.9 4.2c2.3 1.2 4.7 1.8 6.6 1.8s4.3-.6 6.6-1.8c2.5-1.2 3.9-2.8 3.9-4.2s-1.4-3-3.9-4.2C16.3 4.6 13.9 4 12 4z"/></svg>
    );
  }
  if (lc.includes('next')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2m4.8 14.9L9.1 7.2h1.7l5.8 8.3zM7 7.2h1.5v9.6H7z"/></svg>
    );
  }
  if (lc.includes('typescript') || lc.includes('(ts)')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M3 3h18v18H3zM7 8h10v2h-4v8h-2v-8H7z"/></svg>
    );
  }
  if (lc.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 6c-4 0-5 3-6 4 1-1 2-2 4-2 2 0 3 1 4 2 1 1 2 2 4 2 2 0 3-1 4-2-1 1-2 2-4 2-2 0-3-1-4-2-1-1-2-2-4-2-2 0-3 1-4 2 1-2 2-4 6-4z"/></svg>
    );
  }
  if (lc.includes('prisma')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12.9 2.3 4.3 16.6c-.7 1.2.1 2.7 1.5 2.9l11.2 2c1.6.3 3-1.2 2.5-2.8L15 4.2c-.3-1-1.6-1.4-2.1-1.9z"/></svg>
    );
  }
  if (lc.includes('sql server') || lc.includes('sqlalchemy') || lc.includes('sql')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 3c5 0 9 1.6 9 3.5S17 10 12 10 3 8.4 3 6.5 7 3 12 3m9 7.5c0 1.9-4 3.5-9 3.5s-9-1.6-9-3.5v3c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-3m0 6c0 1.9-4 3.5-9 3.5s-9-1.6-9-3.5v3C3 21.9 7 23.5 12 23.5s9-1.6 9-3.5z"/></svg>
    );
  }
  if (lc.includes('nextauth') || lc.includes('jwt') || lc.includes('auth')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4m0 4.1 6 2.7v3.3c0 4.2-2.7 8-6 9.2-3.3-1.2-6-5-6-9.2V7.8l6-2.7z"/></svg>
    );
  }
  if (lc.includes('zod') || lc.includes('joi')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 2a5 5 0 0 1 5 5v3h-2V7a3 3 0 0 0-6 0v3H7V7a5 5 0 0 1 5-5m7 9H5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9z"/></svg>
    );
  }
  if (lc.includes('python')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M9 3h6a4 4 0 0 1 4 4v3H9a3 3 0 0 0-3 3v4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h4m6 18H9a4 4 0 0 1-4-4v-3h10a3 3 0 0 0 3-3V7h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4z"/></svg>
    );
  }
  if (lc.includes('fastapi')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 5 4 10h-2l-1-2h-4l-1 2H7l4-10z"/></svg>
    );
  }
  if (lc.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M3 14h2v2H3v-2m3 0h2v2H6v-2m3 0h2v2H9v-2m3 0h2v2h-2v-2m3 0h2v2h-2v-2M3 11h2v2H3v-2m3 0h2v2H6v-2m3 0h2v2H9v-2m3 0h2v2h-2v-2m6 1c1.1 0 2 .9 2 2 0 1.5-1.7 2.9-3.9 3.7-1.4.5-3 .8-4.6.8-2.4 0-4.7-.5-6.5-1.5C2.8 16.8 2 15.6 2 14c0-1.1.9-2 2-2h14z"/></svg>
    );
  }
  if (lc.includes('pytorch')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 2l3 3-7 7a5 5 0 1 0 7 7l3-3 2 2-3 3a8 8 0 1 1-11-11l7-7z"/></svg>
    );
  }
  if (lc.includes('yolo')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/><path fill="currentColor" d="M11 7h2v6h-2zM11 15h2v2h-2z"/></svg>
    );
  }
  if (lc.includes('openvino')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4z"/></svg>
    );
  }
  if (lc.includes('express') || lc.includes('node')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="m12 2 8 4v8c0 3.9-3.1 7.3-8 8-4.9-.7-8-4.1-8-8V6l8-4m0 2.2L6 7.1v6.6c0 3.1 2.6 5.8 6 6.4 3.4-.6 6-3.3 6-6.4V7.1l-6-2.9z"/></svg>
    );
  }
  if (lc.includes('material') || lc.includes('mui')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="m3 3 9 5 9-5-9 16L3 3z"/></svg>
    );
  }
  if (lc.includes('tailwind')) { /* already handled */ }
  if (lc.includes('axios')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M7 2h10l-1 2H8l-1-2m1 4h8l-1 2H9l-1-2m1 4h6l-1 2h-4l-1-2m1 4h4l-1 2h-2l-1-2z"/></svg>
    );
  }
  if (lc.includes('excel') || lc.includes('csv')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M5 3h11l3 3v15H5V3m11 1.5V7h2.5L16 4.5M7 9h6v2H7V9m0 3h8v2H7v-2m0 3h5v2H7v-2z"/></svg>
    );
  }
  if (lc.includes('ejs') || lc.includes('ssr')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M4 4h16v2H4V4m0 4h10v2H4V8m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>
    );
  }
  if (lc.includes('multer') || lc.includes('upload')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M5 20h14v-8h3l-10-9-10 9h3v8z"/></svg>
    );
  }
  if (lc.includes('sqlite') || lc.includes('mongodb') || lc.includes('database')) {
    return (
      <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M12 3c5 0 9 1.6 9 3.5S17 10 12 10 3 8.4 3 6.5 7 3 12 3z"/></svg>
    );
  }
  // Genérico
  return (
    <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path fill="currentColor" d="M4 6h16v2H4V6m0 5h16v2H4v-2m0 5h10v2H4v-2z"/></svg>
  );
}

function getStyle(label: string): Style {
  const l = label.toLowerCase();
  if (l.includes('react')) return { bg: 'bg-cyan-50 dark:bg-cyan-900/30', text: 'text-cyan-700 dark:text-cyan-200' };
  if (l.includes('next')) return { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-800 dark:text-gray-200' };
  if (l.includes('typescript') || l.includes('(ts)')) return { bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-200' };
  if (l.includes('tailwind')) return { bg: 'bg-sky-50 dark:bg-sky-900/30', text: 'text-sky-700 dark:text-sky-200' };
  if (l.includes('prisma')) return { bg: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-200' };
  if (l.includes('sql')) return { bg: 'bg-indigo-50 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-200' };
  if (l.includes('auth') || l.includes('jwt')) return { bg: 'bg-rose-50 dark:bg-rose-900/30', text: 'text-rose-700 dark:text-rose-200' };
  if (l.includes('zod') || l.includes('joi')) return { bg: 'bg-violet-50 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-200' };
  if (l.includes('python')) return { bg: 'bg-yellow-50 dark:bg-yellow-900/30', text: 'text-yellow-800 dark:text-yellow-200' };
  if (l.includes('fastapi')) return { bg: 'bg-teal-50 dark:bg-teal-900/30', text: 'text-teal-700 dark:text-teal-200' };
  if (l.includes('docker')) return { bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-200' };
  if (l.includes('pytorch') || l.includes('yolo') || l.includes('openvino')) return { bg: 'bg-orange-50 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-200' };
  if (l.includes('express') || l.includes('node')) return { bg: 'bg-lime-50 dark:bg-lime-900/30', text: 'text-lime-700 dark:text-lime-200' };
  if (l.includes('material') || l.includes('mui')) return { bg: 'bg-purple-50 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-200' };
  if (l.includes('excel') || l.includes('csv')) return { bg: 'bg-green-50 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-200' };
  if (l.includes('ejs') || l.includes('ssr')) return { bg: 'bg-zinc-100 dark:bg-zinc-800', text: 'text-zinc-800 dark:text-zinc-200' };
  if (l.includes('multer') || l.includes('upload')) return { bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/30', text: 'text-fuchsia-700 dark:text-fuchsia-200' };
  return { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-200' };
}

export default function TechPill({ label }: TechPillProps) {
  const style = getStyle(label);
  return (
    <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${style.bg} ${style.text}`}>
      <Icon name={label} />
      <span className="truncate max-w-[11rem]" title={label}>{label}</span>
    </span>
  );
}


