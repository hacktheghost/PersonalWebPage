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
    // Evitar “trabas” si ya estamos en la misma ruta
    try {
      const current = window.location.pathname + window.location.search + window.location.hash;
      const target = typeof href === 'string' ? href : (href as any).pathname || '';
      if (target && (target === window.location.pathname || target === current)) {
        // no disparamos spinner ni navegación
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


