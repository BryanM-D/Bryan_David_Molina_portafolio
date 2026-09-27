import type { EducationItem, KnowledgeItem, ProjectItem, SkillLevel } from "@/types/portfolio";

/**
 * Edita SOLO este archivo para personalizar la hoja de vida.
 * Cambia nombre, foto, contacto, porcentajes, educación, proyectos y enlaces.
 */
export const personal = {
  name: "Bryan David Molina Dominguez",
  title: "Estudiante de Ingeniería en sistemas / Desarrollador Frontend",
  profile:
    "Estudiante con interés en desarrollo web, diseño de interfaces y construcción de experiencias digitales claras, accesibles y funcionales. Me gusta convertir ideas en productos web bien estructurados y fáciles de usar.",
  city: "La estrella, Colombia",
  phone: "+57 300 679 5252",
  email: "bryan.molina@udea.edu.co",
  profileImage: "/profile-placeholder.jpeg",
  github: "https://github.com/BryanM-D",
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
    institution: "Universidad de Antioquia",
    period: "2023 — Actualidad",
    degree: "Ingeniería en sistemas",
    description:
      "Formación en fundamentos de ingeniería, programación, desarrollo de software y solución estructurada de problemas.",
  },
  {
    institution: "Institución educativa la camila",
    period: "2017 — 2022",
    degree: "Bachiller académico",
    description:
      "Formación general con énfasis en pensamiento lógico, trabajo colaborativo y habilidades comunicativas.",
  },
];
export const projects: ProjectItem[] = [
  {
    title: "Portafolio Personal",
    description:
      "Portafolio desarrollado con Next.js y TypeScript para presentar experiencia, habilidades y proyectos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-landing.svg",
    repository: "https://github.com/BryanM-D/Bryan_David_Molina_portafolio",
    demo: "",
  },
  {
    title: "Dashboard Power BI",
    description:
      "Tablero para seguimiento de objetivos, actividades y cronogramas de ejecución.",
    technologies: ["Power BI", "Excel"],
    image: "/projects/project-dashboard.svg",
    repository: "",
    demo: "",
  },
  {
    title: "Motor Scoring Crediticio",
    description:
      "Proyecto académico para análisis de cobertura, pruebas unitarias y métricas de calidad.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JaCoCo"],
    image: "/projects/project-tasks.svg",
    repository: "",
    demo: "",
  },
];
