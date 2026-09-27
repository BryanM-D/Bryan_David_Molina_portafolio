"use client";

import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/molecules/Modal";
import { personal } from "@/data/portfolio";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="perfil" className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
      <div className="grid min-h-[480px] items-center gap-8 p-7 md:grid-cols-[1.15fr_.85fr] md:p-12">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-800">
            <Sparkles size={15} /> Portafolio personal
          </div>
          <p className="text-lg font-semibold text-slate-500">Hola, soy</p>
          <h2 className="mt-1 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">{personal.name}</h2>
          <p className="mt-4 max-w-xl text-xl font-bold leading-8 text-amber-600">{personal.title}</p>
          <p className="mt-5 max-w-xl leading-7 text-slate-600">{personal.profile}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
              Conocer más <ArrowRight size={17} />
            </button>
            <a href="#portafolio" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-amber-400 hover:text-slate-950">
              Ver proyectos <Download size={17} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[330px]">
          <div className="absolute -inset-5 -rotate-3 rounded-[2.2rem] bg-amber-300" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white ring-8 ring-white">
            <Image src={personal.profileImage} alt={`Retrato de ${personal.name}`} fill className="object-cover" priority />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Más sobre mí">
        <div className="space-y-4 leading-7 text-slate-600">
          <p>{personal.profile}</p>
          <p>
            Actualmente estoy fortaleciendo mis habilidades en desarrollo frontend, arquitectura de componentes, diseño responsive y despliegue de aplicaciones modernas.
          </p>
          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Detalle creativo:</strong> este diálogo es accesible, se puede cerrar con la tecla Escape o haciendo clic fuera de la tarjeta.
          </div>
        </div>
      </Modal>
    </section>
  );
}
