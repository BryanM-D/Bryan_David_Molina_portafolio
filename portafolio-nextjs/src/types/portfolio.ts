export type SkillLevel = {
  name: string;
  level: number;
};

export type KnowledgeItem = {
  title: string;
  description: string;
  icon: "code" | "layout" | "database" | "git" | "cloud" | "sparkles";
};

export type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  details: string;
  image: string;
  technologies: string[];
  repository?: string;
  demo?: string;
};
