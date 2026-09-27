import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { knowledge } from "@/data/portfolio";

export function KnowledgeSection() {
  return (
    <section id="conocimientos" className="py-16">
      <SectionTitle eyebrow="Lo que sé" title="Conocimientos" description="Tecnologías y capacidades que aplico para convertir ideas en productos web funcionales." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((item) => <KnowledgeCard key={item.title} item={item} />)}
      </div>
    </section>
  );
}
