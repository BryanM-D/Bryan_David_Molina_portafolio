Portafolio personal — Proyecto Evaluativo 1
Proyecto de hoja de vida / portafolio desarrollado con Next.js + React + TypeScript + Tailwind CSS , preparado para implementación en Vercel .

Objetivo académico
El proyecto cubre los requisitos solicitados en el Proyecto Evaluativo 1 de Ingeniería Web:

Menú lateral izquierdo con información personal, contacto, idiomas, lenguajes y habilidades extra.
Contenido central con desplazamiento vertical.
Perfil con botón que abre un diálogo.
Sección de conocimientos mediante tarjetas reutilizables.
Sección de educación mediante tarjetas reutilizables.
Portafolio con scroll horizontal y modal de detalle por proyecto.
Pie de página personalizado.
Menú fijo derecho con enlaces a GitHub y LinkedIn.
Diseño responsive.
Uso de Tailwind CSS.
Arquitectura basada en Diseño Atómico.
Más de 6 componentes reutilizables.
Tecnologías
Next.js 16.x
React 19
Mecanografiado
Tailwind CSS 4.x
Lucide React para iconografía
Arquitectura / Diseño Atómico
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
Instalación
npm install
npm run dev
Abre http://localhost:3000.

Validación
npm run lint
npm run build
No entregues el proyecto si alguno de esos comandos falla.

Git y GitHub
Según el enunciado, crea el repositorio en la organización de la clase con el formato:

nombre-apellidos-portafolio
Flujo sugerido:

git init
git add .
git commit -m "feat: initial portfolio implementation"
git branch -M main
git remote add origin https://github.com/BryanM-D/Bryan_David_Molina_portafolio.git
git push -u origin main
Realiza compromisos adicionales durante el proceso. El profesor calificará el último compromiso mainrealizado antes de la fecha límite.

Despliegue en Vercel
Ingresa a Vercel e inicia sesión con GitHub.
Importa el repositorio.
Vercel detectará Next.js automáticamente.
Despliegue de Pulsa .
Configure el dominio del proyecto con el formato solicitado:
nombre-apellidos.vercel.app
Agrega ese enlace al repositorio y entrégalo según las instrucciones del curso.
Lista de verificación de entrega
Datos personales reales.
Fotografía real.
GitHub real.
LinkedIn real.
Educación actualizada.
Al menos tres proyectos propios o académicos.
Revisar ortografía (la rúbrica penaliza cada error).
Probar versión móvil, tableta y escritorio.
Ejecutar npm run lint.
Ejecutar npm run build.
Repositorio con nombre correcto.
Profesor agregado como colaborador/equipo.
Despliegue final en Vercel.
URL de Vercel agregada al repositorio.
Último compromiso en mainantes de la fecha de entrega.
Ideas para puntos de creatividad
Ya incluido:

Microinteracciones flotan.
Modal accesible con cierre por Escape.
Desplazamiento horizontal con scroll-snap.
Diseño responsive.
Jerarquía visual propia.
Opcionales para ampliar:

Modo oscuro.
Filtro de proyectos.
Animaciones al entrar en la ventana gráfica.
Descarga de CV en PDF.
Formulario de contacto.
