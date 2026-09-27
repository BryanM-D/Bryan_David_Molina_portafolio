"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/molecules/Modal";
import { Tag } from "@/components/atoms/Tag";
import type { ProjectItem } from "@/types/portfolio";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="min-w-[290px] max-w-[340px] snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:min-w-[340px]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image src={project.image} alt={`Vista previa de ${project.title}`} fill className="object-cover transition duration-500 hover:scale-105" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-black text-slate-900">{project.title}</h3>
          <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center gap-2 font-bold text-amber-700 transition hover:gap-3"
          >
            Saber más <ExternalLink size={16} />
          </button>
        </div>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} title={project.title}>
        <p className="leading-7 text-slate-600">{project.details}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-slate-700">
              <Github size={17} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300">
              <ExternalLink size={17} /> Ver proyecto
            </a>
          )}
        </div>
      </Modal>
    </>
  );
}
