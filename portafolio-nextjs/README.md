# Portafolio personal — Proyecto Evaluativo 1

Proyecto de hoja de vida / portafolio desarrollado con **Next.js + React + TypeScript + Tailwind CSS**, preparado para despliegue en **Vercel**.

## Objetivo académico

El proyecto cubre los requisitos solicitados en el Proyecto Evaluativo 1 de Ingeniería Web:

- Menú lateral izquierdo con información personal, contacto, idiomas, lenguajes y habilidades extra.
- Contenido central con scroll vertical.
- Perfil con botón que abre un diálogo.
- Sección de conocimientos mediante tarjetas reutilizables.
- Sección de educación mediante tarjetas reutilizables.
- Portafolio con scroll horizontal y modal de detalle por proyecto.
- Footer personalizado.
- Menú fijo derecho con enlaces a GitHub y LinkedIn.
- Diseño responsive.
- Uso de Tailwind CSS.
- Arquitectura basada en Atomic Design.
- Más de 6 componentes reutilizables.

## Tecnologías

- Next.js 16.x
- React 19
- TypeScript
- Tailwind CSS 4.x
- Lucide React para iconografía

## Arquitectura / Atomic Design

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── atoms/
│   │   ├── IconButton.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Tag.tsx
│   ├── molecules/
│   │   ├── EducationCard.tsx
│   │   ├── KnowledgeCard.tsx
│   │   ├── Modal.tsx
│   │   └── ProjectCard.tsx
│   └── organisms/
│       ├── EducationSection.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── KnowledgeSection.tsx
│       ├── PortfolioSection.tsx
│       ├── Sidebar.tsx
│       └── SocialRail.tsx
├── data/
│   └── portfolio.ts
└── types/
    └── portfolio.ts
```

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Validación

```bash
npm run lint
npm run build
```

No entregues el proyecto si alguno de esos comandos falla.

## Git y GitHub

Según el enunciado, crea el repositorio en la organización de la clase con el formato:

```text
nombre-apellidos-portafolio
```

Flujo sugerido:

```bash
git init
git add .
git commit -m "feat: initial portfolio implementation"
git branch -M main
git remote add origin https://github.com/BryanM-D/Bryan_David_Molina_portafolio.git
git push -u origin main
```

Realiza commits adicionales durante el proceso. El profesor calificará el último commit en `main` realizado antes de la fecha límite.

## Despliegue en Vercel

1. Entra a Vercel e inicia sesión con GitHub.
2. Importa el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Pulsa **Deploy**.
5. Configura el dominio del proyecto con el formato solicitado:

```text
nombre-apellidos.vercel.app
```

6. Agrega ese enlace al repositorio y entrégalo según las instrucciones del curso.

## Checklist de entrega

- [ ] Datos personales reales.
- [ ] Fotografía real.
- [ ] GitHub real.
- [ ] LinkedIn real.
- [ ] Educación actualizada.
- [ ] Al menos tres proyectos propios o académicos.
- [ ] Revisar ortografía (la rúbrica penaliza cada error).
- [ ] Probar versión móvil, tableta y escritorio.
- [ ] Ejecutar `npm run lint`.
- [ ] Ejecutar `npm run build`.
- [ ] Repositorio con nombre correcto.
- [ ] Profesor agregado como colaborador/equipo.
- [ ] Despliegue final en Vercel.
- [ ] URL de Vercel agregada al repositorio.
- [ ] Último commit en `main` antes de la fecha de entrega.

## Ideas para puntos de creatividad

Ya incluidas:

- Microinteracciones hover.
- Modal accesible con cierre por `Escape`.
- Scroll horizontal con `scroll-snap`.
- Diseño responsive.
- Jerarquía visual propia.

Opcionales para ampliar:

- Modo oscuro.
- Filtro de proyectos.
- Animaciones al entrar en viewport.
- Descarga de CV en PDF.
- Formulario de contacto.
