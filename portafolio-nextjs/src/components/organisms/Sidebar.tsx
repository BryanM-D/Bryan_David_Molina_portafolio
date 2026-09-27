import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { extraSkills, languages, personal, programmingLanguages } from "@/data/portfolio";
import { ProgressBar } from "@/components/atoms/ProgressBar";

export function Sidebar() {
  return (
    <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-[300px] lg:overflow-y-auto">
      <div className="min-h-full bg-slate-900 px-7 py-8 text-white">
        <div className="text-center">
          <div className="relative mx-auto size-28 overflow-hidden rounded-full border-4 border-amber-400 bg-white">
            <Image src={personal.profileImage} alt={`Foto de ${personal.name}`} fill className="object-cover" priority />
          </div>
          <h1 className="mt-5 text-2xl font-black">{personal.name}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-400">{personal.title}</p>
        </div>

        <div className="my-7 h-px bg-slate-800" />

        <section aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Contacto</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0" size={16} /> {personal.city}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 shrink-0" size={16} /> {personal.phone}</p>
            <p className="flex gap-3 break-all"><Mail className="mt-0.5 shrink-0" size={16} /> {personal.email}</p>
          </div>
        </section>

        <div className="my-7 h-px bg-slate-800" />

        <section aria-labelledby="languages-title">
          <h2 id="languages-title" className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Idiomas</h2>
          <div className="mt-4 space-y-4">
            {languages.map((item) => <ProgressBar key={item.name} label={item.name} value={item.level} />)}
          </div>
        </section>

        <div className="my-7 h-px bg-slate-800" />

        <section aria-labelledby="programming-title">
          <h2 id="programming-title" className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Programación</h2>
          <div className="mt-4 space-y-4">
            {programmingLanguages.map((item) => <ProgressBar key={item.name} label={item.name} value={item.level} />)}
          </div>
        </section>

        <div className="my-7 h-px bg-slate-800" />

        <section aria-labelledby="skills-title">
          <h2 id="skills-title" className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Habilidades extra</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {extraSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-amber-400" /> {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
