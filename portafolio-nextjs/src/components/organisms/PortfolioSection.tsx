import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { projects } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-16">
      <SectionTitle eyebrow="Trabajo aplicado" title="Portafolio" description="Una selección de proyectos académicos y personales. Desliza horizontalmente para explorarlos." />
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:thin]">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
