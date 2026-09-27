import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-8 rounded-t-[2rem] bg-slate-950 px-7 py-10 text-slate-300 md:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Hablemos</p>
          <h2 className="mt-2 text-3xl font-black text-white">¿Construimos algo interesante?</h2>
          <a href={`mailto:${personal.email}`} className="mt-3 inline-block text-sm hover:text-amber-300">{personal.email}</a>
        </div>
        <div className="flex gap-3">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950"><Github size={18} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950"><Linkedin size={18} /></a>
          <a href={`mailto:${personal.email}`} aria-label="Correo" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950"><Mail size={18} /></a>
        </div>
      </div>
      <p className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">© 2026 {personal.name}. Construido con Next.js, TypeScript y Tailwind CSS.</p>
    </footer>
  );
}
