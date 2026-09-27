import { GraduationCap } from "lucide-react";
import type { EducationItem } from "@/types/portfolio";

export function EducationCard({ item }: { item: EducationItem }) {
  return (
    <article className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[auto_1fr] md:p-8">
      <div className="grid size-12 place-items-center rounded-2xl bg-slate-900 text-amber-400">
        <GraduationCap size={24} />
      </div>
      <div>
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="text-lg font-extrabold text-slate-900">{item.institution}</h3>
          <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">{item.period}</span>
        </div>
        <p className="mt-2 font-semibold text-slate-700">{item.degree}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}
