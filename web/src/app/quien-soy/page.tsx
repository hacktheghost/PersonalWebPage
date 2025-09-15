import type { Metadata } from 'next';
import { getSiteData } from '@/lib/data';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: '¿Quién soy? — Daniel A. Flores',
  description: 'Historia profesional, educación, filosofía y enfoque de Daniel A. Flores.',
};

export default function AboutPage() {
  getSiteData(); // asegura el tipo y el acceso a datos en servidor (no usado directamente)
  return <AboutClient />;
}



