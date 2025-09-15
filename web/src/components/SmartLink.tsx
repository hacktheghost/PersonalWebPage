"use client";
import Link from 'next/link';
import type React from 'react';
import { useCallback } from 'react';

type Props = Omit<React.ComponentProps<typeof Link>, 'href' | 'onClick'> & {
  href: string;
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
};

export default function SmartLink({ href, children, onClick, ...rest }: Props) {
  const handleClick = useCallback<NonNullable<React.AnchorHTMLAttributes<HTMLAnchorElement>['onClick']>>((e) => {
    // Evitar “trabas” si ya estamos en la misma ruta (no disparar spinner ni navegación)
    try {
      const strip = (s: string) => s.replace(/\/+$/, '');
      const currentUrl = new URL(window.location.href);
      const rawTarget = typeof href === 'string' ? href : (href as any).pathname || '/';
      const targetUrl = new URL(rawTarget, window.location.origin);
      const curPath = strip(currentUrl.pathname);
      const tgtPath = strip(targetUrl.pathname);
      const curQuery = currentUrl.search;
      const tgtQuery = targetUrl.search;
      const curHash = currentUrl.hash;
      const tgtHash = targetUrl.hash;
      const samePath = curPath === tgtPath || (`${curPath}/` === tgtPath) || (curPath === `${tgtPath}/`);
      const sameQuery = curQuery === tgtQuery; // bloquear solo si query igual
      const sameHash = curHash === tgtHash;   // y hash igual
      if (samePath && sameQuery && sameHash) {
        e.preventDefault();
        e.stopPropagation();
        onClick?.(e);
        return;
      }
    } catch {}
    try { window.dispatchEvent(new CustomEvent('navstart')); } catch {}
    onClick?.(e);
  }, [onClick]);

  return (
    <Link href={href as any} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}


