import { Cloud, Code2, Database, GitBranch, PanelsTopLeft, Sparkles } from "lucide-react";
import type { KnowledgeItem } from "@/types/portfolio";

const icons = {
  code: Code2,
  layout: PanelsTopLeft,
  database: Database,
  git: GitBranch,
  cloud: Cloud,
  sparkles: Sparkles,
};

export function KnowledgeCard({ item }: { item: KnowledgeItem }) {
  const Icon = icons[item.icon];

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:rotate-3">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
    </article>
  );
}
