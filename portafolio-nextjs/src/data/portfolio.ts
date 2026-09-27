import type { EducationItem, KnowledgeItem, ProjectItem, SkillLevel } from "@/types/portfolio";

/**
 * Edita SOLO este archivo para personalizar la hoja de vida.
 * Cambia nombre, foto, contacto, porcentajes, educación, proyectos y enlaces.
 */
export const personal = {
  name: "Tu Nombre",
  title: "Estudiante de Ingeniería / Desarrollador Frontend",
  profile:
    "Estudiante con interés en desarrollo web, diseño de interfaces y construcción de experiencias digitales claras, accesibles y funcionales. Me gusta convertir ideas en productos web bien estructurados y fáciles de usar.",
  city: "Medellín, Colombia",
  phone: "+57 300 000 0000",
  email: "correo@ejemplo.com",
  profileImage: "/profile-placeholder.svg",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export const languages: SkillLevel[] = [
  { name: "Español", level: 100 },
  { name: "Inglés", level: 75 },
];

export const programmingLanguages: SkillLevel[] = [
  { name: "TypeScript", level: 82 },
  { name: "JavaScript", level: 86 },
  { name: "HTML / CSS", level: 90 },
  { name: "Python", level: 65 },
];

export const extraSkills = [
  "Trabajo en equipo",
  "Comunicación",
  "Resolución de problemas",
  "Git y GitHub",
  "Diseño responsive",
  "Aprendizaje autónomo",
];

export const knowledge: KnowledgeItem[] = [
  {
    title: "Frontend moderno",
    description: "Construcción de interfaces con React, Next.js, TypeScript y componentes reutilizables.",
    icon: "code",
  },
  {
    title: "Diseño responsive",
    description: "Maquetación adaptable a escritorio, tableta y móvil mediante Tailwind CSS.",
    icon: "layout",
  },
  {
    title: "Datos y APIs",
    description: "Consumo y organización de datos para integrarlos de forma clara en aplicaciones web.",
    icon: "database",
  },
  {
    title: "Control de versiones",
    description: "Flujo de trabajo con Git y GitHub para mantener cambios trazables y ordenados.",
    icon: "git",
  },
  {
    title: "Despliegue",
    description: "Preparación de proyectos para despliegue continuo y publicación en Vercel.",
    icon: "cloud",
  },
  {
    title: "Experiencia de usuario",
    description: "Atención a jerarquía visual, accesibilidad, interacción y detalles de interfaz.",
    icon: "sparkles",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Universidad / Institución",
    period: "2023 — Actualidad",
    degree: "Ingeniería / Programa académico",
    description:
      "Formación en fundamentos de ingeniería, programación, desarrollo de software y solución estructurada de problemas.",
  },
  {
    institution: "Institución educativa",
    period: "2017 — 2022",
    degree: "Bachiller académico",
    description:
      "Formación general con énfasis en pensamiento lógico, trabajo colaborativo y habilidades comunicativas.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Dashboard académico",
    description: "Panel responsive para visualizar indicadores y progreso de actividades.",
    details:
      "Proyecto construido con componentes reutilizables y una jerarquía visual orientada a facilitar la lectura de indicadores. Incluye tarjetas, estados y navegación adaptable.",
    image: "/projects/project-dashboard.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    repository: "https://github.com/",
  },
  {
    title: "Landing de servicios",
    description: "Sitio promocional con enfoque en experiencia de usuario y conversión.",
    details:
      "Landing page con secciones modulares, llamados a la acción y comportamiento responsive. La estructura permite reutilizar componentes para nuevos productos o servicios.",
    image: "/projects/project-landing.svg",
    technologies: ["React", "Tailwind", "UX"],
    repository: "https://github.com/",
  },
  {
    title: "Gestor de tareas",
    description: "Aplicación para organizar pendientes por prioridad y estado.",
    details:
      "Aplicación interactiva que permite presentar tareas de manera visual y ordenada. El proyecto demuestra manejo de estado, componentes reutilizables y diseño orientado a acciones.",
    image: "/projects/project-tasks.svg",
    technologies: ["React", "TypeScript", "UI"],
    repository: "https://github.com/",
  },
];
