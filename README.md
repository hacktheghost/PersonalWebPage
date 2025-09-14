### 🌐 Personal Page — Next.js 15 + React 19 + Tailwind CSS

<p align="left">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white" />
  <img alt="tsParticles" src="https://img.shields.io/badge/tsParticles-3-1E90FF" />
  <img alt="Lenis" src="https://img.shields.io/badge/Lenis-1-000000" />
  <img alt="Vercel" src="https://img.shields.io/badge/%E2%96%B2%20Vercel-ready-black?logo=vercel&logoColor=white" />
</p>

Sitio personal construido con Next.js (App Router), TypeScript y Tailwind CSS. Incluye animaciones con Framer Motion, partículas de fondo con tsParticles y desplazamiento suave con Lenis.

---

### ✨ Demo
- Producción: añade aquí tu URL de despliegue (por ejemplo, `https://tu-dominio.com`).

---

### 🧱 Stack
- **Framework**: Next.js 15 (App Router, `reactStrictMode`, `typedRoutes`)
- **UI**: Tailwind CSS 3
- **Lenguaje**: TypeScript 5 (tipado estricto)
- **Animaciones**: Framer Motion 11
- **UX**: Lenis (smooth scrolling)
- **Efectos**: tsParticles (slim)

---

### 🗂️ Estructura del proyecto
```
personalpage/
├─ web/
│  ├─ public/
│  │  ├─ Daniel Maynez - IT Manager.pdf
│  │  └─ profile.jpg
│  ├─ src/
│  │  ├─ app/
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ proyectos/
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [slug]/page.tsx
│  │  │  └─ quien-soy/page.tsx
│  │  ├─ components/ (UI y elementos reutilizables)
│  │  └─ lib/
│  ├─ data.json
│  ├─ next.config.ts
│  ├─ tailwind.config.ts
│  ├─ tsconfig.json
│  └─ package.json
├─ .gitignore
└─ README.md
```

---

### 🚀 Puesta en marcha
Requisitos: Node.js 18.18+ (o 20+ recomendado) y npm.

```bash
cd web
npm install
npm run dev
```
- Abre `http://localhost:3000`.

Scripts disponibles en `web/package.json`:
- `npm run dev`: arranca el servidor de desarrollo
- `npm run build`: genera el build de producción
- `npm start`: ejecuta el servidor en modo producción
- `npm run lint`: ejecuta ESLint integrado en Next.js

---

### 🎨 Estilos y UI
- Tailwind configurado en `web/tailwind.config.ts` con `darkMode: 'class'` y colores extendidos.
- Estilos globales en `web/src/app/globals.css`.

---

### 🧩 Componentes destacados
- `ContactModal.tsx`, `ExperienceTimeline.tsx`, `ParticlesBackground.tsx`, `TechBadges.tsx`, entre otros, ubicados en `web/src/components/`.
- Datos y utilidades en `web/src/lib/` y `web/data.json`.

---

### ⚙️ Configuración
- Tipado y rutas tipadas: `web/tsconfig.json` (paths `@/components/*`, `@/lib/*`, `@/app/*`).
- Next.js: `web/next.config.ts` (`reactStrictMode: true`, `typedRoutes: true`).

---

### 🔐 Variables de entorno
No se requieren por defecto. Si llegas a necesitarlas:
1. Crea `web/.env.local` (y nunca lo subas, ya está ignorado por `.gitignore`).
2. Expón variables en el cliente con prefijo `NEXT_PUBLIC_`.

Ejemplo:
```bash
# web/.env.local
NEXT_PUBLIC_ANALYTICS_ID=xxxxxx
```

---

### 📦 Construcción y despliegue
- Build local:
```bash
cd web
npm run build
npm start
```
- Despliegue recomendado: Vercel.
  - Importa el repositorio y selecciona `web/` como raíz del proyecto.
  - Variables de entorno (si aplica) en el panel de Vercel.

---

### 🧰 Mantenimiento
- Actualiza dependencias con cuidado (Next 15/React 19 están en evolución).
- Revisa breaking changes en las notas de versión.

---

### 🖼️ Personalización rápida
- Reemplaza `web/public/profile.jpg` por tu foto.
- Sustituye o renombra el PDF en `web/public/` si cambias tu CV.
- Ajusta textos y datos en `web/src/app/*`, `web/src/lib/*` y `web/data.json`.

---

### 🤝 Contribuciones
Abre un issue o PR con sugerencias/mejoras. ¡Gracias por aportar!
